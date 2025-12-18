// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataflowSqlEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}
  */
  readonly driverShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}
  */
  readonly executorShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}
  */
  readonly maxExecutorCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}
  */
  readonly metastoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}
  */
  readonly minExecutorCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}
  */
  readonly sparkAdvancedConfigurations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}
  */
  readonly sqlEndpointVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}
  */
  readonly state?: string;
  /**
  * driver_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#driver_shape_config DataflowSqlEndpoint#driver_shape_config}
  */
  readonly driverShapeConfig?: DataflowSqlEndpointDriverShapeConfig;
  /**
  * executor_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#executor_shape_config DataflowSqlEndpoint#executor_shape_config}
  */
  readonly executorShapeConfig?: DataflowSqlEndpointExecutorShapeConfig;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#network_configuration DataflowSqlEndpoint#network_configuration}
  */
  readonly networkConfiguration: DataflowSqlEndpointNetworkConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#timeouts DataflowSqlEndpoint#timeouts}
  */
  readonly timeouts?: DataflowSqlEndpointTimeouts;
}
export interface DataflowSqlEndpointDriverShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}
  */
  readonly ocpus?: number;
}

export function dataflowSqlEndpointDriverShapeConfigToTerraform(struct?: DataflowSqlEndpointDriverShapeConfigOutputReference | DataflowSqlEndpointDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function dataflowSqlEndpointDriverShapeConfigToHclTerraform(struct?: DataflowSqlEndpointDriverShapeConfigOutputReference | DataflowSqlEndpointDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowSqlEndpointDriverShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowSqlEndpointDriverShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowSqlEndpointDriverShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DataflowSqlEndpointExecutorShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}
  */
  readonly ocpus?: number;
}

export function dataflowSqlEndpointExecutorShapeConfigToTerraform(struct?: DataflowSqlEndpointExecutorShapeConfigOutputReference | DataflowSqlEndpointExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function dataflowSqlEndpointExecutorShapeConfigToHclTerraform(struct?: DataflowSqlEndpointExecutorShapeConfigOutputReference | DataflowSqlEndpointExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowSqlEndpointExecutorShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowSqlEndpointExecutorShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowSqlEndpointExecutorShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DataflowSqlEndpointNetworkConfigurationAccessControlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#ip_notation DataflowSqlEndpoint#ip_notation}
  */
  readonly ipNotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#value DataflowSqlEndpoint#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#vcn_ips DataflowSqlEndpoint#vcn_ips}
  */
  readonly vcnIps?: string;
}

export function dataflowSqlEndpointNetworkConfigurationAccessControlRulesToTerraform(struct?: DataflowSqlEndpointNetworkConfigurationAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_notation: cdktf.stringToTerraform(struct!.ipNotation),
    value: cdktf.stringToTerraform(struct!.value),
    vcn_ips: cdktf.stringToTerraform(struct!.vcnIps),
  }
}


