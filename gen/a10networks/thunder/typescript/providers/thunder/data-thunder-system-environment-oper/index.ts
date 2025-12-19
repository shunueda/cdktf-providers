// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemEnvironmentOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#id DataThunderSystemEnvironmentOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#oper DataThunderSystemEnvironmentOper#oper}
  */
  readonly oper?: DataThunderSystemEnvironmentOperOper;
}
export interface DataThunderSystemEnvironmentOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#cpu0_temperature DataThunderSystemEnvironmentOper#cpu0_temperature}
  */
  readonly cpu0Temperature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#cpu1_temperature DataThunderSystemEnvironmentOper#cpu1_temperature}
  */
  readonly cpu1Temperature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan10a_report DataThunderSystemEnvironmentOper#fan10a_report}
  */
  readonly fan10AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan10a_value DataThunderSystemEnvironmentOper#fan10a_value}
  */
  readonly fan10AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan10b_report DataThunderSystemEnvironmentOper#fan10b_report}
  */
  readonly fan10BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan10b_value DataThunderSystemEnvironmentOper#fan10b_value}
  */
  readonly fan10BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan1a_report DataThunderSystemEnvironmentOper#fan1a_report}
  */
  readonly fan1AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan1a_value DataThunderSystemEnvironmentOper#fan1a_value}
  */
  readonly fan1AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan1b_report DataThunderSystemEnvironmentOper#fan1b_report}
  */
  readonly fan1BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan1b_value DataThunderSystemEnvironmentOper#fan1b_value}
  */
  readonly fan1BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan2a_report DataThunderSystemEnvironmentOper#fan2a_report}
  */
  readonly fan2AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan2a_value DataThunderSystemEnvironmentOper#fan2a_value}
  */
  readonly fan2AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan2b_report DataThunderSystemEnvironmentOper#fan2b_report}
  */
  readonly fan2BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan2b_value DataThunderSystemEnvironmentOper#fan2b_value}
  */
  readonly fan2BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan3a_report DataThunderSystemEnvironmentOper#fan3a_report}
  */
  readonly fan3AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan3a_value DataThunderSystemEnvironmentOper#fan3a_value}
  */
  readonly fan3AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan3b_report DataThunderSystemEnvironmentOper#fan3b_report}
  */
  readonly fan3BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan3b_value DataThunderSystemEnvironmentOper#fan3b_value}
  */
  readonly fan3BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan4a_report DataThunderSystemEnvironmentOper#fan4a_report}
  */
  readonly fan4AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan4a_value DataThunderSystemEnvironmentOper#fan4a_value}
  */
  readonly fan4AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan4b_report DataThunderSystemEnvironmentOper#fan4b_report}
  */
  readonly fan4BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan4b_value DataThunderSystemEnvironmentOper#fan4b_value}
  */
  readonly fan4BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan5a_report DataThunderSystemEnvironmentOper#fan5a_report}
  */
  readonly fan5AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan5a_value DataThunderSystemEnvironmentOper#fan5a_value}
  */
  readonly fan5AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan5b_report DataThunderSystemEnvironmentOper#fan5b_report}
  */
  readonly fan5BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan5b_value DataThunderSystemEnvironmentOper#fan5b_value}
  */
  readonly fan5BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan6a_report DataThunderSystemEnvironmentOper#fan6a_report}
  */
  readonly fan6AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan6a_value DataThunderSystemEnvironmentOper#fan6a_value}
  */
  readonly fan6AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan6b_report DataThunderSystemEnvironmentOper#fan6b_report}
  */
  readonly fan6BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan6b_value DataThunderSystemEnvironmentOper#fan6b_value}
  */
  readonly fan6BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan7a_report DataThunderSystemEnvironmentOper#fan7a_report}
  */
  readonly fan7AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan7a_value DataThunderSystemEnvironmentOper#fan7a_value}
  */
  readonly fan7AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan7b_report DataThunderSystemEnvironmentOper#fan7b_report}
  */
  readonly fan7BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan7b_value DataThunderSystemEnvironmentOper#fan7b_value}
  */
  readonly fan7BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan8a_report DataThunderSystemEnvironmentOper#fan8a_report}
  */
  readonly fan8AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan8a_value DataThunderSystemEnvironmentOper#fan8a_value}
  */
  readonly fan8AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan8b_report DataThunderSystemEnvironmentOper#fan8b_report}
  */
  readonly fan8BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan8b_value DataThunderSystemEnvironmentOper#fan8b_value}
  */
  readonly fan8BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan9a_report DataThunderSystemEnvironmentOper#fan9a_report}
  */
  readonly fan9AReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan9a_value DataThunderSystemEnvironmentOper#fan9a_value}
  */
  readonly fan9AValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan9b_report DataThunderSystemEnvironmentOper#fan9b_report}
  */
  readonly fan9BReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#fan9b_value DataThunderSystemEnvironmentOper#fan9b_value}
  */
  readonly fan9BValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#physical_temperature DataThunderSystemEnvironmentOper#physical_temperature}
  */
  readonly physicalTemperature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#physical_temperature2 DataThunderSystemEnvironmentOper#physical_temperature2}
  */
  readonly physicalTemperature2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#power_unit1 DataThunderSystemEnvironmentOper#power_unit1}
  */
  readonly powerUnit1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#power_unit2 DataThunderSystemEnvironmentOper#power_unit2}
  */
  readonly powerUnit2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#power_unit3 DataThunderSystemEnvironmentOper#power_unit3}
  */
  readonly powerUnit3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#power_unit4 DataThunderSystemEnvironmentOper#power_unit4}
  */
  readonly powerUnit4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#pu2_physical_temperature DataThunderSystemEnvironmentOper#pu2_physical_temperature}
  */
  readonly pu2PhysicalTemperature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#pu2_physical_temperature2 DataThunderSystemEnvironmentOper#pu2_physical_temperature2}
  */
  readonly pu2PhysicalTemperature2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#pu2_voltage_label_10 DataThunderSystemEnvironmentOper#pu2_voltage_label_10}
  */
  readonly pu2VoltageLabel10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#pu2_voltage_label_7 DataThunderSystemEnvironmentOper#pu2_voltage_label_7}
  */
  readonly pu2VoltageLabel7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#pu2_voltage_label_8 DataThunderSystemEnvironmentOper#pu2_voltage_label_8}
  */
  readonly pu2VoltageLabel8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#pu2_voltage_label_9 DataThunderSystemEnvironmentOper#pu2_voltage_label_9}
  */
  readonly pu2VoltageLabel9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_1 DataThunderSystemEnvironmentOper#voltage_label_1}
  */
  readonly voltageLabel1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_10 DataThunderSystemEnvironmentOper#voltage_label_10}
  */
  readonly voltageLabel10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_11 DataThunderSystemEnvironmentOper#voltage_label_11}
  */
  readonly voltageLabel11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_12 DataThunderSystemEnvironmentOper#voltage_label_12}
  */
  readonly voltageLabel12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_13 DataThunderSystemEnvironmentOper#voltage_label_13}
  */
  readonly voltageLabel13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_14 DataThunderSystemEnvironmentOper#voltage_label_14}
  */
  readonly voltageLabel14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_15 DataThunderSystemEnvironmentOper#voltage_label_15}
  */
  readonly voltageLabel15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_16 DataThunderSystemEnvironmentOper#voltage_label_16}
  */
  readonly voltageLabel16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_17 DataThunderSystemEnvironmentOper#voltage_label_17}
  */
  readonly voltageLabel17?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_2 DataThunderSystemEnvironmentOper#voltage_label_2}
  */
  readonly voltageLabel2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_3 DataThunderSystemEnvironmentOper#voltage_label_3}
  */
  readonly voltageLabel3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_4 DataThunderSystemEnvironmentOper#voltage_label_4}
  */
  readonly voltageLabel4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_5 DataThunderSystemEnvironmentOper#voltage_label_5}
  */
  readonly voltageLabel5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_6 DataThunderSystemEnvironmentOper#voltage_label_6}
  */
  readonly voltageLabel6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_7 DataThunderSystemEnvironmentOper#voltage_label_7}
  */
  readonly voltageLabel7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_8 DataThunderSystemEnvironmentOper#voltage_label_8}
  */
  readonly voltageLabel8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#voltage_label_9 DataThunderSystemEnvironmentOper#voltage_label_9}
  */
  readonly voltageLabel9?: string;
}

