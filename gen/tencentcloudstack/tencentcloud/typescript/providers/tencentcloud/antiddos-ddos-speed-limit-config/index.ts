// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosDdosSpeedLimitConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#id AntiddosDdosSpeedLimitConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * InstanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#instance_id AntiddosDdosSpeedLimitConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * ddos_speed_limit_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#ddos_speed_limit_config AntiddosDdosSpeedLimitConfig#ddos_speed_limit_config}
  */
  readonly ddosSpeedLimitConfig: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfig;
}
export interface AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes {
  /**
  * Starting port, ranging from 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#begin_port AntiddosDdosSpeedLimitConfig#begin_port}
  */
  readonly beginPort: number;
  /**
  * end  port, ranging from 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#end_port AntiddosDdosSpeedLimitConfig#end_port}
  */
  readonly endPort: number;
}

export function antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesToTerraform(struct?: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_port: cdktf.numberToTerraform(struct!.beginPort),
    end_port: cdktf.numberToTerraform(struct!.endPort),
  }
}


export function antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesToHclTerraform(struct?: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_port: {
      value: cdktf.numberToHclTerraform(struct!.beginPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginPort = this._beginPort;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beginPort = undefined;
      this._endPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beginPort = value.beginPort;
      this._endPort = value.endPort;
    }
  }

  // begin_port - computed: false, optional: false, required: true
  private _beginPort?: number; 
  public get beginPort() {
    return this.getNumberAttribute('begin_port');
  }
  public set beginPort(value: number) {
    this._beginPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginPortInput() {
    return this._beginPort;
  }

  // end_port - computed: false, optional: false, required: true
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }
}

