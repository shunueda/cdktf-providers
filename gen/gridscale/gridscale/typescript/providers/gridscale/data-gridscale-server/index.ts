// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGridscaleServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/server#id DataGridscaleServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/server#resource_id DataGridscaleServer#resource_id}
  */
  readonly resourceId: string;
}
export interface DataGridscaleServerHardwareProfileConfig {
}

export function dataGridscaleServerHardwareProfileConfigToTerraform(struct?: DataGridscaleServerHardwareProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleServerHardwareProfileConfigToHclTerraform(struct?: DataGridscaleServerHardwareProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleServerHardwareProfileConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleServerHardwareProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleServerHardwareProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hyperv_extensions - computed: true, optional: false, required: false
  public get hypervExtensions() {
    return this.getBooleanAttribute('hyperv_extensions');
  }

  // machinetype - computed: true, optional: false, required: false
  public get machinetype() {
    return this.getStringAttribute('machinetype');
  }

  // nested_virtualization - computed: true, optional: false, required: false
  public get nestedVirtualization() {
    return this.getBooleanAttribute('nested_virtualization');
  }

  // network_model - computed: true, optional: false, required: false
  public get networkModel() {
    return this.getStringAttribute('network_model');
  }

  // serial_interface - computed: true, optional: false, required: false
  public get serialInterface() {
    return this.getBooleanAttribute('serial_interface');
  }

  // server_renice - computed: true, optional: false, required: false
  public get serverRenice() {
    return this.getBooleanAttribute('server_renice');
  }

  // storage_device - computed: true, optional: false, required: false
  public get storageDevice() {
    return this.getStringAttribute('storage_device');
  }

  // usb_controller - computed: true, optional: false, required: false
  public get usbController() {
    return this.getStringAttribute('usb_controller');
  }
}

export class DataGridscaleServerHardwareProfileConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleServerHardwareProfileConfigOutputReference {
    return new DataGridscaleServerHardwareProfileConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGridscaleServerNetworkRulesV4In {
}

export function dataGridscaleServerNetworkRulesV4InToTerraform(struct?: DataGridscaleServerNetworkRulesV4In): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleServerNetworkRulesV4InToHclTerraform(struct?: DataGridscaleServerNetworkRulesV4In): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleServerNetworkRulesV4InOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleServerNetworkRulesV4In | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleServerNetworkRulesV4In | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // dst_cidr - computed: true, optional: false, required: false
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class DataGridscaleServerNetworkRulesV4InList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleServerNetworkRulesV4InOutputReference {
    return new DataGridscaleServerNetworkRulesV4InOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGridscaleServerNetworkRulesV4Out {
}

export function dataGridscaleServerNetworkRulesV4OutToTerraform(struct?: DataGridscaleServerNetworkRulesV4Out): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleServerNetworkRulesV4OutToHclTerraform(struct?: DataGridscaleServerNetworkRulesV4Out): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleServerNetworkRulesV4OutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleServerNetworkRulesV4Out | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleServerNetworkRulesV4Out | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // dst_cidr - computed: true, optional: false, required: false
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class DataGridscaleServerNetworkRulesV4OutList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleServerNetworkRulesV4OutOutputReference {
    return new DataGridscaleServerNetworkRulesV4OutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGridscaleServerNetworkRulesV6In {
}

export function dataGridscaleServerNetworkRulesV6InToTerraform(struct?: DataGridscaleServerNetworkRulesV6In): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleServerNetworkRulesV6InToHclTerraform(struct?: DataGridscaleServerNetworkRulesV6In): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleServerNetworkRulesV6InOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleServerNetworkRulesV6In | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleServerNetworkRulesV6In | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // dst_cidr - computed: true, optional: false, required: false
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class DataGridscaleServerNetworkRulesV6InList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleServerNetworkRulesV6InOutputReference {
    return new DataGridscaleServerNetworkRulesV6InOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGridscaleServerNetworkRulesV6Out {
}

export function dataGridscaleServerNetworkRulesV6OutToTerraform(struct?: DataGridscaleServerNetworkRulesV6Out): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleServerNetworkRulesV6OutToHclTerraform(struct?: DataGridscaleServerNetworkRulesV6Out): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleServerNetworkRulesV6OutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleServerNetworkRulesV6Out | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleServerNetworkRulesV6Out | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // dst_cidr - computed: true, optional: false, required: false
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // src_cidr - computed: true, optional: false, required: false
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
}

export class DataGridscaleServerNetworkRulesV6OutList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleServerNetworkRulesV6OutOutputReference {
    return new DataGridscaleServerNetworkRulesV6OutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGridscaleServerNetwork {
}

export function dataGridscaleServerNetworkToTerraform(struct?: DataGridscaleServerNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleServerNetworkToHclTerraform(struct?: DataGridscaleServerNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleServerNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleServerNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleServerNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_assigned_ip - computed: true, optional: false, required: false
  public get autoAssignedIp() {
    return this.getStringAttribute('auto_assigned_ip');
  }

  // bootdevice - computed: true, optional: false, required: false
  public get bootdevice() {
    return this.getBooleanAttribute('bootdevice');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // firewall_template_uuid - computed: true, optional: false, required: false
  public get firewallTemplateUuid() {
    return this.getStringAttribute('firewall_template_uuid');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // object_uuid - computed: true, optional: false, required: false
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }

  // ordering - computed: true, optional: false, required: false
  public get ordering() {
    return this.getNumberAttribute('ordering');
  }

  // rules_v4_in - computed: true, optional: false, required: false
  private _rulesV4In = new DataGridscaleServerNetworkRulesV4InList(this, "rules_v4_in", false);
  public get rulesV4In() {
    return this._rulesV4In;
  }

  // rules_v4_out - computed: true, optional: false, required: false
  private _rulesV4Out = new DataGridscaleServerNetworkRulesV4OutList(this, "rules_v4_out", false);
  public get rulesV4Out() {
    return this._rulesV4Out;
  }

  // rules_v6_in - computed: true, optional: false, required: false
  private _rulesV6In = new DataGridscaleServerNetworkRulesV6InList(this, "rules_v6_in", false);
  public get rulesV6In() {
    return this._rulesV6In;
  }

  // rules_v6_out - computed: true, optional: false, required: false
  private _rulesV6Out = new DataGridscaleServerNetworkRulesV6OutList(this, "rules_v6_out", false);
  public get rulesV6Out() {
    return this._rulesV6Out;
  }
}

export class DataGridscaleServerNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleServerNetworkOutputReference {
    return new DataGridscaleServerNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGridscaleServerStorage {
}

export function dataGridscaleServerStorageToTerraform(struct?: DataGridscaleServerStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGridscaleServerStorageToHclTerraform(struct?: DataGridscaleServerStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGridscaleServerStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGridscaleServerStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGridscaleServerStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootdevice - computed: true, optional: false, required: false
  public get bootdevice() {
    return this.getBooleanAttribute('bootdevice');
  }

  // bus - computed: true, optional: false, required: false
  public get bus() {
    return this.getNumberAttribute('bus');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // controller - computed: true, optional: false, required: false
  public get controller() {
    return this.getNumberAttribute('controller');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // last_used_template - computed: true, optional: false, required: false
  public get lastUsedTemplate() {
    return this.getStringAttribute('last_used_template');
  }

  // license_product_no - computed: true, optional: false, required: false
  public get licenseProductNo() {
    return this.getNumberAttribute('license_product_no');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // object_uuid - computed: true, optional: false, required: false
  public get objectUuid() {
    return this.getStringAttribute('object_uuid');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}

export class DataGridscaleServerStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataGridscaleServerStorageOutputReference {
    return new DataGridscaleServerStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/server gridscale_server}
*/
export class DataGridscaleServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGridscaleServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGridscaleServer to import
  * @param importFromId The id of the existing DataGridscaleServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGridscaleServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/data-sources/server gridscale_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGridscaleServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataGridscaleServerConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_server',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
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
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery - computed: true, optional: false, required: false
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // console_token - computed: true, optional: false, required: false
  public get consoleToken() {
    return this.getStringAttribute('console_token');
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_price - computed: true, optional: false, required: false
  public get currentPrice() {
    return this.getNumberAttribute('current_price');
  }

  // hardware_profile - computed: true, optional: false, required: false
  public get hardwareProfile() {
    return this.getStringAttribute('hardware_profile');
  }

  // hardware_profile_config - computed: true, optional: false, required: false
  private _hardwareProfileConfig = new DataGridscaleServerHardwareProfileConfigList(this, "hardware_profile_config", true);
  public get hardwareProfileConfig() {
    return this._hardwareProfileConfig;
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

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // isoimage - computed: true, optional: false, required: false
  public get isoimage() {
    return this.getStringAttribute('isoimage');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // legacy - computed: true, optional: false, required: false
  public get legacy() {
    return this.getBooleanAttribute('legacy');
  }

  // location_uuid - computed: true, optional: false, required: false
  public get locationUuid() {
    return this.getStringAttribute('location_uuid');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataGridscaleServerNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }

  // power - computed: true, optional: false, required: false
  public get power() {
    return this.getBooleanAttribute('power');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataGridscaleServerStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }

  // usage_in_minutes_cores - computed: true, optional: false, required: false
  public get usageInMinutesCores() {
    return this.getNumberAttribute('usage_in_minutes_cores');
  }

  // usage_in_minutes_memory - computed: true, optional: false, required: false
  public get usageInMinutesMemory() {
    return this.getNumberAttribute('usage_in_minutes_memory');
  }

  // user_data_base64 - computed: true, optional: false, required: false
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
