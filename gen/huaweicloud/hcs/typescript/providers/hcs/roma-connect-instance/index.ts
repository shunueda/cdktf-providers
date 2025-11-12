// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RomaConnectInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#available_zones RomaConnectInstance#available_zones}
  */
  readonly availableZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#cpu_architecture RomaConnectInstance#cpu_architecture}
  */
  readonly cpuArchitecture: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#description RomaConnectInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#eip_id RomaConnectInstance#eip_id}
  */
  readonly eipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#enable_all RomaConnectInstance#enable_all}
  */
  readonly enableAll: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#enterprise_project_id RomaConnectInstance#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#entrance_bandwidth_size RomaConnectInstance#entrance_bandwidth_size}
  */
  readonly entranceBandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#id RomaConnectInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#ipv6_enable RomaConnectInstance#ipv6_enable}
  */
  readonly ipv6Enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#maintain_begin RomaConnectInstance#maintain_begin}
  */
  readonly maintainBegin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#maintain_end RomaConnectInstance#maintain_end}
  */
  readonly maintainEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#name RomaConnectInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#product_id RomaConnectInstance#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#region RomaConnectInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#security_group_id RomaConnectInstance#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#subnet_id RomaConnectInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#vpc_id RomaConnectInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * mqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#mqs RomaConnectInstance#mqs}
  */
  readonly mqs: RomaConnectInstanceMqs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#timeouts RomaConnectInstance#timeouts}
  */
  readonly timeouts?: RomaConnectInstanceTimeouts;
}
export interface RomaConnectInstanceResourcesMqs {
}

export function romaConnectInstanceResourcesMqsToTerraform(struct?: RomaConnectInstanceResourcesMqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function romaConnectInstanceResourcesMqsToHclTerraform(struct?: RomaConnectInstanceResourcesMqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RomaConnectInstanceResourcesMqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RomaConnectInstanceResourcesMqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RomaConnectInstanceResourcesMqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // private_connect_address - computed: true, optional: false, required: false
  public get privateConnectAddress() {
    return this.getStringAttribute('private_connect_address');
  }

  // private_restful_address - computed: true, optional: false, required: false
  public get privateRestfulAddress() {
    return this.getStringAttribute('private_restful_address');
  }

  // public_connect_address - computed: true, optional: false, required: false
  public get publicConnectAddress() {
    return this.getStringAttribute('public_connect_address');
  }

  // public_restful_address - computed: true, optional: false, required: false
  public get publicRestfulAddress() {
    return this.getStringAttribute('public_restful_address');
  }

  // retention_policy - computed: true, optional: false, required: false
  public get retentionPolicy() {
    return this.getStringAttribute('retention_policy');
  }

  // specification - computed: true, optional: false, required: false
  public get specification() {
    return this.getStringAttribute('specification');
  }

  // ssl_enable - computed: true, optional: false, required: false
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }

  // trace_enable - computed: true, optional: false, required: false
  public get traceEnable() {
    return this.getBooleanAttribute('trace_enable');
  }

  // vpc_client_plain - computed: true, optional: false, required: false
  public get vpcClientPlain() {
    return this.getBooleanAttribute('vpc_client_plain');
  }
}