export function dataThunderSystemEnvironmentOperOperToTerraform(struct?: DataThunderSystemEnvironmentOperOperOutputReference | DataThunderSystemEnvironmentOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu0_temperature: cdktf.stringToTerraform(struct!.cpu0Temperature),
    cpu1_temperature: cdktf.stringToTerraform(struct!.cpu1Temperature),
    fan10a_report: cdktf.stringToTerraform(struct!.fan10AReport),
    fan10a_value: cdktf.numberToTerraform(struct!.fan10AValue),
    fan10b_report: cdktf.stringToTerraform(struct!.fan10BReport),
    fan10b_value: cdktf.numberToTerraform(struct!.fan10BValue),
    fan1a_report: cdktf.stringToTerraform(struct!.fan1AReport),
    fan1a_value: cdktf.numberToTerraform(struct!.fan1AValue),
    fan1b_report: cdktf.stringToTerraform(struct!.fan1BReport),
    fan1b_value: cdktf.numberToTerraform(struct!.fan1BValue),
    fan2a_report: cdktf.stringToTerraform(struct!.fan2AReport),
    fan2a_value: cdktf.numberToTerraform(struct!.fan2AValue),
    fan2b_report: cdktf.stringToTerraform(struct!.fan2BReport),
    fan2b_value: cdktf.numberToTerraform(struct!.fan2BValue),
    fan3a_report: cdktf.stringToTerraform(struct!.fan3AReport),
    fan3a_value: cdktf.numberToTerraform(struct!.fan3AValue),
    fan3b_report: cdktf.stringToTerraform(struct!.fan3BReport),
    fan3b_value: cdktf.numberToTerraform(struct!.fan3BValue),
    fan4a_report: cdktf.stringToTerraform(struct!.fan4AReport),
    fan4a_value: cdktf.numberToTerraform(struct!.fan4AValue),
    fan4b_report: cdktf.stringToTerraform(struct!.fan4BReport),
    fan4b_value: cdktf.numberToTerraform(struct!.fan4BValue),
    fan5a_report: cdktf.stringToTerraform(struct!.fan5AReport),
    fan5a_value: cdktf.numberToTerraform(struct!.fan5AValue),
    fan5b_report: cdktf.stringToTerraform(struct!.fan5BReport),
    fan5b_value: cdktf.numberToTerraform(struct!.fan5BValue),
    fan6a_report: cdktf.stringToTerraform(struct!.fan6AReport),
    fan6a_value: cdktf.numberToTerraform(struct!.fan6AValue),
    fan6b_report: cdktf.stringToTerraform(struct!.fan6BReport),
    fan6b_value: cdktf.numberToTerraform(struct!.fan6BValue),
    fan7a_report: cdktf.stringToTerraform(struct!.fan7AReport),
    fan7a_value: cdktf.numberToTerraform(struct!.fan7AValue),
    fan7b_report: cdktf.stringToTerraform(struct!.fan7BReport),
    fan7b_value: cdktf.numberToTerraform(struct!.fan7BValue),
    fan8a_report: cdktf.stringToTerraform(struct!.fan8AReport),
    fan8a_value: cdktf.numberToTerraform(struct!.fan8AValue),
    fan8b_report: cdktf.stringToTerraform(struct!.fan8BReport),
    fan8b_value: cdktf.numberToTerraform(struct!.fan8BValue),
    fan9a_report: cdktf.stringToTerraform(struct!.fan9AReport),
    fan9a_value: cdktf.numberToTerraform(struct!.fan9AValue),
    fan9b_report: cdktf.stringToTerraform(struct!.fan9BReport),
    fan9b_value: cdktf.numberToTerraform(struct!.fan9BValue),
    physical_temperature: cdktf.stringToTerraform(struct!.physicalTemperature),
    physical_temperature2: cdktf.stringToTerraform(struct!.physicalTemperature2),
    power_unit1: cdktf.stringToTerraform(struct!.powerUnit1),
    power_unit2: cdktf.stringToTerraform(struct!.powerUnit2),
    power_unit3: cdktf.stringToTerraform(struct!.powerUnit3),
    power_unit4: cdktf.stringToTerraform(struct!.powerUnit4),
    pu2_physical_temperature: cdktf.stringToTerraform(struct!.pu2PhysicalTemperature),
    pu2_physical_temperature2: cdktf.stringToTerraform(struct!.pu2PhysicalTemperature2),
    pu2_voltage_label_10: cdktf.stringToTerraform(struct!.pu2VoltageLabel10),
    pu2_voltage_label_7: cdktf.stringToTerraform(struct!.pu2VoltageLabel7),
    pu2_voltage_label_8: cdktf.stringToTerraform(struct!.pu2VoltageLabel8),
    pu2_voltage_label_9: cdktf.stringToTerraform(struct!.pu2VoltageLabel9),
    voltage_label_1: cdktf.stringToTerraform(struct!.voltageLabel1),
    voltage_label_10: cdktf.stringToTerraform(struct!.voltageLabel10),
    voltage_label_11: cdktf.stringToTerraform(struct!.voltageLabel11),
    voltage_label_12: cdktf.stringToTerraform(struct!.voltageLabel12),
    voltage_label_13: cdktf.stringToTerraform(struct!.voltageLabel13),
    voltage_label_14: cdktf.stringToTerraform(struct!.voltageLabel14),
    voltage_label_15: cdktf.stringToTerraform(struct!.voltageLabel15),
    voltage_label_16: cdktf.stringToTerraform(struct!.voltageLabel16),
    voltage_label_17: cdktf.stringToTerraform(struct!.voltageLabel17),
    voltage_label_2: cdktf.stringToTerraform(struct!.voltageLabel2),
    voltage_label_3: cdktf.stringToTerraform(struct!.voltageLabel3),
    voltage_label_4: cdktf.stringToTerraform(struct!.voltageLabel4),
    voltage_label_5: cdktf.stringToTerraform(struct!.voltageLabel5),
    voltage_label_6: cdktf.stringToTerraform(struct!.voltageLabel6),
    voltage_label_7: cdktf.stringToTerraform(struct!.voltageLabel7),
    voltage_label_8: cdktf.stringToTerraform(struct!.voltageLabel8),
    voltage_label_9: cdktf.stringToTerraform(struct!.voltageLabel9),
  }
}


