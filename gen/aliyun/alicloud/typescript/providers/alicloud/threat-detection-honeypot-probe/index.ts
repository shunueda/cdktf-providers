// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionHoneypotProbeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#arp ThreatDetectionHoneypotProbe#arp}
  */
  readonly arp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#control_node_id ThreatDetectionHoneypotProbe#control_node_id}
  */
  readonly controlNodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#display_name ThreatDetectionHoneypotProbe#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#id ThreatDetectionHoneypotProbe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#ping ThreatDetectionHoneypotProbe#ping}
  */
  readonly ping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#probe_type ThreatDetectionHoneypotProbe#probe_type}
  */
  readonly probeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#probe_version ThreatDetectionHoneypotProbe#probe_version}
  */
  readonly probeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#proxy_ip ThreatDetectionHoneypotProbe#proxy_ip}
  */
  readonly proxyIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#service_ip_list ThreatDetectionHoneypotProbe#service_ip_list}
  */
  readonly serviceIpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#uuid ThreatDetectionHoneypotProbe#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#vpc_id ThreatDetectionHoneypotProbe#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * honeypot_bind_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#honeypot_bind_list ThreatDetectionHoneypotProbe#honeypot_bind_list}
  */
  readonly honeypotBindList?: ThreatDetectionHoneypotProbeHoneypotBindListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#timeouts ThreatDetectionHoneypotProbe#timeouts}
  */
  readonly timeouts?: ThreatDetectionHoneypotProbeTimeouts;
}
export interface ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#bind_port ThreatDetectionHoneypotProbe#bind_port}
  */
  readonly bindPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#end_port ThreatDetectionHoneypotProbe#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#fixed ThreatDetectionHoneypotProbe#fixed}
  */
  readonly fixed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#start_port ThreatDetectionHoneypotProbe#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#target_port ThreatDetectionHoneypotProbe#target_port}
  */
  readonly targetPort?: number;
}

