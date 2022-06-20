import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
	title: string;
	Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
	Img?: any;
	description: JSX.Element;
	emoji?: string;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Familiar Syntax',
		Svg: require('@site/static/img/undraw_file_bundle.svg').default,
		description: (
			<>
				Choppy is a curly brace language with syntax that closely resembles JavaScript, but with
				a few extra tricks up it&apos;s sleeve.
			</>
		),
		emoji: '👍'
	},
	{
		title: 'Powerful Features',
		Svg: require('@site/static/img/undraw_proud_coder.svg').default,
		// Img: "../img/code4.png",
		description: (
			<>
				With named class constructors, destructors, and numerous primitive functions,
				you&apos;ll be glad to use Choppy in your next project.
			</>
		),
		emoji: '💪'
	},
	{
		title: 'Open Source',
		Svg: require('@site/static/img/undraw_open_source.svg').default,
		description: (
			<>
				Choppy is 100% open source, based on the Apache 2.0 License. You can visit the
				GitHub repository <Link href="https://github.com/choppy-lang/choppy">here</Link>.
				Issues are welcome!
			</>
		),
		emoji: '📖'
	}
];

function Feature({ title, Svg, Img, description, emoji }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			{Svg ?
				<div className="text--center">
					<Svg className={styles.featureSvg} role="img" />
				</div>
				:
				<img src={Img} className={styles.featureImg} alt="Code Picture" />
			}
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