export class RomaConnectInstanceResourcesMqsList extends cdktf.ComplexList {

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
  public get(index: number): RomaConnectInstanceResourcesMqsOutputReference {
    return new RomaConnectInstanceResourcesMqsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RomaConnectInstanceResources {
}

export function romaConnectInstanceResourcesToTerraform(struct?: RomaConnectInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function romaConnectInstanceResourcesToHclTerraform(struct?: RomaConnectInstanceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RomaConnectInstanceResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RomaConnectInstanceResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RomaConnectInstanceResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mqs - computed: true, optional: false, required: false
  private _mqs = new RomaConnectInstanceResourcesMqsList(this, "mqs", false);
  public get mqs() {
    return this._mqs;
  }
}

export class RomaConnectInstanceResourcesList extends cdktf.ComplexList {

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
  public get(index: number): RomaConnectInstanceResourcesOutputReference {
    return new RomaConnectInstanceResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RomaConnectInstanceMqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#connector_enable RomaConnectInstance#connector_enable}
  */
  readonly connectorEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#enable_acl RomaConnectInstance#enable_acl}
  */
  readonly enableAcl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#enable_publicip RomaConnectInstance#enable_publicip}
  */
  readonly enablePublicip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#engine_version RomaConnectInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#retention_policy RomaConnectInstance#retention_policy}
  */
  readonly retentionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#rocketmq_enable RomaConnectInstance#rocketmq_enable}
  */
  readonly rocketmqEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#ssl_enable RomaConnectInstance#ssl_enable}
  */
  readonly sslEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#trace_enable RomaConnectInstance#trace_enable}
  */
  readonly traceEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#vpc_client_plain RomaConnectInstance#vpc_client_plain}
  */
  readonly vpcClientPlain?: boolean | cdktf.IResolvable;
}

export function romaConnectInstanceMqsToTerraform(struct?: RomaConnectInstanceMqs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_enable: cdktf.booleanToTerraform(struct!.connectorEnable),
    enable_acl: cdktf.booleanToTerraform(struct!.enableAcl),
    enable_publicip: cdktf.booleanToTerraform(struct!.enablePublicip),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    retention_policy: cdktf.stringToTerraform(struct!.retentionPolicy),
    rocketmq_enable: cdktf.booleanToTerraform(struct!.rocketmqEnable),
    ssl_enable: cdktf.booleanToTerraform(struct!.sslEnable),
    trace_enable: cdktf.booleanToTerraform(struct!.traceEnable),
    vpc_client_plain: cdktf.booleanToTerraform(struct!.vpcClientPlain),
  }
}


export function romaConnectInstanceMqsToHclTerraform(struct?: RomaConnectInstanceMqs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_enable: {
      value: cdktf.booleanToHclTerraform(struct!.connectorEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_acl: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_publicip: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_policy: {
      value: cdktf.stringToHclTerraform(struct!.retentionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rocketmq_enable: {
      value: cdktf.booleanToHclTerraform(struct!.rocketmqEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_enable: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trace_enable: {
      value: cdktf.booleanToHclTerraform(struct!.traceEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_client_plain: {
      value: cdktf.booleanToHclTerraform(struct!.vpcClientPlain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RomaConnectInstanceMqsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RomaConnectInstanceMqs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorEnable = this._connectorEnable;
    }
    if (this._enableAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcl = this._enableAcl;
    }
    if (this._enablePublicip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicip = this._enablePublicip;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._retentionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicy = this._retentionPolicy;
    }
    if (this._rocketmqEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rocketmqEnable = this._rocketmqEnable;
    }
    if (this._sslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnable = this._sslEnable;
    }
    if (this._traceEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceEnable = this._traceEnable;
    }
    if (this._vpcClientPlain !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcClientPlain = this._vpcClientPlain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RomaConnectInstanceMqs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorEnable = undefined;
      this._enableAcl = undefined;
      this._enablePublicip = undefined;
      this._engineVersion = undefined;
      this._retentionPolicy = undefined;
      this._rocketmqEnable = undefined;
      this._sslEnable = undefined;
      this._traceEnable = undefined;
      this._vpcClientPlain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorEnable = value.connectorEnable;
      this._enableAcl = value.enableAcl;
      this._enablePublicip = value.enablePublicip;
      this._engineVersion = value.engineVersion;
      this._retentionPolicy = value.retentionPolicy;
      this._rocketmqEnable = value.rocketmqEnable;
      this._sslEnable = value.sslEnable;
      this._traceEnable = value.traceEnable;
      this._vpcClientPlain = value.vpcClientPlain;
    }
  }

  // connector_enable - computed: false, optional: true, required: false
  private _connectorEnable?: boolean | cdktf.IResolvable; 
  public get connectorEnable() {
    return this.getBooleanAttribute('connector_enable');
  }
  public set connectorEnable(value: boolean | cdktf.IResolvable) {
    this._connectorEnable = value;
  }
  public resetConnectorEnable() {
    this._connectorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorEnableInput() {
    return this._connectorEnable;
  }

  // enable_acl - computed: false, optional: true, required: false
  private _enableAcl?: boolean | cdktf.IResolvable; 
  public get enableAcl() {
    return this.getBooleanAttribute('enable_acl');
  }
  public set enableAcl(value: boolean | cdktf.IResolvable) {
    this._enableAcl = value;
  }
  public resetEnableAcl() {
    this._enableAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAclInput() {
    return this._enableAcl;
  }

  // enable_publicip - computed: false, optional: true, required: false
  private _enablePublicip?: boolean | cdktf.IResolvable; 
  public get enablePublicip() {
    return this.getBooleanAttribute('enable_publicip');
  }
  public set enablePublicip(value: boolean | cdktf.IResolvable) {
    this._enablePublicip = value;
  }
  public resetEnablePublicip() {
    this._enablePublicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicipInput() {
    return this._enablePublicip;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy?: string; 
  public get retentionPolicy() {
    return this.getStringAttribute('retention_policy');
  }
  public set retentionPolicy(value: string) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy;
  }

  // rocketmq_enable - computed: false, optional: true, required: false
  private _rocketmqEnable?: boolean | cdktf.IResolvable; 
  public get rocketmqEnable() {
    return this.getBooleanAttribute('rocketmq_enable');
  }
  public set rocketmqEnable(value: boolean | cdktf.IResolvable) {
    this._rocketmqEnable = value;
  }
  public resetRocketmqEnable() {
    this._rocketmqEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rocketmqEnableInput() {
    return this._rocketmqEnable;
  }

  // ssl_enable - computed: false, optional: true, required: false
  private _sslEnable?: boolean | cdktf.IResolvable; 
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }
  public set sslEnable(value: boolean | cdktf.IResolvable) {
    this._sslEnable = value;
  }
  public resetSslEnable() {
    this._sslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnableInput() {
    return this._sslEnable;
  }

  // trace_enable - computed: false, optional: true, required: false
  private _traceEnable?: boolean | cdktf.IResolvable; 
  public get traceEnable() {
    return this.getBooleanAttribute('trace_enable');
  }
  public set traceEnable(value: boolean | cdktf.IResolvable) {
    this._traceEnable = value;
  }
  public resetTraceEnable() {
    this._traceEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceEnableInput() {
    return this._traceEnable;
  }

  // vpc_client_plain - computed: false, optional: true, required: false
  private _vpcClientPlain?: boolean | cdktf.IResolvable; 
  public get vpcClientPlain() {
    return this.getBooleanAttribute('vpc_client_plain');
  }
  public set vpcClientPlain(value: boolean | cdktf.IResolvable) {
    this._vpcClientPlain = value;
  }
  public resetVpcClientPlain() {
    this._vpcClientPlain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcClientPlainInput() {
    return this._vpcClientPlain;
  }
}

export class RomaConnectInstanceMqsList extends cdktf.ComplexList {
  public internalValue? : RomaConnectInstanceMqs[] | cdktf.IResolvable

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
  public get(index: number): RomaConnectInstanceMqsOutputReference {
    return new RomaConnectInstanceMqsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RomaConnectInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#create RomaConnectInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#delete RomaConnectInstance#delete}
  */
  readonly delete?: string;
}

export function romaConnectInstanceTimeoutsToTerraform(struct?: RomaConnectInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function romaConnectInstanceTimeoutsToHclTerraform(struct?: RomaConnectInstanceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RomaConnectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RomaConnectInstanceTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RomaConnectInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance hcs_roma_connect_instance}
*/
export class RomaConnectInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_roma_connect_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RomaConnectInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RomaConnectInstance to import
  * @param importFromId The id of the existing RomaConnectInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RomaConnectInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_roma_connect_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/resources/roma_connect_instance hcs_roma_connect_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RomaConnectInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RomaConnectInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_roma_connect_instance',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.20',
        providerVersionConstraint: '2.4.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availableZones = config.availableZones;
    this._cpuArchitecture = config.cpuArchitecture;
    this._description = config.description;
    this._eipId = config.eipId;
    this._enableAll = config.enableAll;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._entranceBandwidthSize = config.entranceBandwidthSize;
    this._id = config.id;
    this._ipv6Enable = config.ipv6Enable;
    this._maintainBegin = config.maintainBegin;
    this._maintainEnd = config.maintainEnd;
    this._name = config.name;
    this._productId = config.productId;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._mqs.internalValue = config.mqs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_zone_ids - computed: true, optional: false, required: false
  public get availableZoneIds() {
    return this.getListAttribute('available_zone_ids');
  }

  // available_zones - computed: false, optional: false, required: true
  private _availableZones?: string[]; 
  public get availableZones() {
    return this.getListAttribute('available_zones');
  }
  public set availableZones(value: string[]) {
    this._availableZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZonesInput() {
    return this._availableZones;
  }

  // bandwidths - computed: true, optional: false, required: false
  public get bandwidths() {
    return this.getNumberAttribute('bandwidths');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // connect_address - computed: true, optional: false, required: false
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }

  // cpu_arch - computed: true, optional: false, required: false
  public get cpuArch() {
    return this.getStringAttribute('cpu_arch');
  }

  // cpu_architecture - computed: false, optional: false, required: true
  private _cpuArchitecture?: string; 
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }
  public set cpuArchitecture(value: string) {
    this._cpuArchitecture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuArchitectureInput() {
    return this._cpuArchitecture;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
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

  // eip_id - computed: false, optional: true, required: false
  private _eipId?: string; 
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }
  public set eipId(value: string) {
    this._eipId = value;
  }
  public resetEipId() {
    this._eipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdInput() {
    return this._eipId;
  }

  // enable_all - computed: false, optional: false, required: true
  private _enableAll?: boolean | cdktf.IResolvable; 
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }
  public set enableAll(value: boolean | cdktf.IResolvable) {
    this._enableAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllInput() {
    return this._enableAll;
  }

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // entrance_bandwidth_size - computed: false, optional: true, required: false
  private _entranceBandwidthSize?: number; 
  public get entranceBandwidthSize() {
    return this.getNumberAttribute('entrance_bandwidth_size');
  }
  public set entranceBandwidthSize(value: number) {
    this._entranceBandwidthSize = value;
  }
  public resetEntranceBandwidthSize() {
    this._entranceBandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entranceBandwidthSizeInput() {
    return this._entranceBandwidthSize;
  }

  // external_eip_address - computed: true, optional: false, required: false
  public get externalEipAddress() {
    return this.getStringAttribute('external_eip_address');
  }

  // external_eip_bound - computed: true, optional: false, required: false
  public get externalEipBound() {
    return this.getStringAttribute('external_eip_bound');
  }

  // external_eip_id - computed: true, optional: false, required: false
  public get externalEipId() {
    return this.getStringAttribute('external_eip_id');
  }

  // external_elb_address - computed: true, optional: false, required: false
  public get externalElbAddress() {
    return this.getStringAttribute('external_elb_address');
  }

  // external_elb_enable - computed: true, optional: false, required: false
  public get externalElbEnable() {
    return this.getBooleanAttribute('external_elb_enable');
  }

  // external_elb_id - computed: true, optional: false, required: false
  public get externalElbId() {
    return this.getStringAttribute('external_elb_id');
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }

  // flavor_type - computed: true, optional: false, required: false
  public get flavorType() {
    return this.getStringAttribute('flavor_type');
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

  // ipv6_connect_address - computed: true, optional: false, required: false
  public get ipv6ConnectAddress() {
    return this.getStringAttribute('ipv6_connect_address');
  }

  // ipv6_enable - computed: false, optional: false, required: true
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable) {
    this._ipv6Enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // maintain_begin - computed: true, optional: true, required: false
  private _maintainBegin?: string; 
  public get maintainBegin() {
    return this.getStringAttribute('maintain_begin');
  }
  public set maintainBegin(value: string) {
    this._maintainBegin = value;
  }
  public resetMaintainBegin() {
    this._maintainBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainBeginInput() {
    return this._maintainBegin;
  }

  // maintain_end - computed: true, optional: true, required: false
  private _maintainEnd?: string; 
  public get maintainEnd() {
    return this.getStringAttribute('maintain_end');
  }
  public set maintainEnd(value: string) {
    this._maintainEnd = value;
  }
  public resetMaintainEnd() {
    this._maintainEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndInput() {
    return this._maintainEnd;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // publicip_address - computed: true, optional: false, required: false
  public get publicipAddress() {
    return this.getStringAttribute('publicip_address');
  }

  // publicip_enable - computed: true, optional: false, required: false
  public get publicipEnable() {
    return this.getBooleanAttribute('publicip_enable');
  }

  // publicip_id - computed: true, optional: false, required: false
  public get publicipId() {
    return this.getStringAttribute('publicip_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new RomaConnectInstanceResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // rocketmq_enable - computed: true, optional: false, required: false
  public get rocketmqEnable() {
    return this.getBooleanAttribute('rocketmq_enable');
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // mqs - computed: false, optional: false, required: true
  private _mqs = new RomaConnectInstanceMqsList(this, "mqs", false);
  public get mqs() {
    return this._mqs;
  }
  public putMqs(value: RomaConnectInstanceMqs[] | cdktf.IResolvable) {
    this._mqs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mqsInput() {
    return this._mqs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RomaConnectInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RomaConnectInstanceTimeouts) {
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
      available_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availableZones),
      cpu_architecture: cdktf.stringToTerraform(this._cpuArchitecture),
      description: cdktf.stringToTerraform(this._description),
      eip_id: cdktf.stringToTerraform(this._eipId),
      enable_all: cdktf.booleanToTerraform(this._enableAll),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      entrance_bandwidth_size: cdktf.numberToTerraform(this._entranceBandwidthSize),
      id: cdktf.stringToTerraform(this._id),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      maintain_begin: cdktf.stringToTerraform(this._maintainBegin),
      maintain_end: cdktf.stringToTerraform(this._maintainEnd),
      name: cdktf.stringToTerraform(this._name),
      product_id: cdktf.stringToTerraform(this._productId),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      mqs: cdktf.listMapper(romaConnectInstanceMqsToTerraform, true)(this._mqs.internalValue),
      timeouts: romaConnectInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      available_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availableZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cpu_architecture: {
        value: cdktf.stringToHclTerraform(this._cpuArchitecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip_id: {
        value: cdktf.stringToHclTerraform(this._eipId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_all: {
        value: cdktf.booleanToHclTerraform(this._enableAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entrance_bandwidth_size: {
        value: cdktf.numberToHclTerraform(this._entranceBandwidthSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintain_begin: {
        value: cdktf.stringToHclTerraform(this._maintainBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_end: {
        value: cdktf.stringToHclTerraform(this._maintainEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqs: {
        value: cdktf.listMapperHcl(romaConnectInstanceMqsToHclTerraform, true)(this._mqs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RomaConnectInstanceMqsList",
      },
      timeouts: {
        value: romaConnectInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RomaConnectInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
