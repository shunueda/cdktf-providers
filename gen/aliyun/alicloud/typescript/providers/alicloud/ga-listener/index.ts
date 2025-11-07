// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#accelerator_id GaListener#accelerator_id}
  */
  readonly acceleratorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#client_affinity GaListener#client_affinity}
  */
  readonly clientAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#description GaListener#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#http_version GaListener#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#id GaListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#idle_timeout GaListener#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#listener_type GaListener#listener_type}
  */
  readonly listenerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#name GaListener#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#protocol GaListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#proxy_protocol GaListener#proxy_protocol}
  */
  readonly proxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#request_timeout GaListener#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#security_policy_id GaListener#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#certificates GaListener#certificates}
  */
  readonly certificates?: GaListenerCertificates[] | cdktf.IResolvable;
  /**
  * forwarded_for_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#forwarded_for_config GaListener#forwarded_for_config}
  */
  readonly forwardedForConfig?: GaListenerForwardedForConfig;
  /**
  * port_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#port_ranges GaListener#port_ranges}
  */
  readonly portRanges: GaListenerPortRanges[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#timeouts GaListener#timeouts}
  */
  readonly timeouts?: GaListenerTimeouts;
}
export interface GaListenerCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#id GaListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gaListenerCertificatesToTerraform(struct?: GaListenerCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gaListenerCertificatesToHclTerraform(struct?: GaListenerCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaListenerCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaListenerCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaListenerCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class GaListenerCertificatesList extends cdktf.ComplexList {
  public internalValue? : GaListenerCertificates[] | cdktf.IResolvable

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
  public get(index: number): GaListenerCertificatesOutputReference {
    return new GaListenerCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaListenerForwardedForConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#forwarded_for_ga_ap_enabled GaListener#forwarded_for_ga_ap_enabled}
  */
  readonly forwardedForGaApEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#forwarded_for_ga_id_enabled GaListener#forwarded_for_ga_id_enabled}
  */
  readonly forwardedForGaIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#forwarded_for_port_enabled GaListener#forwarded_for_port_enabled}
  */
  readonly forwardedForPortEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#forwarded_for_proto_enabled GaListener#forwarded_for_proto_enabled}
  */
  readonly forwardedForProtoEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#real_ip_enabled GaListener#real_ip_enabled}
  */
  readonly realIpEnabled?: boolean | cdktf.IResolvable;
}

export function gaListenerForwardedForConfigToTerraform(struct?: GaListenerForwardedForConfigOutputReference | GaListenerForwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarded_for_ga_ap_enabled: cdktf.booleanToTerraform(struct!.forwardedForGaApEnabled),
    forwarded_for_ga_id_enabled: cdktf.booleanToTerraform(struct!.forwardedForGaIdEnabled),
    forwarded_for_port_enabled: cdktf.booleanToTerraform(struct!.forwardedForPortEnabled),
    forwarded_for_proto_enabled: cdktf.booleanToTerraform(struct!.forwardedForProtoEnabled),
    real_ip_enabled: cdktf.booleanToTerraform(struct!.realIpEnabled),
  }
}