export function dataThunderSystemEnvironmentOperOperToHclTerraform(struct?: DataThunderSystemEnvironmentOperOperOutputReference | DataThunderSystemEnvironmentOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu0_temperature: {
      value: cdktf.stringToHclTerraform(struct!.cpu0Temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu1_temperature: {
      value: cdktf.stringToHclTerraform(struct!.cpu1Temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan10a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan10AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan10a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan10AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan10b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan10BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan10b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan10BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan1a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan1AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan1a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan1AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan1b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan1BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan1b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan1BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan2a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan2AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan2a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan2AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan2b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan2BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan2b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan2BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan3a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan3AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan3a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan3AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan3b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan3BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan3b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan3BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan4a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan4AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan4a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan4AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan4b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan4BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan4b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan4BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan5a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan5AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan5a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan5AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan5b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan5BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan5b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan5BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan6a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan6AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan6a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan6AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan6b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan6BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan6b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan6BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan7a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan7AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan7a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan7AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan7b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan7BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan7b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan7BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan8a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan8AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan8a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan8AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan8b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan8BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan8b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan8BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan9a_report: {
      value: cdktf.stringToHclTerraform(struct!.fan9AReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan9a_value: {
      value: cdktf.numberToHclTerraform(struct!.fan9AValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fan9b_report: {
      value: cdktf.stringToHclTerraform(struct!.fan9BReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fan9b_value: {
      value: cdktf.numberToHclTerraform(struct!.fan9BValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    physical_temperature: {
      value: cdktf.stringToHclTerraform(struct!.physicalTemperature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_temperature2: {
      value: cdktf.stringToHclTerraform(struct!.physicalTemperature2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_unit1: {
      value: cdktf.stringToHclTerraform(struct!.powerUnit1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_unit2: {
      value: cdktf.stringToHclTerraform(struct!.powerUnit2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_unit3: {
      value: cdktf.stringToHclTerraform(struct!.powerUnit3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_unit4: {
      value: cdktf.stringToHclTerraform(struct!.powerUnit4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pu2_physical_temperature: {
      value: cdktf.stringToHclTerraform(struct!.pu2PhysicalTemperature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pu2_physical_temperature2: {
      value: cdktf.stringToHclTerraform(struct!.pu2PhysicalTemperature2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pu2_voltage_label_10: {
      value: cdktf.stringToHclTerraform(struct!.pu2VoltageLabel10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pu2_voltage_label_7: {
      value: cdktf.stringToHclTerraform(struct!.pu2VoltageLabel7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pu2_voltage_label_8: {
      value: cdktf.stringToHclTerraform(struct!.pu2VoltageLabel8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pu2_voltage_label_9: {
      value: cdktf.stringToHclTerraform(struct!.pu2VoltageLabel9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_1: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_10: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_11: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_12: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_13: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_14: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel14),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_15: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel15),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_16: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel16),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_17: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel17),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_2: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_3: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_4: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_5: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_6: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_7: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_8: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voltage_label_9: {
      value: cdktf.stringToHclTerraform(struct!.voltageLabel9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemEnvironmentOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemEnvironmentOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu0Temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu0Temperature = this._cpu0Temperature;
    }
    if (this._cpu1Temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu1Temperature = this._cpu1Temperature;
    }
    if (this._fan10AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan10AReport = this._fan10AReport;
    }
    if (this._fan10AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan10AValue = this._fan10AValue;
    }
    if (this._fan10BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan10BReport = this._fan10BReport;
    }
    if (this._fan10BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan10BValue = this._fan10BValue;
    }
    if (this._fan1AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan1AReport = this._fan1AReport;
    }
    if (this._fan1AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan1AValue = this._fan1AValue;
    }
    if (this._fan1BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan1BReport = this._fan1BReport;
    }
    if (this._fan1BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan1BValue = this._fan1BValue;
    }
    if (this._fan2AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan2AReport = this._fan2AReport;
    }
    if (this._fan2AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan2AValue = this._fan2AValue;
    }
    if (this._fan2BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan2BReport = this._fan2BReport;
    }
    if (this._fan2BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan2BValue = this._fan2BValue;
    }
    if (this._fan3AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan3AReport = this._fan3AReport;
    }
    if (this._fan3AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan3AValue = this._fan3AValue;
    }
    if (this._fan3BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan3BReport = this._fan3BReport;
    }
    if (this._fan3BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan3BValue = this._fan3BValue;
    }
    if (this._fan4AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan4AReport = this._fan4AReport;
    }
    if (this._fan4AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan4AValue = this._fan4AValue;
    }
    if (this._fan4BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan4BReport = this._fan4BReport;
    }
    if (this._fan4BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan4BValue = this._fan4BValue;
    }
    if (this._fan5AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan5AReport = this._fan5AReport;
    }
    if (this._fan5AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan5AValue = this._fan5AValue;
    }
    if (this._fan5BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan5BReport = this._fan5BReport;
    }
    if (this._fan5BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan5BValue = this._fan5BValue;
    }
    if (this._fan6AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan6AReport = this._fan6AReport;
    }
    if (this._fan6AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan6AValue = this._fan6AValue;
    }
    if (this._fan6BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan6BReport = this._fan6BReport;
    }
    if (this._fan6BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan6BValue = this._fan6BValue;
    }
    if (this._fan7AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan7AReport = this._fan7AReport;
    }
    if (this._fan7AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan7AValue = this._fan7AValue;
    }
    if (this._fan7BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan7BReport = this._fan7BReport;
    }
    if (this._fan7BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan7BValue = this._fan7BValue;
    }
    if (this._fan8AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan8AReport = this._fan8AReport;
    }
    if (this._fan8AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan8AValue = this._fan8AValue;
    }
    if (this._fan8BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan8BReport = this._fan8BReport;
    }
    if (this._fan8BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan8BValue = this._fan8BValue;
    }
    if (this._fan9AReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan9AReport = this._fan9AReport;
    }
    if (this._fan9AValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan9AValue = this._fan9AValue;
    }
    if (this._fan9BReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan9BReport = this._fan9BReport;
    }
    if (this._fan9BValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fan9BValue = this._fan9BValue;
    }
    if (this._physicalTemperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalTemperature = this._physicalTemperature;
    }
    if (this._physicalTemperature2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalTemperature2 = this._physicalTemperature2;
    }
    if (this._powerUnit1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerUnit1 = this._powerUnit1;
    }
    if (this._powerUnit2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerUnit2 = this._powerUnit2;
    }
    if (this._powerUnit3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerUnit3 = this._powerUnit3;
    }
    if (this._powerUnit4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerUnit4 = this._powerUnit4;
    }
    if (this._pu2PhysicalTemperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2PhysicalTemperature = this._pu2PhysicalTemperature;
    }
    if (this._pu2PhysicalTemperature2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2PhysicalTemperature2 = this._pu2PhysicalTemperature2;
    }
    if (this._pu2VoltageLabel10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2VoltageLabel10 = this._pu2VoltageLabel10;
    }
    if (this._pu2VoltageLabel7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2VoltageLabel7 = this._pu2VoltageLabel7;
    }
    if (this._pu2VoltageLabel8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2VoltageLabel8 = this._pu2VoltageLabel8;
    }
    if (this._pu2VoltageLabel9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pu2VoltageLabel9 = this._pu2VoltageLabel9;
    }
    if (this._voltageLabel1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel1 = this._voltageLabel1;
    }
    if (this._voltageLabel10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel10 = this._voltageLabel10;
    }
    if (this._voltageLabel11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel11 = this._voltageLabel11;
    }
    if (this._voltageLabel12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel12 = this._voltageLabel12;
    }
    if (this._voltageLabel13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel13 = this._voltageLabel13;
    }
    if (this._voltageLabel14 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel14 = this._voltageLabel14;
    }
    if (this._voltageLabel15 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel15 = this._voltageLabel15;
    }
    if (this._voltageLabel16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel16 = this._voltageLabel16;
    }
    if (this._voltageLabel17 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel17 = this._voltageLabel17;
    }
    if (this._voltageLabel2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel2 = this._voltageLabel2;
    }
    if (this._voltageLabel3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel3 = this._voltageLabel3;
    }
    if (this._voltageLabel4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel4 = this._voltageLabel4;
    }
    if (this._voltageLabel5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel5 = this._voltageLabel5;
    }
    if (this._voltageLabel6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel6 = this._voltageLabel6;
    }
    if (this._voltageLabel7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel7 = this._voltageLabel7;
    }
    if (this._voltageLabel8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel8 = this._voltageLabel8;
    }
    if (this._voltageLabel9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.voltageLabel9 = this._voltageLabel9;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemEnvironmentOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu0Temperature = undefined;
      this._cpu1Temperature = undefined;
      this._fan10AReport = undefined;
      this._fan10AValue = undefined;
      this._fan10BReport = undefined;
      this._fan10BValue = undefined;
      this._fan1AReport = undefined;
      this._fan1AValue = undefined;
      this._fan1BReport = undefined;
      this._fan1BValue = undefined;
      this._fan2AReport = undefined;
      this._fan2AValue = undefined;
      this._fan2BReport = undefined;
      this._fan2BValue = undefined;
      this._fan3AReport = undefined;
      this._fan3AValue = undefined;
      this._fan3BReport = undefined;
      this._fan3BValue = undefined;
      this._fan4AReport = undefined;
      this._fan4AValue = undefined;
      this._fan4BReport = undefined;
      this._fan4BValue = undefined;
      this._fan5AReport = undefined;
      this._fan5AValue = undefined;
      this._fan5BReport = undefined;
      this._fan5BValue = undefined;
      this._fan6AReport = undefined;
      this._fan6AValue = undefined;
      this._fan6BReport = undefined;
      this._fan6BValue = undefined;
      this._fan7AReport = undefined;
      this._fan7AValue = undefined;
      this._fan7BReport = undefined;
      this._fan7BValue = undefined;
      this._fan8AReport = undefined;
      this._fan8AValue = undefined;
      this._fan8BReport = undefined;
      this._fan8BValue = undefined;
      this._fan9AReport = undefined;
      this._fan9AValue = undefined;
      this._fan9BReport = undefined;
      this._fan9BValue = undefined;
      this._physicalTemperature = undefined;
      this._physicalTemperature2 = undefined;
      this._powerUnit1 = undefined;
      this._powerUnit2 = undefined;
      this._powerUnit3 = undefined;
      this._powerUnit4 = undefined;
      this._pu2PhysicalTemperature = undefined;
      this._pu2PhysicalTemperature2 = undefined;
      this._pu2VoltageLabel10 = undefined;
      this._pu2VoltageLabel7 = undefined;
      this._pu2VoltageLabel8 = undefined;
      this._pu2VoltageLabel9 = undefined;
      this._voltageLabel1 = undefined;
      this._voltageLabel10 = undefined;
      this._voltageLabel11 = undefined;
      this._voltageLabel12 = undefined;
      this._voltageLabel13 = undefined;
      this._voltageLabel14 = undefined;
      this._voltageLabel15 = undefined;
      this._voltageLabel16 = undefined;
      this._voltageLabel17 = undefined;
      this._voltageLabel2 = undefined;
      this._voltageLabel3 = undefined;
      this._voltageLabel4 = undefined;
      this._voltageLabel5 = undefined;
      this._voltageLabel6 = undefined;
      this._voltageLabel7 = undefined;
      this._voltageLabel8 = undefined;
      this._voltageLabel9 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu0Temperature = value.cpu0Temperature;
      this._cpu1Temperature = value.cpu1Temperature;
      this._fan10AReport = value.fan10AReport;
      this._fan10AValue = value.fan10AValue;
      this._fan10BReport = value.fan10BReport;
      this._fan10BValue = value.fan10BValue;
      this._fan1AReport = value.fan1AReport;
      this._fan1AValue = value.fan1AValue;
      this._fan1BReport = value.fan1BReport;
      this._fan1BValue = value.fan1BValue;
      this._fan2AReport = value.fan2AReport;
      this._fan2AValue = value.fan2AValue;
      this._fan2BReport = value.fan2BReport;
      this._fan2BValue = value.fan2BValue;
      this._fan3AReport = value.fan3AReport;
      this._fan3AValue = value.fan3AValue;
      this._fan3BReport = value.fan3BReport;
      this._fan3BValue = value.fan3BValue;
      this._fan4AReport = value.fan4AReport;
      this._fan4AValue = value.fan4AValue;
      this._fan4BReport = value.fan4BReport;
      this._fan4BValue = value.fan4BValue;
      this._fan5AReport = value.fan5AReport;
      this._fan5AValue = value.fan5AValue;
      this._fan5BReport = value.fan5BReport;
      this._fan5BValue = value.fan5BValue;
      this._fan6AReport = value.fan6AReport;
      this._fan6AValue = value.fan6AValue;
      this._fan6BReport = value.fan6BReport;
      this._fan6BValue = value.fan6BValue;
      this._fan7AReport = value.fan7AReport;
      this._fan7AValue = value.fan7AValue;
      this._fan7BReport = value.fan7BReport;
      this._fan7BValue = value.fan7BValue;
      this._fan8AReport = value.fan8AReport;
      this._fan8AValue = value.fan8AValue;
      this._fan8BReport = value.fan8BReport;
      this._fan8BValue = value.fan8BValue;
      this._fan9AReport = value.fan9AReport;
      this._fan9AValue = value.fan9AValue;
      this._fan9BReport = value.fan9BReport;
      this._fan9BValue = value.fan9BValue;
      this._physicalTemperature = value.physicalTemperature;
      this._physicalTemperature2 = value.physicalTemperature2;
      this._powerUnit1 = value.powerUnit1;
      this._powerUnit2 = value.powerUnit2;
      this._powerUnit3 = value.powerUnit3;
      this._powerUnit4 = value.powerUnit4;
      this._pu2PhysicalTemperature = value.pu2PhysicalTemperature;
      this._pu2PhysicalTemperature2 = value.pu2PhysicalTemperature2;
      this._pu2VoltageLabel10 = value.pu2VoltageLabel10;
      this._pu2VoltageLabel7 = value.pu2VoltageLabel7;
      this._pu2VoltageLabel8 = value.pu2VoltageLabel8;
      this._pu2VoltageLabel9 = value.pu2VoltageLabel9;
      this._voltageLabel1 = value.voltageLabel1;
      this._voltageLabel10 = value.voltageLabel10;
      this._voltageLabel11 = value.voltageLabel11;
      this._voltageLabel12 = value.voltageLabel12;
      this._voltageLabel13 = value.voltageLabel13;
      this._voltageLabel14 = value.voltageLabel14;
      this._voltageLabel15 = value.voltageLabel15;
      this._voltageLabel16 = value.voltageLabel16;
      this._voltageLabel17 = value.voltageLabel17;
      this._voltageLabel2 = value.voltageLabel2;
      this._voltageLabel3 = value.voltageLabel3;
      this._voltageLabel4 = value.voltageLabel4;
      this._voltageLabel5 = value.voltageLabel5;
      this._voltageLabel6 = value.voltageLabel6;
      this._voltageLabel7 = value.voltageLabel7;
      this._voltageLabel8 = value.voltageLabel8;
      this._voltageLabel9 = value.voltageLabel9;
    }
  }

  // cpu0_temperature - computed: false, optional: true, required: false
  private _cpu0Temperature?: string; 
  public get cpu0Temperature() {
    return this.getStringAttribute('cpu0_temperature');
  }
  public set cpu0Temperature(value: string) {
    this._cpu0Temperature = value;
  }
  public resetCpu0Temperature() {
    this._cpu0Temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu0TemperatureInput() {
    return this._cpu0Temperature;
  }

  // cpu1_temperature - computed: false, optional: true, required: false
  private _cpu1Temperature?: string; 
  public get cpu1Temperature() {
    return this.getStringAttribute('cpu1_temperature');
  }
  public set cpu1Temperature(value: string) {
    this._cpu1Temperature = value;
  }
  public resetCpu1Temperature() {
    this._cpu1Temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpu1TemperatureInput() {
    return this._cpu1Temperature;
  }

  // fan10a_report - computed: false, optional: true, required: false
  private _fan10AReport?: string; 
  public get fan10AReport() {
    return this.getStringAttribute('fan10a_report');
  }
  public set fan10AReport(value: string) {
    this._fan10AReport = value;
  }
  public resetFan10AReport() {
    this._fan10AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan10AReportInput() {
    return this._fan10AReport;
  }

  // fan10a_value - computed: false, optional: true, required: false
  private _fan10AValue?: number; 
  public get fan10AValue() {
    return this.getNumberAttribute('fan10a_value');
  }
  public set fan10AValue(value: number) {
    this._fan10AValue = value;
  }
  public resetFan10AValue() {
    this._fan10AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan10AValueInput() {
    return this._fan10AValue;
  }

  // fan10b_report - computed: false, optional: true, required: false
  private _fan10BReport?: string; 
  public get fan10BReport() {
    return this.getStringAttribute('fan10b_report');
  }
  public set fan10BReport(value: string) {
    this._fan10BReport = value;
  }
  public resetFan10BReport() {
    this._fan10BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan10BReportInput() {
    return this._fan10BReport;
  }

  // fan10b_value - computed: false, optional: true, required: false
  private _fan10BValue?: number; 
  public get fan10BValue() {
    return this.getNumberAttribute('fan10b_value');
  }
  public set fan10BValue(value: number) {
    this._fan10BValue = value;
  }
  public resetFan10BValue() {
    this._fan10BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan10BValueInput() {
    return this._fan10BValue;
  }

  // fan1a_report - computed: false, optional: true, required: false
  private _fan1AReport?: string; 
  public get fan1AReport() {
    return this.getStringAttribute('fan1a_report');
  }
  public set fan1AReport(value: string) {
    this._fan1AReport = value;
  }
  public resetFan1AReport() {
    this._fan1AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan1AReportInput() {
    return this._fan1AReport;
  }

  // fan1a_value - computed: false, optional: true, required: false
  private _fan1AValue?: number; 
  public get fan1AValue() {
    return this.getNumberAttribute('fan1a_value');
  }
  public set fan1AValue(value: number) {
    this._fan1AValue = value;
  }
  public resetFan1AValue() {
    this._fan1AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan1AValueInput() {
    return this._fan1AValue;
  }

  // fan1b_report - computed: false, optional: true, required: false
  private _fan1BReport?: string; 
  public get fan1BReport() {
    return this.getStringAttribute('fan1b_report');
  }
  public set fan1BReport(value: string) {
    this._fan1BReport = value;
  }
  public resetFan1BReport() {
    this._fan1BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan1BReportInput() {
    return this._fan1BReport;
  }

  // fan1b_value - computed: false, optional: true, required: false
  private _fan1BValue?: number; 
  public get fan1BValue() {
    return this.getNumberAttribute('fan1b_value');
  }
  public set fan1BValue(value: number) {
    this._fan1BValue = value;
  }
  public resetFan1BValue() {
    this._fan1BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan1BValueInput() {
    return this._fan1BValue;
  }

  // fan2a_report - computed: false, optional: true, required: false
  private _fan2AReport?: string; 
  public get fan2AReport() {
    return this.getStringAttribute('fan2a_report');
  }
  public set fan2AReport(value: string) {
    this._fan2AReport = value;
  }
  public resetFan2AReport() {
    this._fan2AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan2AReportInput() {
    return this._fan2AReport;
  }

  // fan2a_value - computed: false, optional: true, required: false
  private _fan2AValue?: number; 
  public get fan2AValue() {
    return this.getNumberAttribute('fan2a_value');
  }
  public set fan2AValue(value: number) {
    this._fan2AValue = value;
  }
  public resetFan2AValue() {
    this._fan2AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan2AValueInput() {
    return this._fan2AValue;
  }

  // fan2b_report - computed: false, optional: true, required: false
  private _fan2BReport?: string; 
  public get fan2BReport() {
    return this.getStringAttribute('fan2b_report');
  }
  public set fan2BReport(value: string) {
    this._fan2BReport = value;
  }
  public resetFan2BReport() {
    this._fan2BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan2BReportInput() {
    return this._fan2BReport;
  }

  // fan2b_value - computed: false, optional: true, required: false
  private _fan2BValue?: number; 
  public get fan2BValue() {
    return this.getNumberAttribute('fan2b_value');
  }
  public set fan2BValue(value: number) {
    this._fan2BValue = value;
  }
  public resetFan2BValue() {
    this._fan2BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan2BValueInput() {
    return this._fan2BValue;
  }

  // fan3a_report - computed: false, optional: true, required: false
  private _fan3AReport?: string; 
  public get fan3AReport() {
    return this.getStringAttribute('fan3a_report');
  }
  public set fan3AReport(value: string) {
    this._fan3AReport = value;
  }
  public resetFan3AReport() {
    this._fan3AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan3AReportInput() {
    return this._fan3AReport;
  }

  // fan3a_value - computed: false, optional: true, required: false
  private _fan3AValue?: number; 
  public get fan3AValue() {
    return this.getNumberAttribute('fan3a_value');
  }
  public set fan3AValue(value: number) {
    this._fan3AValue = value;
  }
  public resetFan3AValue() {
    this._fan3AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan3AValueInput() {
    return this._fan3AValue;
  }

  // fan3b_report - computed: false, optional: true, required: false
  private _fan3BReport?: string; 
  public get fan3BReport() {
    return this.getStringAttribute('fan3b_report');
  }
  public set fan3BReport(value: string) {
    this._fan3BReport = value;
  }
  public resetFan3BReport() {
    this._fan3BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan3BReportInput() {
    return this._fan3BReport;
  }

  // fan3b_value - computed: false, optional: true, required: false
  private _fan3BValue?: number; 
  public get fan3BValue() {
    return this.getNumberAttribute('fan3b_value');
  }
  public set fan3BValue(value: number) {
    this._fan3BValue = value;
  }
  public resetFan3BValue() {
    this._fan3BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan3BValueInput() {
    return this._fan3BValue;
  }

  // fan4a_report - computed: false, optional: true, required: false
  private _fan4AReport?: string; 
  public get fan4AReport() {
    return this.getStringAttribute('fan4a_report');
  }
  public set fan4AReport(value: string) {
    this._fan4AReport = value;
  }
  public resetFan4AReport() {
    this._fan4AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan4AReportInput() {
    return this._fan4AReport;
  }

  // fan4a_value - computed: false, optional: true, required: false
  private _fan4AValue?: number; 
  public get fan4AValue() {
    return this.getNumberAttribute('fan4a_value');
  }
  public set fan4AValue(value: number) {
    this._fan4AValue = value;
  }
  public resetFan4AValue() {
    this._fan4AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan4AValueInput() {
    return this._fan4AValue;
  }

  // fan4b_report - computed: false, optional: true, required: false
  private _fan4BReport?: string; 
  public get fan4BReport() {
    return this.getStringAttribute('fan4b_report');
  }
  public set fan4BReport(value: string) {
    this._fan4BReport = value;
  }
  public resetFan4BReport() {
    this._fan4BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan4BReportInput() {
    return this._fan4BReport;
  }

  // fan4b_value - computed: false, optional: true, required: false
  private _fan4BValue?: number; 
  public get fan4BValue() {
    return this.getNumberAttribute('fan4b_value');
  }
  public set fan4BValue(value: number) {
    this._fan4BValue = value;
  }
  public resetFan4BValue() {
    this._fan4BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan4BValueInput() {
    return this._fan4BValue;
  }

  // fan5a_report - computed: false, optional: true, required: false
  private _fan5AReport?: string; 
  public get fan5AReport() {
    return this.getStringAttribute('fan5a_report');
  }
  public set fan5AReport(value: string) {
    this._fan5AReport = value;
  }
  public resetFan5AReport() {
    this._fan5AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan5AReportInput() {
    return this._fan5AReport;
  }

  // fan5a_value - computed: false, optional: true, required: false
  private _fan5AValue?: number; 
  public get fan5AValue() {
    return this.getNumberAttribute('fan5a_value');
  }
  public set fan5AValue(value: number) {
    this._fan5AValue = value;
  }
  public resetFan5AValue() {
    this._fan5AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan5AValueInput() {
    return this._fan5AValue;
  }

  // fan5b_report - computed: false, optional: true, required: false
  private _fan5BReport?: string; 
  public get fan5BReport() {
    return this.getStringAttribute('fan5b_report');
  }
  public set fan5BReport(value: string) {
    this._fan5BReport = value;
  }
  public resetFan5BReport() {
    this._fan5BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan5BReportInput() {
    return this._fan5BReport;
  }

  // fan5b_value - computed: false, optional: true, required: false
  private _fan5BValue?: number; 
  public get fan5BValue() {
    return this.getNumberAttribute('fan5b_value');
  }
  public set fan5BValue(value: number) {
    this._fan5BValue = value;
  }
  public resetFan5BValue() {
    this._fan5BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan5BValueInput() {
    return this._fan5BValue;
  }

  // fan6a_report - computed: false, optional: true, required: false
  private _fan6AReport?: string; 
  public get fan6AReport() {
    return this.getStringAttribute('fan6a_report');
  }
  public set fan6AReport(value: string) {
    this._fan6AReport = value;
  }
  public resetFan6AReport() {
    this._fan6AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan6AReportInput() {
    return this._fan6AReport;
  }

  // fan6a_value - computed: false, optional: true, required: false
  private _fan6AValue?: number; 
  public get fan6AValue() {
    return this.getNumberAttribute('fan6a_value');
  }
  public set fan6AValue(value: number) {
    this._fan6AValue = value;
  }
  public resetFan6AValue() {
    this._fan6AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan6AValueInput() {
    return this._fan6AValue;
  }

  // fan6b_report - computed: false, optional: true, required: false
  private _fan6BReport?: string; 
  public get fan6BReport() {
    return this.getStringAttribute('fan6b_report');
  }
  public set fan6BReport(value: string) {
    this._fan6BReport = value;
  }
  public resetFan6BReport() {
    this._fan6BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan6BReportInput() {
    return this._fan6BReport;
  }

  // fan6b_value - computed: false, optional: true, required: false
  private _fan6BValue?: number; 
  public get fan6BValue() {
    return this.getNumberAttribute('fan6b_value');
  }
  public set fan6BValue(value: number) {
    this._fan6BValue = value;
  }
  public resetFan6BValue() {
    this._fan6BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan6BValueInput() {
    return this._fan6BValue;
  }

  // fan7a_report - computed: false, optional: true, required: false
  private _fan7AReport?: string; 
  public get fan7AReport() {
    return this.getStringAttribute('fan7a_report');
  }
  public set fan7AReport(value: string) {
    this._fan7AReport = value;
  }
  public resetFan7AReport() {
    this._fan7AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan7AReportInput() {
    return this._fan7AReport;
  }

  // fan7a_value - computed: false, optional: true, required: false
  private _fan7AValue?: number; 
  public get fan7AValue() {
    return this.getNumberAttribute('fan7a_value');
  }
  public set fan7AValue(value: number) {
    this._fan7AValue = value;
  }
  public resetFan7AValue() {
    this._fan7AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan7AValueInput() {
    return this._fan7AValue;
  }

  // fan7b_report - computed: false, optional: true, required: false
  private _fan7BReport?: string; 
  public get fan7BReport() {
    return this.getStringAttribute('fan7b_report');
  }
  public set fan7BReport(value: string) {
    this._fan7BReport = value;
  }
  public resetFan7BReport() {
    this._fan7BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan7BReportInput() {
    return this._fan7BReport;
  }

  // fan7b_value - computed: false, optional: true, required: false
  private _fan7BValue?: number; 
  public get fan7BValue() {
    return this.getNumberAttribute('fan7b_value');
  }
  public set fan7BValue(value: number) {
    this._fan7BValue = value;
  }
  public resetFan7BValue() {
    this._fan7BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan7BValueInput() {
    return this._fan7BValue;
  }

  // fan8a_report - computed: false, optional: true, required: false
  private _fan8AReport?: string; 
  public get fan8AReport() {
    return this.getStringAttribute('fan8a_report');
  }
  public set fan8AReport(value: string) {
    this._fan8AReport = value;
  }
  public resetFan8AReport() {
    this._fan8AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan8AReportInput() {
    return this._fan8AReport;
  }

  // fan8a_value - computed: false, optional: true, required: false
  private _fan8AValue?: number; 
  public get fan8AValue() {
    return this.getNumberAttribute('fan8a_value');
  }
  public set fan8AValue(value: number) {
    this._fan8AValue = value;
  }
  public resetFan8AValue() {
    this._fan8AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan8AValueInput() {
    return this._fan8AValue;
  }

  // fan8b_report - computed: false, optional: true, required: false
  private _fan8BReport?: string; 
  public get fan8BReport() {
    return this.getStringAttribute('fan8b_report');
  }
  public set fan8BReport(value: string) {
    this._fan8BReport = value;
  }
  public resetFan8BReport() {
    this._fan8BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan8BReportInput() {
    return this._fan8BReport;
  }

  // fan8b_value - computed: false, optional: true, required: false
  private _fan8BValue?: number; 
  public get fan8BValue() {
    return this.getNumberAttribute('fan8b_value');
  }
  public set fan8BValue(value: number) {
    this._fan8BValue = value;
  }
  public resetFan8BValue() {
    this._fan8BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan8BValueInput() {
    return this._fan8BValue;
  }

  // fan9a_report - computed: false, optional: true, required: false
  private _fan9AReport?: string; 
  public get fan9AReport() {
    return this.getStringAttribute('fan9a_report');
  }
  public set fan9AReport(value: string) {
    this._fan9AReport = value;
  }
  public resetFan9AReport() {
    this._fan9AReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan9AReportInput() {
    return this._fan9AReport;
  }

  // fan9a_value - computed: false, optional: true, required: false
  private _fan9AValue?: number; 
  public get fan9AValue() {
    return this.getNumberAttribute('fan9a_value');
  }
  public set fan9AValue(value: number) {
    this._fan9AValue = value;
  }
  public resetFan9AValue() {
    this._fan9AValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan9AValueInput() {
    return this._fan9AValue;
  }

  // fan9b_report - computed: false, optional: true, required: false
  private _fan9BReport?: string; 
  public get fan9BReport() {
    return this.getStringAttribute('fan9b_report');
  }
  public set fan9BReport(value: string) {
    this._fan9BReport = value;
  }
  public resetFan9BReport() {
    this._fan9BReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan9BReportInput() {
    return this._fan9BReport;
  }

  // fan9b_value - computed: false, optional: true, required: false
  private _fan9BValue?: number; 
  public get fan9BValue() {
    return this.getNumberAttribute('fan9b_value');
  }
  public set fan9BValue(value: number) {
    this._fan9BValue = value;
  }
  public resetFan9BValue() {
    this._fan9BValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fan9BValueInput() {
    return this._fan9BValue;
  }

  // physical_temperature - computed: false, optional: true, required: false
  private _physicalTemperature?: string; 
  public get physicalTemperature() {
    return this.getStringAttribute('physical_temperature');
  }
  public set physicalTemperature(value: string) {
    this._physicalTemperature = value;
  }
  public resetPhysicalTemperature() {
    this._physicalTemperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTemperatureInput() {
    return this._physicalTemperature;
  }

  // physical_temperature2 - computed: false, optional: true, required: false
  private _physicalTemperature2?: string; 
  public get physicalTemperature2() {
    return this.getStringAttribute('physical_temperature2');
  }
  public set physicalTemperature2(value: string) {
    this._physicalTemperature2 = value;
  }
  public resetPhysicalTemperature2() {
    this._physicalTemperature2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalTemperature2Input() {
    return this._physicalTemperature2;
  }

  // power_unit1 - computed: false, optional: true, required: false
  private _powerUnit1?: string; 
  public get powerUnit1() {
    return this.getStringAttribute('power_unit1');
  }
  public set powerUnit1(value: string) {
    this._powerUnit1 = value;
  }
  public resetPowerUnit1() {
    this._powerUnit1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerUnit1Input() {
    return this._powerUnit1;
  }

  // power_unit2 - computed: false, optional: true, required: false
  private _powerUnit2?: string; 
  public get powerUnit2() {
    return this.getStringAttribute('power_unit2');
  }
  public set powerUnit2(value: string) {
    this._powerUnit2 = value;
  }
  public resetPowerUnit2() {
    this._powerUnit2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerUnit2Input() {
    return this._powerUnit2;
  }

  // power_unit3 - computed: false, optional: true, required: false
  private _powerUnit3?: string; 
  public get powerUnit3() {
    return this.getStringAttribute('power_unit3');
  }
  public set powerUnit3(value: string) {
    this._powerUnit3 = value;
  }
  public resetPowerUnit3() {
    this._powerUnit3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerUnit3Input() {
    return this._powerUnit3;
  }

  // power_unit4 - computed: false, optional: true, required: false
  private _powerUnit4?: string; 
  public get powerUnit4() {
    return this.getStringAttribute('power_unit4');
  }
  public set powerUnit4(value: string) {
    this._powerUnit4 = value;
  }
  public resetPowerUnit4() {
    this._powerUnit4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerUnit4Input() {
    return this._powerUnit4;
  }

  // pu2_physical_temperature - computed: false, optional: true, required: false
  private _pu2PhysicalTemperature?: string; 
  public get pu2PhysicalTemperature() {
    return this.getStringAttribute('pu2_physical_temperature');
  }
  public set pu2PhysicalTemperature(value: string) {
    this._pu2PhysicalTemperature = value;
  }
  public resetPu2PhysicalTemperature() {
    this._pu2PhysicalTemperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2PhysicalTemperatureInput() {
    return this._pu2PhysicalTemperature;
  }

  // pu2_physical_temperature2 - computed: false, optional: true, required: false
  private _pu2PhysicalTemperature2?: string; 
  public get pu2PhysicalTemperature2() {
    return this.getStringAttribute('pu2_physical_temperature2');
  }
  public set pu2PhysicalTemperature2(value: string) {
    this._pu2PhysicalTemperature2 = value;
  }
  public resetPu2PhysicalTemperature2() {
    this._pu2PhysicalTemperature2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2PhysicalTemperature2Input() {
    return this._pu2PhysicalTemperature2;
  }

  // pu2_voltage_label_10 - computed: false, optional: true, required: false
  private _pu2VoltageLabel10?: string; 
  public get pu2VoltageLabel10() {
    return this.getStringAttribute('pu2_voltage_label_10');
  }
  public set pu2VoltageLabel10(value: string) {
    this._pu2VoltageLabel10 = value;
  }
  public resetPu2VoltageLabel10() {
    this._pu2VoltageLabel10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2VoltageLabel10Input() {
    return this._pu2VoltageLabel10;
  }

  // pu2_voltage_label_7 - computed: false, optional: true, required: false
  private _pu2VoltageLabel7?: string; 
  public get pu2VoltageLabel7() {
    return this.getStringAttribute('pu2_voltage_label_7');
  }
  public set pu2VoltageLabel7(value: string) {
    this._pu2VoltageLabel7 = value;
  }
  public resetPu2VoltageLabel7() {
    this._pu2VoltageLabel7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2VoltageLabel7Input() {
    return this._pu2VoltageLabel7;
  }

  // pu2_voltage_label_8 - computed: false, optional: true, required: false
  private _pu2VoltageLabel8?: string; 
  public get pu2VoltageLabel8() {
    return this.getStringAttribute('pu2_voltage_label_8');
  }
  public set pu2VoltageLabel8(value: string) {
    this._pu2VoltageLabel8 = value;
  }
  public resetPu2VoltageLabel8() {
    this._pu2VoltageLabel8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2VoltageLabel8Input() {
    return this._pu2VoltageLabel8;
  }

  // pu2_voltage_label_9 - computed: false, optional: true, required: false
  private _pu2VoltageLabel9?: string; 
  public get pu2VoltageLabel9() {
    return this.getStringAttribute('pu2_voltage_label_9');
  }
  public set pu2VoltageLabel9(value: string) {
    this._pu2VoltageLabel9 = value;
  }
  public resetPu2VoltageLabel9() {
    this._pu2VoltageLabel9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pu2VoltageLabel9Input() {
    return this._pu2VoltageLabel9;
  }

  // voltage_label_1 - computed: false, optional: true, required: false
  private _voltageLabel1?: string; 
  public get voltageLabel1() {
    return this.getStringAttribute('voltage_label_1');
  }
  public set voltageLabel1(value: string) {
    this._voltageLabel1 = value;
  }
  public resetVoltageLabel1() {
    this._voltageLabel1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel1Input() {
    return this._voltageLabel1;
  }

  // voltage_label_10 - computed: false, optional: true, required: false
  private _voltageLabel10?: string; 
  public get voltageLabel10() {
    return this.getStringAttribute('voltage_label_10');
  }
  public set voltageLabel10(value: string) {
    this._voltageLabel10 = value;
  }
  public resetVoltageLabel10() {
    this._voltageLabel10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel10Input() {
    return this._voltageLabel10;
  }

  // voltage_label_11 - computed: false, optional: true, required: false
  private _voltageLabel11?: string; 
  public get voltageLabel11() {
    return this.getStringAttribute('voltage_label_11');
  }
  public set voltageLabel11(value: string) {
    this._voltageLabel11 = value;
  }
  public resetVoltageLabel11() {
    this._voltageLabel11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel11Input() {
    return this._voltageLabel11;
  }

  // voltage_label_12 - computed: false, optional: true, required: false
  private _voltageLabel12?: string; 
  public get voltageLabel12() {
    return this.getStringAttribute('voltage_label_12');
  }
  public set voltageLabel12(value: string) {
    this._voltageLabel12 = value;
  }
  public resetVoltageLabel12() {
    this._voltageLabel12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel12Input() {
    return this._voltageLabel12;
  }

  // voltage_label_13 - computed: false, optional: true, required: false
  private _voltageLabel13?: string; 
  public get voltageLabel13() {
    return this.getStringAttribute('voltage_label_13');
  }
  public set voltageLabel13(value: string) {
    this._voltageLabel13 = value;
  }
  public resetVoltageLabel13() {
    this._voltageLabel13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel13Input() {
    return this._voltageLabel13;
  }

  // voltage_label_14 - computed: false, optional: true, required: false
  private _voltageLabel14?: string; 
  public get voltageLabel14() {
    return this.getStringAttribute('voltage_label_14');
  }
  public set voltageLabel14(value: string) {
    this._voltageLabel14 = value;
  }
  public resetVoltageLabel14() {
    this._voltageLabel14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel14Input() {
    return this._voltageLabel14;
  }

  // voltage_label_15 - computed: false, optional: true, required: false
  private _voltageLabel15?: string; 
  public get voltageLabel15() {
    return this.getStringAttribute('voltage_label_15');
  }
  public set voltageLabel15(value: string) {
    this._voltageLabel15 = value;
  }
  public resetVoltageLabel15() {
    this._voltageLabel15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel15Input() {
    return this._voltageLabel15;
  }

  // voltage_label_16 - computed: false, optional: true, required: false
  private _voltageLabel16?: string; 
  public get voltageLabel16() {
    return this.getStringAttribute('voltage_label_16');
  }
  public set voltageLabel16(value: string) {
    this._voltageLabel16 = value;
  }
  public resetVoltageLabel16() {
    this._voltageLabel16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel16Input() {
    return this._voltageLabel16;
  }

  // voltage_label_17 - computed: false, optional: true, required: false
  private _voltageLabel17?: string; 
  public get voltageLabel17() {
    return this.getStringAttribute('voltage_label_17');
  }
  public set voltageLabel17(value: string) {
    this._voltageLabel17 = value;
  }
  public resetVoltageLabel17() {
    this._voltageLabel17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel17Input() {
    return this._voltageLabel17;
  }

  // voltage_label_2 - computed: false, optional: true, required: false
  private _voltageLabel2?: string; 
  public get voltageLabel2() {
    return this.getStringAttribute('voltage_label_2');
  }
  public set voltageLabel2(value: string) {
    this._voltageLabel2 = value;
  }
  public resetVoltageLabel2() {
    this._voltageLabel2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel2Input() {
    return this._voltageLabel2;
  }

  // voltage_label_3 - computed: false, optional: true, required: false
  private _voltageLabel3?: string; 
  public get voltageLabel3() {
    return this.getStringAttribute('voltage_label_3');
  }
  public set voltageLabel3(value: string) {
    this._voltageLabel3 = value;
  }
  public resetVoltageLabel3() {
    this._voltageLabel3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel3Input() {
    return this._voltageLabel3;
  }

  // voltage_label_4 - computed: false, optional: true, required: false
  private _voltageLabel4?: string; 
  public get voltageLabel4() {
    return this.getStringAttribute('voltage_label_4');
  }
  public set voltageLabel4(value: string) {
    this._voltageLabel4 = value;
  }
  public resetVoltageLabel4() {
    this._voltageLabel4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel4Input() {
    return this._voltageLabel4;
  }

  // voltage_label_5 - computed: false, optional: true, required: false
  private _voltageLabel5?: string; 
  public get voltageLabel5() {
    return this.getStringAttribute('voltage_label_5');
  }
  public set voltageLabel5(value: string) {
    this._voltageLabel5 = value;
  }
  public resetVoltageLabel5() {
    this._voltageLabel5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel5Input() {
    return this._voltageLabel5;
  }

  // voltage_label_6 - computed: false, optional: true, required: false
  private _voltageLabel6?: string; 
  public get voltageLabel6() {
    return this.getStringAttribute('voltage_label_6');
  }
  public set voltageLabel6(value: string) {
    this._voltageLabel6 = value;
  }
  public resetVoltageLabel6() {
    this._voltageLabel6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel6Input() {
    return this._voltageLabel6;
  }

  // voltage_label_7 - computed: false, optional: true, required: false
  private _voltageLabel7?: string; 
  public get voltageLabel7() {
    return this.getStringAttribute('voltage_label_7');
  }
  public set voltageLabel7(value: string) {
    this._voltageLabel7 = value;
  }
  public resetVoltageLabel7() {
    this._voltageLabel7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel7Input() {
    return this._voltageLabel7;
  }

  // voltage_label_8 - computed: false, optional: true, required: false
  private _voltageLabel8?: string; 
  public get voltageLabel8() {
    return this.getStringAttribute('voltage_label_8');
  }
  public set voltageLabel8(value: string) {
    this._voltageLabel8 = value;
  }
  public resetVoltageLabel8() {
    this._voltageLabel8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel8Input() {
    return this._voltageLabel8;
  }

  // voltage_label_9 - computed: false, optional: true, required: false
  private _voltageLabel9?: string; 
  public get voltageLabel9() {
    return this.getStringAttribute('voltage_label_9');
  }
  public set voltageLabel9(value: string) {
    this._voltageLabel9 = value;
  }
  public resetVoltageLabel9() {
    this._voltageLabel9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltageLabel9Input() {
    return this._voltageLabel9;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper thunder_system_environment_oper}
*/
export class DataThunderSystemEnvironmentOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_environment_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemEnvironmentOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemEnvironmentOper to import
  * @param importFromId The id of the existing DataThunderSystemEnvironmentOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemEnvironmentOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_environment_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_environment_oper thunder_system_environment_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemEnvironmentOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemEnvironmentOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_environment_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemEnvironmentOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemEnvironmentOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemEnvironmentOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderSystemEnvironmentOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemEnvironmentOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
