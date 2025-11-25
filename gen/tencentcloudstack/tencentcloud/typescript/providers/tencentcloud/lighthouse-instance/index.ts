// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Lighthouse image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#blueprint_id LighthouseInstance#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * ID of the Lighthouse package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#bundle_id LighthouseInstance#bundle_id}
  */
  readonly bundleId: string;
  /**
  * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idem-potency of the request cannot be guaranteed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#client_token LighthouseInstance#client_token}
  */
  readonly clientToken?: string;
  /**
  * Whether the request is a dry run only.true: dry run only. The request will not create instance(s). A dry run can check whether all the required parameters are specified, whether the request format is right, whether the request exceeds service limits, and whether the specified CVMs are available. If the dry run fails, the corresponding error code will be returned.If the dry run succeeds, the RequestId will be returned.false (default value): send a normal request and create instance(s) if all the requirements are met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#dry_run LighthouseInstance#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Firewall template ID. If this parameter is not specified, the default firewall policy is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#firewall_template_id LighthouseInstance#firewall_template_id}
  */
  readonly firewallTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#id LighthouseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the Lighthouse instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#instance_name LighthouseInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Whether the voucher is deducted automatically when update bundle id. Value range: `true`: indicates automatic deduction of vouchers, `false`: does not automatically deduct vouchers. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#is_update_bundle_id_auto_voucher LighthouseInstance#is_update_bundle_id_auto_voucher}
  */
  readonly isUpdateBundleIdAutoVoucher?: boolean | cdktf.IResolvable;
  /**
  * Whether to return the mounted data disk. `true`: returns both the instance and the mounted data disk; `false`: returns the instance and no longer returns its mounted data disk. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#isolate_data_disk LighthouseInstance#isolate_data_disk}
  */
  readonly isolateDataDisk?: boolean | cdktf.IResolvable;
  /**
  * Subscription period in months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#period LighthouseInstance#period}
  */
  readonly period?: number;
  /**
  * Whether to allow login using the default key pair. `YES`: allow login; `NO`: disable login. Default: `YES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#permit_default_key_pair_login LighthouseInstance#permit_default_key_pair_login}
  */
  readonly permitDefaultKeyPairLogin?: string;
  /**
  * Auto-Renewal flag. Valid values: NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically; NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically. You need to manually renew DISABLE_NOTIFY_AND_AUTO_RENEW: neither notify upon expiration nor renew automatically. Default value: NOTIFY_AND_MANUAL_RENEW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#renew_flag LighthouseInstance#renew_flag}
  */
  readonly renewFlag: string;
  /**
  * List of availability zones. A random AZ is selected by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#zone LighthouseInstance#zone}
  */
  readonly zone?: string;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#containers LighthouseInstance#containers}
  */
  readonly containers?: LighthouseInstanceContainers[] | cdktf.IResolvable;
  /**
  * login_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#login_configuration LighthouseInstance#login_configuration}
  */
  readonly loginConfiguration?: LighthouseInstanceLoginConfiguration;
}
export interface LighthouseInstanceContainersEnvs {
  /**
  * Environment variable key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#key LighthouseInstance#key}
  */
  readonly key: string;
  /**
  * Environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#value LighthouseInstance#value}
  */
  readonly value: string;
}