export function gaListenerForwardedForConfigToHclTerraform(struct?: GaListenerForwardedForConfigOutputReference | GaListenerForwardedForConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarded_for_ga_ap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.forwardedForGaApEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarded_for_ga_id_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.forwardedForGaIdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarded_for_port_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.forwardedForPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarded_for_proto_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.forwardedForProtoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    real_ip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.realIpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaListenerForwardedForConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GaListenerForwardedForConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardedForGaApEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedForGaApEnabled = this._forwardedForGaApEnabled;
    }
    if (this._forwardedForGaIdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedForGaIdEnabled = this._forwardedForGaIdEnabled;
    }
    if (this._forwardedForPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedForPortEnabled = this._forwardedForPortEnabled;
    }
    if (this._forwardedForProtoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedForProtoEnabled = this._forwardedForProtoEnabled;
    }
    if (this._realIpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.realIpEnabled = this._realIpEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaListenerForwardedForConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardedForGaApEnabled = undefined;
      this._forwardedForGaIdEnabled = undefined;
      this._forwardedForPortEnabled = undefined;
      this._forwardedForProtoEnabled = undefined;
      this._realIpEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardedForGaApEnabled = value.forwardedForGaApEnabled;
      this._forwardedForGaIdEnabled = value.forwardedForGaIdEnabled;
      this._forwardedForPortEnabled = value.forwardedForPortEnabled;
      this._forwardedForProtoEnabled = value.forwardedForProtoEnabled;
      this._realIpEnabled = value.realIpEnabled;
    }
  }

  // forwarded_for_ga_ap_enabled - computed: false, optional: true, required: false
  private _forwardedForGaApEnabled?: boolean | cdktf.IResolvable; 
  public get forwardedForGaApEnabled() {
    return this.getBooleanAttribute('forwarded_for_ga_ap_enabled');
  }
  public set forwardedForGaApEnabled(value: boolean | cdktf.IResolvable) {
    this._forwardedForGaApEnabled = value;
  }
  public resetForwardedForGaApEnabled() {
    this._forwardedForGaApEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedForGaApEnabledInput() {
    return this._forwardedForGaApEnabled;
  }

  // forwarded_for_ga_id_enabled - computed: false, optional: true, required: false
  private _forwardedForGaIdEnabled?: boolean | cdktf.IResolvable; 
  public get forwardedForGaIdEnabled() {
    return this.getBooleanAttribute('forwarded_for_ga_id_enabled');
  }
  public set forwardedForGaIdEnabled(value: boolean | cdktf.IResolvable) {
    this._forwardedForGaIdEnabled = value;
  }
  public resetForwardedForGaIdEnabled() {
    this._forwardedForGaIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedForGaIdEnabledInput() {
    return this._forwardedForGaIdEnabled;
  }

  // forwarded_for_port_enabled - computed: false, optional: true, required: false
  private _forwardedForPortEnabled?: boolean | cdktf.IResolvable; 
  public get forwardedForPortEnabled() {
    return this.getBooleanAttribute('forwarded_for_port_enabled');
  }
  public set forwardedForPortEnabled(value: boolean | cdktf.IResolvable) {
    this._forwardedForPortEnabled = value;
  }
  public resetForwardedForPortEnabled() {
    this._forwardedForPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedForPortEnabledInput() {
    return this._forwardedForPortEnabled;
  }

  // forwarded_for_proto_enabled - computed: false, optional: true, required: false
  private _forwardedForProtoEnabled?: boolean | cdktf.IResolvable; 
  public get forwardedForProtoEnabled() {
    return this.getBooleanAttribute('forwarded_for_proto_enabled');
  }
  public set forwardedForProtoEnabled(value: boolean | cdktf.IResolvable) {
    this._forwardedForProtoEnabled = value;
  }
  public resetForwardedForProtoEnabled() {
    this._forwardedForProtoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedForProtoEnabledInput() {
    return this._forwardedForProtoEnabled;
  }

  // real_ip_enabled - computed: false, optional: true, required: false
  private _realIpEnabled?: boolean | cdktf.IResolvable; 
  public get realIpEnabled() {
    return this.getBooleanAttribute('real_ip_enabled');
  }
  public set realIpEnabled(value: boolean | cdktf.IResolvable) {
    this._realIpEnabled = value;
  }
  public resetRealIpEnabled() {
    this._realIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realIpEnabledInput() {
    return this._realIpEnabled;
  }
}
export interface GaListenerPortRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#from_port GaListener#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#to_port GaListener#to_port}
  */
  readonly toPort: number;
}

export function gaListenerPortRangesToTerraform(struct?: GaListenerPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}


export function gaListenerPortRangesToHclTerraform(struct?: GaListenerPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaListenerPortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaListenerPortRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaListenerPortRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class GaListenerPortRangesList extends cdktf.ComplexList {
  public internalValue? : GaListenerPortRanges[] | cdktf.IResolvable

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
  public get(index: number): GaListenerPortRangesOutputReference {
    return new GaListenerPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#create GaListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#delete GaListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#update GaListener#update}
  */
  readonly update?: string;
}

export function gaListenerTimeoutsToTerraform(struct?: GaListenerTimeouts | cdktf.IResolvable): any {
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


export function gaListenerTimeoutsToHclTerraform(struct?: GaListenerTimeouts | cdktf.IResolvable): any {
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

export class GaListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GaListenerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GaListenerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener alicloud_ga_listener}
*/
export class GaListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaListener to import
  * @param importFromId The id of the existing GaListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_listener alicloud_ga_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaListenerConfig
  */
  public constructor(scope: Construct, id: string, config: GaListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_listener',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratorId = config.acceleratorId;
    this._clientAffinity = config.clientAffinity;
    this._description = config.description;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._listenerType = config.listenerType;
    this._name = config.name;
    this._protocol = config.protocol;
    this._proxyProtocol = config.proxyProtocol;
    this._requestTimeout = config.requestTimeout;
    this._securityPolicyId = config.securityPolicyId;
    this._certificates.internalValue = config.certificates;
    this._forwardedForConfig.internalValue = config.forwardedForConfig;
    this._portRanges.internalValue = config.portRanges;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_id - computed: false, optional: false, required: true
  private _acceleratorId?: string; 
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }
  public set acceleratorId(value: string) {
    this._acceleratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorIdInput() {
    return this._acceleratorId;
  }

  // client_affinity - computed: false, optional: true, required: false
  private _clientAffinity?: string; 
  public get clientAffinity() {
    return this.getStringAttribute('client_affinity');
  }
  public set clientAffinity(value: string) {
    this._clientAffinity = value;
  }
  public resetClientAffinity() {
    this._clientAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAffinityInput() {
    return this._clientAffinity;
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

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // listener_type - computed: false, optional: true, required: false
  private _listenerType?: string; 
  public get listenerType() {
    return this.getStringAttribute('listener_type');
  }
  public set listenerType(value: string) {
    this._listenerType = value;
  }
  public resetListenerType() {
    this._listenerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerTypeInput() {
    return this._listenerType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol?: boolean | cdktf.IResolvable; 
  public get proxyProtocol() {
    return this.getBooleanAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: boolean | cdktf.IResolvable) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // security_policy_id - computed: true, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new GaListenerCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: GaListenerCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // forwarded_for_config - computed: false, optional: true, required: false
  private _forwardedForConfig = new GaListenerForwardedForConfigOutputReference(this, "forwarded_for_config");
  public get forwardedForConfig() {
    return this._forwardedForConfig;
  }
  public putForwardedForConfig(value: GaListenerForwardedForConfig) {
    this._forwardedForConfig.internalValue = value;
  }
  public resetForwardedForConfig() {
    this._forwardedForConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedForConfigInput() {
    return this._forwardedForConfig.internalValue;
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges = new GaListenerPortRangesList(this, "port_ranges", false);
  public get portRanges() {
    return this._portRanges;
  }
  public putPortRanges(value: GaListenerPortRanges[] | cdktf.IResolvable) {
    this._portRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GaListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GaListenerTimeouts) {
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
      accelerator_id: cdktf.stringToTerraform(this._acceleratorId),
      client_affinity: cdktf.stringToTerraform(this._clientAffinity),
      description: cdktf.stringToTerraform(this._description),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      listener_type: cdktf.stringToTerraform(this._listenerType),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_protocol: cdktf.booleanToTerraform(this._proxyProtocol),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      certificates: cdktf.listMapper(gaListenerCertificatesToTerraform, true)(this._certificates.internalValue),
      forwarded_for_config: gaListenerForwardedForConfigToTerraform(this._forwardedForConfig.internalValue),
      port_ranges: cdktf.listMapper(gaListenerPortRangesToTerraform, true)(this._portRanges.internalValue),
      timeouts: gaListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_id: {
        value: cdktf.stringToHclTerraform(this._acceleratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_affinity: {
        value: cdktf.stringToHclTerraform(this._clientAffinity),
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
      http_version: {
        value: cdktf.stringToHclTerraform(this._httpVersion),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_type: {
        value: cdktf.stringToHclTerraform(this._listenerType),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._proxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificates: {
        value: cdktf.listMapperHcl(gaListenerCertificatesToHclTerraform, true)(this._certificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GaListenerCertificatesList",
      },
      forwarded_for_config: {
        value: gaListenerForwardedForConfigToHclTerraform(this._forwardedForConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GaListenerForwardedForConfigList",
      },
      port_ranges: {
        value: cdktf.listMapperHcl(gaListenerPortRangesToHclTerraform, true)(this._portRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GaListenerPortRangesList",
      },
      timeouts: {
        value: gaListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GaListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