export function threatDetectionHoneypotProbeHoneypotBindListBindPortListStructToTerraform(struct?: ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_port: cdktf.booleanToTerraform(struct!.bindPort),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    fixed: cdktf.booleanToTerraform(struct!.fixed),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function threatDetectionHoneypotProbeHoneypotBindListBindPortListStructToHclTerraform(struct?: ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_port: {
      value: cdktf.booleanToHclTerraform(struct!.bindPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed: {
      value: cdktf.booleanToHclTerraform(struct!.fixed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPort = this._bindPort;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindPort = undefined;
      this._endPort = undefined;
      this._fixed = undefined;
      this._startPort = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindPort = value.bindPort;
      this._endPort = value.endPort;
      this._fixed = value.fixed;
      this._startPort = value.startPort;
      this._targetPort = value.targetPort;
    }
  }

  // bind_port - computed: true, optional: true, required: false
  private _bindPort?: boolean | cdktf.IResolvable; 
  public get bindPort() {
    return this.getBooleanAttribute('bind_port');
  }
  public set bindPort(value: boolean | cdktf.IResolvable) {
    this._bindPort = value;
  }
  public resetBindPort() {
    this._bindPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPortInput() {
    return this._bindPort;
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // fixed - computed: true, optional: true, required: false
  private _fixed?: boolean | cdktf.IResolvable; 
  public get fixed() {
    return this.getBooleanAttribute('fixed');
  }
  public set fixed(value: boolean | cdktf.IResolvable) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // target_port - computed: true, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStructList extends cdktf.ComplexList {
  public internalValue? : ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStructOutputReference {
    return new ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatDetectionHoneypotProbeHoneypotBindListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#honeypot_id ThreatDetectionHoneypotProbe#honeypot_id}
  */
  readonly honeypotId?: string;
  /**
  * bind_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#bind_port_list ThreatDetectionHoneypotProbe#bind_port_list}
  */
  readonly bindPortList?: ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct[] | cdktf.IResolvable;
}

export function threatDetectionHoneypotProbeHoneypotBindListStructToTerraform(struct?: ThreatDetectionHoneypotProbeHoneypotBindListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    honeypot_id: cdktf.stringToTerraform(struct!.honeypotId),
    bind_port_list: cdktf.listMapper(threatDetectionHoneypotProbeHoneypotBindListBindPortListStructToTerraform, true)(struct!.bindPortList),
  }
}


export function threatDetectionHoneypotProbeHoneypotBindListStructToHclTerraform(struct?: ThreatDetectionHoneypotProbeHoneypotBindListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    honeypot_id: {
      value: cdktf.stringToHclTerraform(struct!.honeypotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_port_list: {
      value: cdktf.listMapperHcl(threatDetectionHoneypotProbeHoneypotBindListBindPortListStructToHclTerraform, true)(struct!.bindPortList),
      isBlock: true,
      type: "set",
      storageClassType: "ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionHoneypotProbeHoneypotBindListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThreatDetectionHoneypotProbeHoneypotBindListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._honeypotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeypotId = this._honeypotId;
    }
    if (this._bindPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPortList = this._bindPortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionHoneypotProbeHoneypotBindListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._honeypotId = undefined;
      this._bindPortList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._honeypotId = value.honeypotId;
      this._bindPortList.internalValue = value.bindPortList;
    }
  }

  // honeypot_id - computed: false, optional: true, required: false
  private _honeypotId?: string; 
  public get honeypotId() {
    return this.getStringAttribute('honeypot_id');
  }
  public set honeypotId(value: string) {
    this._honeypotId = value;
  }
  public resetHoneypotId() {
    this._honeypotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotIdInput() {
    return this._honeypotId;
  }

  // bind_port_list - computed: false, optional: true, required: false
  private _bindPortList = new ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStructList(this, "bind_port_list", true);
  public get bindPortList() {
    return this._bindPortList;
  }
  public putBindPortList(value: ThreatDetectionHoneypotProbeHoneypotBindListBindPortListStruct[] | cdktf.IResolvable) {
    this._bindPortList.internalValue = value;
  }
  public resetBindPortList() {
    this._bindPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPortListInput() {
    return this._bindPortList.internalValue;
  }
}

export class ThreatDetectionHoneypotProbeHoneypotBindListStructList extends cdktf.ComplexList {
  public internalValue? : ThreatDetectionHoneypotProbeHoneypotBindListStruct[] | cdktf.IResolvable

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
  public get(index: number): ThreatDetectionHoneypotProbeHoneypotBindListStructOutputReference {
    return new ThreatDetectionHoneypotProbeHoneypotBindListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThreatDetectionHoneypotProbeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#create ThreatDetectionHoneypotProbe#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#delete ThreatDetectionHoneypotProbe#delete}
  */
  readonly delete?: string;
}

export function threatDetectionHoneypotProbeTimeoutsToTerraform(struct?: ThreatDetectionHoneypotProbeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function threatDetectionHoneypotProbeTimeoutsToHclTerraform(struct?: ThreatDetectionHoneypotProbeTimeouts | cdktf.IResolvable): any {
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

export class ThreatDetectionHoneypotProbeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionHoneypotProbeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatDetectionHoneypotProbeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe alicloud_threat_detection_honeypot_probe}
*/
export class ThreatDetectionHoneypotProbe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_honeypot_probe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionHoneypotProbe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionHoneypotProbe to import
  * @param importFromId The id of the existing ThreatDetectionHoneypotProbe that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionHoneypotProbe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_honeypot_probe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_honeypot_probe alicloud_threat_detection_honeypot_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionHoneypotProbeConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionHoneypotProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_honeypot_probe',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arp = config.arp;
    this._controlNodeId = config.controlNodeId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ping = config.ping;
    this._probeType = config.probeType;
    this._probeVersion = config.probeVersion;
    this._proxyIp = config.proxyIp;
    this._serviceIpList = config.serviceIpList;
    this._uuid = config.uuid;
    this._vpcId = config.vpcId;
    this._honeypotBindList.internalValue = config.honeypotBindList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp - computed: false, optional: true, required: false
  private _arp?: boolean | cdktf.IResolvable; 
  public get arp() {
    return this.getBooleanAttribute('arp');
  }
  public set arp(value: boolean | cdktf.IResolvable) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // control_node_id - computed: false, optional: false, required: true
  private _controlNodeId?: string; 
  public get controlNodeId() {
    return this.getStringAttribute('control_node_id');
  }
  public set controlNodeId(value: string) {
    this._controlNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlNodeIdInput() {
    return this._controlNodeId;
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

  // honeypot_probe_id - computed: true, optional: false, required: false
  public get honeypotProbeId() {
    return this.getStringAttribute('honeypot_probe_id');
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

  // ping - computed: false, optional: true, required: false
  private _ping?: boolean | cdktf.IResolvable; 
  public get ping() {
    return this.getBooleanAttribute('ping');
  }
  public set ping(value: boolean | cdktf.IResolvable) {
    this._ping = value;
  }
  public resetPing() {
    this._ping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingInput() {
    return this._ping;
  }

  // probe_type - computed: false, optional: false, required: true
  private _probeType?: string; 
  public get probeType() {
    return this.getStringAttribute('probe_type');
  }
  public set probeType(value: string) {
    this._probeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTypeInput() {
    return this._probeType;
  }

  // probe_version - computed: true, optional: true, required: false
  private _probeVersion?: string; 
  public get probeVersion() {
    return this.getStringAttribute('probe_version');
  }
  public set probeVersion(value: string) {
    this._probeVersion = value;
  }
  public resetProbeVersion() {
    this._probeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeVersionInput() {
    return this._probeVersion;
  }

  // proxy_ip - computed: false, optional: true, required: false
  private _proxyIp?: string; 
  public get proxyIp() {
    return this.getStringAttribute('proxy_ip');
  }
  public set proxyIp(value: string) {
    this._proxyIp = value;
  }
  public resetProxyIp() {
    this._proxyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIpInput() {
    return this._proxyIp;
  }

  // service_ip_list - computed: true, optional: true, required: false
  private _serviceIpList?: string[]; 
  public get serviceIpList() {
    return this.getListAttribute('service_ip_list');
  }
  public set serviceIpList(value: string[]) {
    this._serviceIpList = value;
  }
  public resetServiceIpList() {
    this._serviceIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpListInput() {
    return this._serviceIpList;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // honeypot_bind_list - computed: false, optional: true, required: false
  private _honeypotBindList = new ThreatDetectionHoneypotProbeHoneypotBindListStructList(this, "honeypot_bind_list", true);
  public get honeypotBindList() {
    return this._honeypotBindList;
  }
  public putHoneypotBindList(value: ThreatDetectionHoneypotProbeHoneypotBindListStruct[] | cdktf.IResolvable) {
    this._honeypotBindList.internalValue = value;
  }
  public resetHoneypotBindList() {
    this._honeypotBindList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotBindListInput() {
    return this._honeypotBindList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionHoneypotProbeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionHoneypotProbeTimeouts) {
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
      arp: cdktf.booleanToTerraform(this._arp),
      control_node_id: cdktf.stringToTerraform(this._controlNodeId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ping: cdktf.booleanToTerraform(this._ping),
      probe_type: cdktf.stringToTerraform(this._probeType),
      probe_version: cdktf.stringToTerraform(this._probeVersion),
      proxy_ip: cdktf.stringToTerraform(this._proxyIp),
      service_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIpList),
      uuid: cdktf.stringToTerraform(this._uuid),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      honeypot_bind_list: cdktf.listMapper(threatDetectionHoneypotProbeHoneypotBindListStructToTerraform, true)(this._honeypotBindList.internalValue),
      timeouts: threatDetectionHoneypotProbeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp: {
        value: cdktf.booleanToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      control_node_id: {
        value: cdktf.stringToHclTerraform(this._controlNodeId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping: {
        value: cdktf.booleanToHclTerraform(this._ping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      probe_type: {
        value: cdktf.stringToHclTerraform(this._probeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_version: {
        value: cdktf.stringToHclTerraform(this._probeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_ip: {
        value: cdktf.stringToHclTerraform(this._proxyIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIpList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
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
      honeypot_bind_list: {
        value: cdktf.listMapperHcl(threatDetectionHoneypotProbeHoneypotBindListStructToHclTerraform, true)(this._honeypotBindList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ThreatDetectionHoneypotProbeHoneypotBindListStructList",
      },
      timeouts: {
        value: threatDetectionHoneypotProbeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionHoneypotProbeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