export class AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesList extends cdktf.ComplexList {
  public internalValue? : AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes[] | cdktf.IResolvable

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
  public get(index: number): AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesOutputReference {
    return new AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues {
  /**
  * Speed limit value type, value [1 (packet rate pps) 2 (bandwidth bps)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#type AntiddosDdosSpeedLimitConfig#type}
  */
  readonly type: number;
  /**
  * value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#value AntiddosDdosSpeedLimitConfig#value}
  */
  readonly value: number;
}

export function antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesToTerraform(struct?: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.numberToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesToHclTerraform(struct?: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesList extends cdktf.ComplexList {
  public internalValue? : AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues[] | cdktf.IResolvable

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
  public get(index: number): AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesOutputReference {
    return new AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfig {
  /**
  * List of port ranges, up to 8, multiple; Separate and indicate the range with -; This port range must be filled in; Fill in style 1:0-65535, style 2: 80; 443; 1000-2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#dst_port_list AntiddosDdosSpeedLimitConfig#dst_port_list}
  */
  readonly dstPortList?: string;
  /**
  * Speed limit mode, value [1 (based on source IP speed limit) 2 (based on destination port speed limit)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#mode AntiddosDdosSpeedLimitConfig#mode}
  */
  readonly mode: number;
  /**
  * IP protocol numbers, values [ALL (all protocols) TCP (tcp protocol) UDP (udp protocol) SMP (smp protocol) 1; 2-100 (custom protocol number range, up to 8)] Note: When customizing the protocol number range, only the protocol number can be filled in, multiple ranges; Separation; When filling in ALL, no other agreements or agreements can be filled inNumber.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#protocol_list AntiddosDdosSpeedLimitConfig#protocol_list}
  */
  readonly protocolList?: string;
  /**
  * dst_port_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#dst_port_scopes AntiddosDdosSpeedLimitConfig#dst_port_scopes}
  */
  readonly dstPortScopes?: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes[] | cdktf.IResolvable;
  /**
  * speed_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#speed_values AntiddosDdosSpeedLimitConfig#speed_values}
  */
  readonly speedValues: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues[] | cdktf.IResolvable;
}

export function antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigToTerraform(struct?: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigOutputReference | AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_port_list: cdktf.stringToTerraform(struct!.dstPortList),
    mode: cdktf.numberToTerraform(struct!.mode),
    protocol_list: cdktf.stringToTerraform(struct!.protocolList),
    dst_port_scopes: cdktf.listMapper(antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesToTerraform, true)(struct!.dstPortScopes),
    speed_values: cdktf.listMapper(antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesToTerraform, true)(struct!.speedValues),
  }
}


export function antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigToHclTerraform(struct?: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigOutputReference | AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_port_list: {
      value: cdktf.stringToHclTerraform(struct!.dstPortList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_list: {
      value: cdktf.stringToHclTerraform(struct!.protocolList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port_scopes: {
      value: cdktf.listMapperHcl(antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesToHclTerraform, true)(struct!.dstPortScopes),
      isBlock: true,
      type: "list",
      storageClassType: "AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesList",
    },
    speed_values: {
      value: cdktf.listMapperHcl(antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesToHclTerraform, true)(struct!.speedValues),
      isBlock: true,
      type: "list",
      storageClassType: "AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPortList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortList = this._dstPortList;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._protocolList !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolList = this._protocolList;
    }
    if (this._dstPortScopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortScopes = this._dstPortScopes?.internalValue;
    }
    if (this._speedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedValues = this._speedValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstPortList = undefined;
      this._mode = undefined;
      this._protocolList = undefined;
      this._dstPortScopes.internalValue = undefined;
      this._speedValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstPortList = value.dstPortList;
      this._mode = value.mode;
      this._protocolList = value.protocolList;
      this._dstPortScopes.internalValue = value.dstPortScopes;
      this._speedValues.internalValue = value.speedValues;
    }
  }

  // dst_port_list - computed: false, optional: true, required: false
  private _dstPortList?: string; 
  public get dstPortList() {
    return this.getStringAttribute('dst_port_list');
  }
  public set dstPortList(value: string) {
    this._dstPortList = value;
  }
  public resetDstPortList() {
    this._dstPortList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortListInput() {
    return this._dstPortList;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // protocol_list - computed: false, optional: true, required: false
  private _protocolList?: string; 
  public get protocolList() {
    return this.getStringAttribute('protocol_list');
  }
  public set protocolList(value: string) {
    this._protocolList = value;
  }
  public resetProtocolList() {
    this._protocolList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolListInput() {
    return this._protocolList;
  }

  // dst_port_scopes - computed: false, optional: true, required: false
  private _dstPortScopes = new AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopesList(this, "dst_port_scopes", false);
  public get dstPortScopes() {
    return this._dstPortScopes;
  }
  public putDstPortScopes(value: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigDstPortScopes[] | cdktf.IResolvable) {
    this._dstPortScopes.internalValue = value;
  }
  public resetDstPortScopes() {
    this._dstPortScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortScopesInput() {
    return this._dstPortScopes.internalValue;
  }

  // speed_values - computed: false, optional: false, required: true
  private _speedValues = new AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValuesList(this, "speed_values", false);
  public get speedValues() {
    return this._speedValues;
  }
  public putSpeedValues(value: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigSpeedValues[] | cdktf.IResolvable) {
    this._speedValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedValuesInput() {
    return this._speedValues.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config tencentcloud_antiddos_ddos_speed_limit_config}
*/
export class AntiddosDdosSpeedLimitConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_ddos_speed_limit_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosDdosSpeedLimitConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosDdosSpeedLimitConfig to import
  * @param importFromId The id of the existing AntiddosDdosSpeedLimitConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosDdosSpeedLimitConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_ddos_speed_limit_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/antiddos_ddos_speed_limit_config tencentcloud_antiddos_ddos_speed_limit_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosDdosSpeedLimitConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosDdosSpeedLimitConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_ddos_speed_limit_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._instanceId = config.instanceId;
    this._ddosSpeedLimitConfig.internalValue = config.ddosSpeedLimitConfig;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ddos_speed_limit_config - computed: false, optional: false, required: true
  private _ddosSpeedLimitConfig = new AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigOutputReference(this, "ddos_speed_limit_config");
  public get ddosSpeedLimitConfig() {
    return this._ddosSpeedLimitConfig;
  }
  public putDdosSpeedLimitConfig(value: AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfig) {
    this._ddosSpeedLimitConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosSpeedLimitConfigInput() {
    return this._ddosSpeedLimitConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ddos_speed_limit_config: antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigToTerraform(this._ddosSpeedLimitConfig.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_speed_limit_config: {
        value: antiddosDdosSpeedLimitConfigDdosSpeedLimitConfigToHclTerraform(this._ddosSpeedLimitConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosDdosSpeedLimitConfigDdosSpeedLimitConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
