import React from 'react';
import { Specs } from '../domain/projec';
import styles from '../CSS.modules/SmartPhoneSpecs.module.css';

interface SmartPhoneSpecsProps {
  specs: Specs;
  brand: string;
  name: string;
  description: string;
}

/**
 * A React functional component that displays the specifications of a smartphone
 * in a tabular format. It accepts various props to render details such as brand,
 * name, description, and technical specifications.
 *
 * @param {SmartPhoneSpecsProps} props - The properties for the component.
 * @param {object} props.specs - The technical specifications of the smartphone.
 * @param {string} props.specs.battery - The battery details of the smartphone.
 * @param {string} props.specs.mainCamera - The main camera specifications.
 * @param {string} props.specs.os - The operating system of the smartphone.
 * @param {string} props.specs.processor - The processor details.
 * @param {string} props.specs.resolution - The screen resolution.
 * @param {string} props.specs.screenRefreshRate - The screen refresh rate.
 * @param {string} props.specs.selfieCamera - The selfie camera specifications.
 * @param {string} props.specs.screen - The screen details.
 * @param {string} props.brand - The brand of the smartphone.
 * @param {string} props.name - The name or model of the smartphone.
 * @param {string} props.description - A brief description of the smartphone.
 *
 * @returns {JSX.Element} A JSX element that renders the smartphone specifications.
 */
export const SmartPhoneSpecs = ({
  specs,
  brand,
  name,
  description,
}: SmartPhoneSpecsProps) => {
  const {
    battery,
    mainCamera,
    os,
    processor,
    resolution,
    screenRefreshRate,
    selfieCamera,
    screen,
  } = specs;
  return (
    <div className={styles.specs}>
      <h1 style={{ textAlign: 'left', width: '100%' }}>SPECIFICATIONS</h1>
      <table>
        <tbody>
          <tr>
            <td className={styles.upperLetter}>brand</td>
            <td className={styles.padding16}>{brand}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>name</td>
            <td className={styles.padding16}>{name}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>description</td>
            <td className={styles.padding16}>{description}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>screen</td>
            <td className={styles.padding16}>{screen}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>resolution</td>
            <td className={styles.padding16}>{resolution}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>processor</td>
            <td className={styles.padding16}>{processor}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>main camera</td>
            <td className={styles.padding16}>{mainCamera}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>selfie camera</td>
            <td className={styles.padding16}>{selfieCamera}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>battery</td>
            <td className={styles.padding16}>{battery}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>os</td>
            <td className={styles.padding16}>{os}</td>
          </tr>
          <tr>
            <td className={styles.upperLetter}>screen refresh rate</td>
            <td className={styles.padding16}>{screenRefreshRate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