export function dataflowSqlEndpointNetworkConfigurationAccessControlRulesToHclTerraform(struct?: DataflowSqlEndpointNetworkConfigurationAccessControlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_notation: {
      value: cdktf.stringToHclTerraform(struct!.ipNotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_ips: {
      value: cdktf.stringToHclTerraform(struct!.vcnIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataflowSqlEndpointNetworkConfigurationAccessControlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNotation = this._ipNotation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vcnIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnIps = this._vcnIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowSqlEndpointNetworkConfigurationAccessControlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipNotation = undefined;
      this._value = undefined;
      this._vcnIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipNotation = value.ipNotation;
      this._value = value.value;
      this._vcnIps = value.vcnIps;
    }
  }

  // ip_notation - computed: true, optional: true, required: false
  private _ipNotation?: string; 
  public get ipNotation() {
    return this.getStringAttribute('ip_notation');
  }
  public set ipNotation(value: string) {
    this._ipNotation = value;
  }
  public resetIpNotation() {
    this._ipNotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNotationInput() {
    return this._ipNotation;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vcn_ips - computed: true, optional: true, required: false
  private _vcnIps?: string; 
  public get vcnIps() {
    return this.getStringAttribute('vcn_ips');
  }
  public set vcnIps(value: string) {
    this._vcnIps = value;
  }
  public resetVcnIps() {
    this._vcnIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIpsInput() {
    return this._vcnIps;
  }
}

export class DataflowSqlEndpointNetworkConfigurationAccessControlRulesList extends cdktf.ComplexList {
  public internalValue? : DataflowSqlEndpointNetworkConfigurationAccessControlRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference {
    return new DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataflowSqlEndpointNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}
  */
  readonly hostNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}
  */
  readonly networkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#nsg_ids DataflowSqlEndpoint#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}
  */
  readonly vcnId?: string;
  /**
  * access_control_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#access_control_rules DataflowSqlEndpoint#access_control_rules}
  */
  readonly accessControlRules?: DataflowSqlEndpointNetworkConfigurationAccessControlRules[] | cdktf.IResolvable;
}

export function dataflowSqlEndpointNetworkConfigurationToTerraform(struct?: DataflowSqlEndpointNetworkConfigurationOutputReference | DataflowSqlEndpointNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name_prefix: cdktf.stringToTerraform(struct!.hostNamePrefix),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vcn_id: cdktf.stringToTerraform(struct!.vcnId),
    access_control_rules: cdktf.listMapper(dataflowSqlEndpointNetworkConfigurationAccessControlRulesToTerraform, true)(struct!.accessControlRules),
  }
}


export function dataflowSqlEndpointNetworkConfigurationToHclTerraform(struct?: DataflowSqlEndpointNetworkConfigurationOutputReference | DataflowSqlEndpointNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.hostNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_id: {
      value: cdktf.stringToHclTerraform(struct!.vcnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_control_rules: {
      value: cdktf.listMapperHcl(dataflowSqlEndpointNetworkConfigurationAccessControlRulesToHclTerraform, true)(struct!.accessControlRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataflowSqlEndpointNetworkConfigurationAccessControlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowSqlEndpointNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataflowSqlEndpointNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNamePrefix = this._hostNamePrefix;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vcnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnId = this._vcnId;
    }
    if (this._accessControlRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlRules = this._accessControlRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowSqlEndpointNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostNamePrefix = undefined;
      this._networkType = undefined;
      this._nsgIds = undefined;
      this._subnetId = undefined;
      this._vcnId = undefined;
      this._accessControlRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostNamePrefix = value.hostNamePrefix;
      this._networkType = value.networkType;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
      this._vcnId = value.vcnId;
      this._accessControlRules.internalValue = value.accessControlRules;
    }
  }

  // host_name_prefix - computed: true, optional: true, required: false
  private _hostNamePrefix?: string; 
  public get hostNamePrefix() {
    return this.getStringAttribute('host_name_prefix');
  }
  public set hostNamePrefix(value: string) {
    this._hostNamePrefix = value;
  }
  public resetHostNamePrefix() {
    this._hostNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamePrefixInput() {
    return this._hostNamePrefix;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // public_endpoint_ip - computed: true, optional: false, required: false
  public get publicEndpointIp() {
    return this.getStringAttribute('public_endpoint_ip');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vcn_id - computed: true, optional: true, required: false
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  public resetVcnId() {
    this._vcnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // access_control_rules - computed: false, optional: true, required: false
  private _accessControlRules = new DataflowSqlEndpointNetworkConfigurationAccessControlRulesList(this, "access_control_rules", false);
  public get accessControlRules() {
    return this._accessControlRules;
  }
  public putAccessControlRules(value: DataflowSqlEndpointNetworkConfigurationAccessControlRules[] | cdktf.IResolvable) {
    this._accessControlRules.internalValue = value;
  }
  public resetAccessControlRules() {
    this._accessControlRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlRulesInput() {
    return this._accessControlRules.internalValue;
  }
}
export interface DataflowSqlEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}
  */
  readonly update?: string;
}

export function dataflowSqlEndpointTimeoutsToTerraform(struct?: DataflowSqlEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataflowSqlEndpointTimeoutsToHclTerraform(struct?: DataflowSqlEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataflowSqlEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataflowSqlEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataflowSqlEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint oci_dataflow_sql_endpoint}
*/
export class DataflowSqlEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataflow_sql_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataflowSqlEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataflowSqlEndpoint to import
  * @param importFromId The id of the existing DataflowSqlEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataflowSqlEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataflow_sql_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dataflow_sql_endpoint oci_dataflow_sql_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataflowSqlEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataflowSqlEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_sql_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._driverShape = config.driverShape;
    this._executorShape = config.executorShape;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._maxExecutorCount = config.maxExecutorCount;
    this._metastoreId = config.metastoreId;
    this._minExecutorCount = config.minExecutorCount;
    this._sparkAdvancedConfigurations = config.sparkAdvancedConfigurations;
    this._sqlEndpointVersion = config.sqlEndpointVersion;
    this._state = config.state;
    this._driverShapeConfig.internalValue = config.driverShapeConfig;
    this._executorShapeConfig.internalValue = config.executorShapeConfig;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // driver_shape - computed: false, optional: false, required: true
  private _driverShape?: string; 
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }
  public set driverShape(value: string) {
    this._driverShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeInput() {
    return this._driverShape;
  }

  // executor_shape - computed: false, optional: false, required: true
  private _executorShape?: string; 
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }
  public set executorShape(value: string) {
    this._executorShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeInput() {
    return this._executorShape;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

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

  // jdbc_endpoint_url - computed: true, optional: false, required: false
  public get jdbcEndpointUrl() {
    return this.getStringAttribute('jdbc_endpoint_url');
  }

  // lake_id - computed: true, optional: false, required: false
  public get lakeId() {
    return this.getStringAttribute('lake_id');
  }

  // max_executor_count - computed: false, optional: false, required: true
  private _maxExecutorCount?: number; 
  public get maxExecutorCount() {
    return this.getNumberAttribute('max_executor_count');
  }
  public set maxExecutorCount(value: number) {
    this._maxExecutorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutorCountInput() {
    return this._maxExecutorCount;
  }

  // metastore_id - computed: false, optional: false, required: true
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // min_executor_count - computed: false, optional: false, required: true
  private _minExecutorCount?: number; 
  public get minExecutorCount() {
    return this.getNumberAttribute('min_executor_count');
  }
  public set minExecutorCount(value: number) {
    this._minExecutorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutorCountInput() {
    return this._minExecutorCount;
  }

  // spark_advanced_configurations - computed: true, optional: true, required: false
  private _sparkAdvancedConfigurations?: { [key: string]: string }; 
  public get sparkAdvancedConfigurations() {
    return this.getStringMapAttribute('spark_advanced_configurations');
  }
  public set sparkAdvancedConfigurations(value: { [key: string]: string }) {
    this._sparkAdvancedConfigurations = value;
  }
  public resetSparkAdvancedConfigurations() {
    this._sparkAdvancedConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkAdvancedConfigurationsInput() {
    return this._sparkAdvancedConfigurations;
  }

  // sql_endpoint_version - computed: false, optional: false, required: true
  private _sqlEndpointVersion?: string; 
  public get sqlEndpointVersion() {
    return this.getStringAttribute('sql_endpoint_version');
  }
  public set sqlEndpointVersion(value: string) {
    this._sqlEndpointVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlEndpointVersionInput() {
    return this._sqlEndpointVersion;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // warehouse_bucket_uri - computed: true, optional: false, required: false
  public get warehouseBucketUri() {
    return this.getStringAttribute('warehouse_bucket_uri');
  }

  // driver_shape_config - computed: false, optional: true, required: false
  private _driverShapeConfig = new DataflowSqlEndpointDriverShapeConfigOutputReference(this, "driver_shape_config");
  public get driverShapeConfig() {
    return this._driverShapeConfig;
  }
  public putDriverShapeConfig(value: DataflowSqlEndpointDriverShapeConfig) {
    this._driverShapeConfig.internalValue = value;
  }
  public resetDriverShapeConfig() {
    this._driverShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeConfigInput() {
    return this._driverShapeConfig.internalValue;
  }

  // executor_shape_config - computed: false, optional: true, required: false
  private _executorShapeConfig = new DataflowSqlEndpointExecutorShapeConfigOutputReference(this, "executor_shape_config");
  public get executorShapeConfig() {
    return this._executorShapeConfig;
  }
  public putExecutorShapeConfig(value: DataflowSqlEndpointExecutorShapeConfig) {
    this._executorShapeConfig.internalValue = value;
  }
  public resetExecutorShapeConfig() {
    this._executorShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeConfigInput() {
    return this._executorShapeConfig.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new DataflowSqlEndpointNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: DataflowSqlEndpointNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataflowSqlEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataflowSqlEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      driver_shape: cdktf.stringToTerraform(this._driverShape),
      executor_shape: cdktf.stringToTerraform(this._executorShape),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      max_executor_count: cdktf.numberToTerraform(this._maxExecutorCount),
      metastore_id: cdktf.stringToTerraform(this._metastoreId),
      min_executor_count: cdktf.numberToTerraform(this._minExecutorCount),
      spark_advanced_configurations: cdktf.hashMapper(cdktf.stringToTerraform)(this._sparkAdvancedConfigurations),
      sql_endpoint_version: cdktf.stringToTerraform(this._sqlEndpointVersion),
      state: cdktf.stringToTerraform(this._state),
      driver_shape_config: dataflowSqlEndpointDriverShapeConfigToTerraform(this._driverShapeConfig.internalValue),
      executor_shape_config: dataflowSqlEndpointExecutorShapeConfigToTerraform(this._executorShapeConfig.internalValue),
      network_configuration: dataflowSqlEndpointNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      timeouts: dataflowSqlEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_shape: {
        value: cdktf.stringToHclTerraform(this._driverShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executor_shape: {
        value: cdktf.stringToHclTerraform(this._executorShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_executor_count: {
        value: cdktf.numberToHclTerraform(this._maxExecutorCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metastore_id: {
        value: cdktf.stringToHclTerraform(this._metastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_executor_count: {
        value: cdktf.numberToHclTerraform(this._minExecutorCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spark_advanced_configurations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sparkAdvancedConfigurations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      sql_endpoint_version: {
        value: cdktf.stringToHclTerraform(this._sqlEndpointVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_shape_config: {
        value: dataflowSqlEndpointDriverShapeConfigToHclTerraform(this._driverShapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowSqlEndpointDriverShapeConfigList",
      },
      executor_shape_config: {
        value: dataflowSqlEndpointExecutorShapeConfigToHclTerraform(this._executorShapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowSqlEndpointExecutorShapeConfigList",
      },
      network_configuration: {
        value: dataflowSqlEndpointNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataflowSqlEndpointNetworkConfigurationList",
      },
      timeouts: {
        value: dataflowSqlEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataflowSqlEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