export function lighthouseInstanceContainersEnvsToTerraform(struct?: LighthouseInstanceContainersEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lighthouseInstanceContainersEnvsToHclTerraform(struct?: LighthouseInstanceContainersEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseInstanceContainersEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseInstanceContainersEnvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseInstanceContainersEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LighthouseInstanceContainersEnvsList extends cdktf.ComplexList {
  public internalValue? : LighthouseInstanceContainersEnvs[] | cdktf.IResolvable

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
  public get(index: number): LighthouseInstanceContainersEnvsOutputReference {
    return new LighthouseInstanceContainersEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LighthouseInstanceContainersPublishPorts {
  /**
  * Container port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#container_port LighthouseInstance#container_port}
  */
  readonly containerPort: number;
  /**
  * Host port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#host_port LighthouseInstance#host_port}
  */
  readonly hostPort: number;
  /**
  * External IP. It defaults to 0.0.0.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#ip LighthouseInstance#ip}
  */
  readonly ip?: string;
  /**
  * The protocol defaults to tcp. Valid values: tcp, udp and sctp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#protocol LighthouseInstance#protocol}
  */
  readonly protocol?: string;
}

export function lighthouseInstanceContainersPublishPortsToTerraform(struct?: LighthouseInstanceContainersPublishPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    ip: cdktf.stringToTerraform(struct!.ip),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function lighthouseInstanceContainersPublishPortsToHclTerraform(struct?: LighthouseInstanceContainersPublishPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseInstanceContainersPublishPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseInstanceContainersPublishPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseInstanceContainersPublishPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._hostPort = undefined;
      this._ip = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._hostPort = value.hostPort;
      this._ip = value.ip;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host_port - computed: false, optional: false, required: true
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
}

export class LighthouseInstanceContainersPublishPortsList extends cdktf.ComplexList {
  public internalValue? : LighthouseInstanceContainersPublishPorts[] | cdktf.IResolvable

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
  public get(index: number): LighthouseInstanceContainersPublishPortsOutputReference {
    return new LighthouseInstanceContainersPublishPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LighthouseInstanceContainersVolumes {
  /**
  * Container path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#container_path LighthouseInstance#container_path}
  */
  readonly containerPath: string;
  /**
  * Host path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#host_path LighthouseInstance#host_path}
  */
  readonly hostPath: string;
}

export function lighthouseInstanceContainersVolumesToTerraform(struct?: LighthouseInstanceContainersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
  }
}


export function lighthouseInstanceContainersVolumesToHclTerraform(struct?: LighthouseInstanceContainersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_path: {
      value: cdktf.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseInstanceContainersVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseInstanceContainersVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseInstanceContainersVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._hostPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._hostPath = value.hostPath;
    }
  }

  // container_path - computed: false, optional: false, required: true
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // host_path - computed: false, optional: false, required: true
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }
}

export class LighthouseInstanceContainersVolumesList extends cdktf.ComplexList {
  public internalValue? : LighthouseInstanceContainersVolumes[] | cdktf.IResolvable

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
  public get(index: number): LighthouseInstanceContainersVolumesOutputReference {
    return new LighthouseInstanceContainersVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LighthouseInstanceContainers {
  /**
  * The command to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#command LighthouseInstance#command}
  */
  readonly command?: string;
  /**
  * Container image address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#container_image LighthouseInstance#container_image}
  */
  readonly containerImage?: string;
  /**
  * Container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#container_name LighthouseInstance#container_name}
  */
  readonly containerName?: string;
  /**
  * envs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#envs LighthouseInstance#envs}
  */
  readonly envs?: LighthouseInstanceContainersEnvs[] | cdktf.IResolvable;
  /**
  * publish_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#publish_ports LighthouseInstance#publish_ports}
  */
  readonly publishPorts?: LighthouseInstanceContainersPublishPorts[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#volumes LighthouseInstance#volumes}
  */
  readonly volumes?: LighthouseInstanceContainersVolumes[] | cdktf.IResolvable;
}

export function lighthouseInstanceContainersToTerraform(struct?: LighthouseInstanceContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    container_image: cdktf.stringToTerraform(struct!.containerImage),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    envs: cdktf.listMapper(lighthouseInstanceContainersEnvsToTerraform, true)(struct!.envs),
    publish_ports: cdktf.listMapper(lighthouseInstanceContainersPublishPortsToTerraform, true)(struct!.publishPorts),
    volumes: cdktf.listMapper(lighthouseInstanceContainersVolumesToTerraform, true)(struct!.volumes),
  }
}


export function lighthouseInstanceContainersToHclTerraform(struct?: LighthouseInstanceContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_image: {
      value: cdktf.stringToHclTerraform(struct!.containerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envs: {
      value: cdktf.listMapperHcl(lighthouseInstanceContainersEnvsToHclTerraform, true)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "LighthouseInstanceContainersEnvsList",
    },
    publish_ports: {
      value: cdktf.listMapperHcl(lighthouseInstanceContainersPublishPortsToHclTerraform, true)(struct!.publishPorts),
      isBlock: true,
      type: "list",
      storageClassType: "LighthouseInstanceContainersPublishPortsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(lighthouseInstanceContainersVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "LighthouseInstanceContainersVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseInstanceContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseInstanceContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._containerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._publishPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishPorts = this._publishPorts?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseInstanceContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._containerImage = undefined;
      this._containerName = undefined;
      this._envs.internalValue = undefined;
      this._publishPorts.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._containerImage = value.containerImage;
      this._containerName = value.containerName;
      this._envs.internalValue = value.envs;
      this._publishPorts.internalValue = value.publishPorts;
      this._volumes.internalValue = value.volumes;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: string; 
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }
  public set containerImage(value: string) {
    this._containerImage = value;
  }
  public resetContainerImage() {
    this._containerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage;
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new LighthouseInstanceContainersEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: LighthouseInstanceContainersEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // publish_ports - computed: false, optional: true, required: false
  private _publishPorts = new LighthouseInstanceContainersPublishPortsList(this, "publish_ports", false);
  public get publishPorts() {
    return this._publishPorts;
  }
  public putPublishPorts(value: LighthouseInstanceContainersPublishPorts[] | cdktf.IResolvable) {
    this._publishPorts.internalValue = value;
  }
  public resetPublishPorts() {
    this._publishPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishPortsInput() {
    return this._publishPorts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new LighthouseInstanceContainersVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: LighthouseInstanceContainersVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class LighthouseInstanceContainersList extends cdktf.ComplexList {
  public internalValue? : LighthouseInstanceContainers[] | cdktf.IResolvable

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
  public get(index: number): LighthouseInstanceContainersOutputReference {
    return new LighthouseInstanceContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LighthouseInstanceLoginConfiguration {
  /**
  * whether auto generate password. if false, need set password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#auto_generate_password LighthouseInstance#auto_generate_password}
  */
  readonly autoGeneratePassword: string;
  /**
  * Login password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#password LighthouseInstance#password}
  */
  readonly password?: string;
}

export function lighthouseInstanceLoginConfigurationToTerraform(struct?: LighthouseInstanceLoginConfigurationOutputReference | LighthouseInstanceLoginConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_generate_password: cdktf.stringToTerraform(struct!.autoGeneratePassword),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function lighthouseInstanceLoginConfigurationToHclTerraform(struct?: LighthouseInstanceLoginConfigurationOutputReference | LighthouseInstanceLoginConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_generate_password: {
      value: cdktf.stringToHclTerraform(struct!.autoGeneratePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseInstanceLoginConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LighthouseInstanceLoginConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGeneratePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGeneratePassword = this._autoGeneratePassword;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseInstanceLoginConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoGeneratePassword = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoGeneratePassword = value.autoGeneratePassword;
      this._password = value.password;
    }
  }

  // auto_generate_password - computed: false, optional: false, required: true
  private _autoGeneratePassword?: string; 
  public get autoGeneratePassword() {
    return this.getStringAttribute('auto_generate_password');
  }
  public set autoGeneratePassword(value: string) {
    this._autoGeneratePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGeneratePasswordInput() {
    return this._autoGeneratePassword;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance tencentcloud_lighthouse_instance}
*/
export class LighthouseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lighthouse_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LighthouseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LighthouseInstance to import
  * @param importFromId The id of the existing LighthouseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LighthouseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lighthouse_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/lighthouse_instance tencentcloud_lighthouse_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lighthouse_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._bundleId = config.bundleId;
    this._clientToken = config.clientToken;
    this._dryRun = config.dryRun;
    this._firewallTemplateId = config.firewallTemplateId;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._isUpdateBundleIdAutoVoucher = config.isUpdateBundleIdAutoVoucher;
    this._isolateDataDisk = config.isolateDataDisk;
    this._period = config.period;
    this._permitDefaultKeyPairLogin = config.permitDefaultKeyPairLogin;
    this._renewFlag = config.renewFlag;
    this._zone = config.zone;
    this._containers.internalValue = config.containers;
    this._loginConfiguration.internalValue = config.loginConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // client_token - computed: false, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // firewall_template_id - computed: true, optional: true, required: false
  private _firewallTemplateId?: string; 
  public get firewallTemplateId() {
    return this.getStringAttribute('firewall_template_id');
  }
  public set firewallTemplateId(value: string) {
    this._firewallTemplateId = value;
  }
  public resetFirewallTemplateId() {
    this._firewallTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTemplateIdInput() {
    return this._firewallTemplateId;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // is_update_bundle_id_auto_voucher - computed: false, optional: true, required: false
  private _isUpdateBundleIdAutoVoucher?: boolean | cdktf.IResolvable; 
  public get isUpdateBundleIdAutoVoucher() {
    return this.getBooleanAttribute('is_update_bundle_id_auto_voucher');
  }
  public set isUpdateBundleIdAutoVoucher(value: boolean | cdktf.IResolvable) {
    this._isUpdateBundleIdAutoVoucher = value;
  }
  public resetIsUpdateBundleIdAutoVoucher() {
    this._isUpdateBundleIdAutoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateBundleIdAutoVoucherInput() {
    return this._isUpdateBundleIdAutoVoucher;
  }

  // isolate_data_disk - computed: false, optional: true, required: false
  private _isolateDataDisk?: boolean | cdktf.IResolvable; 
  public get isolateDataDisk() {
    return this.getBooleanAttribute('isolate_data_disk');
  }
  public set isolateDataDisk(value: boolean | cdktf.IResolvable) {
    this._isolateDataDisk = value;
  }
  public resetIsolateDataDisk() {
    this._isolateDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateDataDiskInput() {
    return this._isolateDataDisk;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // permit_default_key_pair_login - computed: true, optional: true, required: false
  private _permitDefaultKeyPairLogin?: string; 
  public get permitDefaultKeyPairLogin() {
    return this.getStringAttribute('permit_default_key_pair_login');
  }
  public set permitDefaultKeyPairLogin(value: string) {
    this._permitDefaultKeyPairLogin = value;
  }
  public resetPermitDefaultKeyPairLogin() {
    this._permitDefaultKeyPairLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDefaultKeyPairLoginInput() {
    return this._permitDefaultKeyPairLogin;
  }

  // private_addresses - computed: true, optional: false, required: false
  public get privateAddresses() {
    return this.getListAttribute('private_addresses');
  }

  // public_addresses - computed: true, optional: false, required: false
  public get publicAddresses() {
    return this.getListAttribute('public_addresses');
  }

  // renew_flag - computed: false, optional: false, required: true
  private _renewFlag?: string; 
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
  public set renewFlag(value: string) {
    this._renewFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new LighthouseInstanceContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: LighthouseInstanceContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // login_configuration - computed: false, optional: true, required: false
  private _loginConfiguration = new LighthouseInstanceLoginConfigurationOutputReference(this, "login_configuration");
  public get loginConfiguration() {
    return this._loginConfiguration;
  }
  public putLoginConfiguration(value: LighthouseInstanceLoginConfiguration) {
    this._loginConfiguration.internalValue = value;
  }
  public resetLoginConfiguration() {
    this._loginConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginConfigurationInput() {
    return this._loginConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      client_token: cdktf.stringToTerraform(this._clientToken),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      firewall_template_id: cdktf.stringToTerraform(this._firewallTemplateId),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      is_update_bundle_id_auto_voucher: cdktf.booleanToTerraform(this._isUpdateBundleIdAutoVoucher),
      isolate_data_disk: cdktf.booleanToTerraform(this._isolateDataDisk),
      period: cdktf.numberToTerraform(this._period),
      permit_default_key_pair_login: cdktf.stringToTerraform(this._permitDefaultKeyPairLogin),
      renew_flag: cdktf.stringToTerraform(this._renewFlag),
      zone: cdktf.stringToTerraform(this._zone),
      containers: cdktf.listMapper(lighthouseInstanceContainersToTerraform, true)(this._containers.internalValue),
      login_configuration: lighthouseInstanceLoginConfigurationToTerraform(this._loginConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_token: {
        value: cdktf.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_template_id: {
        value: cdktf.stringToHclTerraform(this._firewallTemplateId),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_update_bundle_id_auto_voucher: {
        value: cdktf.booleanToHclTerraform(this._isUpdateBundleIdAutoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      isolate_data_disk: {
        value: cdktf.booleanToHclTerraform(this._isolateDataDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permit_default_key_pair_login: {
        value: cdktf.stringToHclTerraform(this._permitDefaultKeyPairLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_flag: {
        value: cdktf.stringToHclTerraform(this._renewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      containers: {
        value: cdktf.listMapperHcl(lighthouseInstanceContainersToHclTerraform, true)(this._containers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LighthouseInstanceContainersList",
      },
      login_configuration: {
        value: lighthouseInstanceLoginConfigurationToHclTerraform(this._loginConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LighthouseInstanceLoginConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
