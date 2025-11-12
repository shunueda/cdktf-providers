// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QosDeviceInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#id QosDeviceInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#parameters QosDeviceInterface#parameters}
  */
  readonly parameters?: QosDeviceInterfaceParameters[] | cdktf.IResolvable;
}
export interface QosDeviceInterfaceItemQosDeviceInterfaceInfo {
}

export function qosDeviceInterfaceItemQosDeviceInterfaceInfoToTerraform(struct?: QosDeviceInterfaceItemQosDeviceInterfaceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function qosDeviceInterfaceItemQosDeviceInterfaceInfoToHclTerraform(struct?: QosDeviceInterfaceItemQosDeviceInterfaceInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QosDeviceInterfaceItemQosDeviceInterfaceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosDeviceInterfaceItemQosDeviceInterfaceInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosDeviceInterfaceItemQosDeviceInterfaceInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dmvpn_remote_sites_bw - computed: true, optional: false, required: false
  public get dmvpnRemoteSitesBw() {
    return this.getNumberListAttribute('dmvpn_remote_sites_bw');
  }

  // download_bw - computed: true, optional: false, required: false
  public get downloadBw() {
    return this.getNumberAttribute('download_bw');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getNumberAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getNumberAttribute('instance_updated_on');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // interface_id - computed: true, optional: false, required: false
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // upload_bw - computed: true, optional: false, required: false
  public get uploadBw() {
    return this.getNumberAttribute('upload_bw');
  }
}

export class QosDeviceInterfaceItemQosDeviceInterfaceInfoList extends cdktf.ComplexList {

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
  public get(index: number): QosDeviceInterfaceItemQosDeviceInterfaceInfoOutputReference {
    return new QosDeviceInterfaceItemQosDeviceInterfaceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QosDeviceInterfaceItem {
}

export function qosDeviceInterfaceItemToTerraform(struct?: QosDeviceInterfaceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function qosDeviceInterfaceItemToHclTerraform(struct?: QosDeviceInterfaceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QosDeviceInterfaceItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosDeviceInterfaceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosDeviceInterfaceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cfs_change_info - computed: true, optional: false, required: false
  public get cfsChangeInfo() {
    return this.getListAttribute('cfs_change_info');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // custom_provisions - computed: true, optional: false, required: false
  public get customProvisions() {
    return this.getListAttribute('custom_provisions');
  }

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getStringAttribute('deployed');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // excluded_interfaces - computed: true, optional: false, required: false
  public get excludedInterfaces() {
    return this.getListAttribute('excluded_interfaces');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getNumberAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getNumberAttribute('instance_updated_on');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // is_excluded - computed: true, optional: false, required: false
  public get isExcluded() {
    return this.getStringAttribute('is_excluded');
  }

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getStringAttribute('is_seeded');
  }

  // is_stale - computed: true, optional: false, required: false
  public get isStale() {
    return this.getStringAttribute('is_stale');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // network_device_id - computed: true, optional: false, required: false
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }

  // qos_device_interface_info - computed: true, optional: false, required: false
  private _qosDeviceInterfaceInfo = new QosDeviceInterfaceItemQosDeviceInterfaceInfoList(this, "qos_device_interface_info", false);
  public get qosDeviceInterfaceInfo() {
    return this._qosDeviceInterfaceInfo;
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getNumberAttribute('resource_version');
  }

  // target_id_list - computed: true, optional: false, required: false
  public get targetIdList() {
    return this.getListAttribute('target_id_list');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class QosDeviceInterfaceItemList extends cdktf.ComplexList {

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
  public get(index: number): QosDeviceInterfaceItemOutputReference {
    return new QosDeviceInterfaceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo {
  /**
  * Dmvpn remote sites bandwidth
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#dmvpn_remote_sites_bw QosDeviceInterface#dmvpn_remote_sites_bw}
  */
  readonly dmvpnRemoteSitesBw?: number[];
  /**
  * Instance id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#instance_id QosDeviceInterface#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Interface id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#interface_id QosDeviceInterface#interface_id}
  */
  readonly interfaceId?: string;
  /**
  * Interface name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#interface_name QosDeviceInterface#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * SP Profile name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#label QosDeviceInterface#label}
  */
  readonly label?: string;
  /**
  * Interface role
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#role QosDeviceInterface#role}
  */
  readonly role?: string;
  /**
  * Upload bandwidth
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#upload_bw QosDeviceInterface#upload_bw}
  */
  readonly uploadBw?: number;
}

export function qosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoToTerraform(struct?: QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dmvpn_remote_sites_bw: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dmvpnRemoteSitesBw),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    interface_id: cdktf.stringToTerraform(struct!.interfaceId),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    label: cdktf.stringToTerraform(struct!.label),
    role: cdktf.stringToTerraform(struct!.role),
    upload_bw: cdktf.numberToTerraform(struct!.uploadBw),
  }
}


export function qosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoToHclTerraform(struct?: QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dmvpn_remote_sites_bw: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dmvpnRemoteSitesBw),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_id: {
      value: cdktf.stringToHclTerraform(struct!.interfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_bw: {
      value: cdktf.numberToHclTerraform(struct!.uploadBw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dmvpnRemoteSitesBw !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmvpnRemoteSitesBw = this._dmvpnRemoteSitesBw;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._interfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceId = this._interfaceId;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._uploadBw !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadBw = this._uploadBw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dmvpnRemoteSitesBw = undefined;
      this._instanceId = undefined;
      this._interfaceId = undefined;
      this._interfaceName = undefined;
      this._label = undefined;
      this._role = undefined;
      this._uploadBw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dmvpnRemoteSitesBw = value.dmvpnRemoteSitesBw;
      this._instanceId = value.instanceId;
      this._interfaceId = value.interfaceId;
      this._interfaceName = value.interfaceName;
      this._label = value.label;
      this._role = value.role;
      this._uploadBw = value.uploadBw;
    }
  }

  // dmvpn_remote_sites_bw - computed: true, optional: true, required: false
  private _dmvpnRemoteSitesBw?: number[]; 
  public get dmvpnRemoteSitesBw() {
    return this.getNumberListAttribute('dmvpn_remote_sites_bw');
  }
  public set dmvpnRemoteSitesBw(value: number[]) {
    this._dmvpnRemoteSitesBw = value;
  }
  public resetDmvpnRemoteSitesBw() {
    this._dmvpnRemoteSitesBw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmvpnRemoteSitesBwInput() {
    return this._dmvpnRemoteSitesBw;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // interface_id - computed: true, optional: true, required: false
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  public resetInterfaceId() {
    this._interfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // upload_bw - computed: true, optional: true, required: false
  private _uploadBw?: number; 
  public get uploadBw() {
    return this.getNumberAttribute('upload_bw');
  }
  public set uploadBw(value: number) {
    this._uploadBw = value;
  }
  public resetUploadBw() {
    this._uploadBw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadBwInput() {
    return this._uploadBw;
  }
}

export class QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoList extends cdktf.ComplexList {
  public internalValue? : QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo[] | cdktf.IResolvable

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
  public get(index: number): QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoOutputReference {
    return new QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QosDeviceInterfaceParametersParameters {
  /**
  * Excluded interfaces ids
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#excluded_interfaces QosDeviceInterface#excluded_interfaces}
  */
  readonly excludedInterfaces?: string[];
  /**
  * Id of Qos device info
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#id QosDeviceInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Device name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#name QosDeviceInterface#name}
  */
  readonly name?: string;
  /**
  * Network device id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#network_device_id QosDeviceInterface#network_device_id}
  */
  readonly networkDeviceId?: string;
  /**
  * qos_device_interface_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#qos_device_interface_info QosDeviceInterface#qos_device_interface_info}
  */
  readonly qosDeviceInterfaceInfo?: QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo[] | cdktf.IResolvable;
}

export function qosDeviceInterfaceParametersParametersToTerraform(struct?: QosDeviceInterfaceParametersParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedInterfaces),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network_device_id: cdktf.stringToTerraform(struct!.networkDeviceId),
    qos_device_interface_info: cdktf.listMapper(qosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoToTerraform, true)(struct!.qosDeviceInterfaceInfo),
  }
}


export function qosDeviceInterfaceParametersParametersToHclTerraform(struct?: QosDeviceInterfaceParametersParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_device_id: {
      value: cdktf.stringToHclTerraform(struct!.networkDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_device_interface_info: {
      value: cdktf.listMapperHcl(qosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoToHclTerraform, true)(struct!.qosDeviceInterfaceInfo),
      isBlock: true,
      type: "list",
      storageClassType: "QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosDeviceInterfaceParametersParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosDeviceInterfaceParametersParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedInterfaces = this._excludedInterfaces;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDeviceId = this._networkDeviceId;
    }
    if (this._qosDeviceInterfaceInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosDeviceInterfaceInfo = this._qosDeviceInterfaceInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosDeviceInterfaceParametersParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedInterfaces = undefined;
      this._id = undefined;
      this._name = undefined;
      this._networkDeviceId = undefined;
      this._qosDeviceInterfaceInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedInterfaces = value.excludedInterfaces;
      this._id = value.id;
      this._name = value.name;
      this._networkDeviceId = value.networkDeviceId;
      this._qosDeviceInterfaceInfo.internalValue = value.qosDeviceInterfaceInfo;
    }
  }

  // excluded_interfaces - computed: true, optional: true, required: false
  private _excludedInterfaces?: string[]; 
  public get excludedInterfaces() {
    return this.getListAttribute('excluded_interfaces');
  }
  public set excludedInterfaces(value: string[]) {
    this._excludedInterfaces = value;
  }
  public resetExcludedInterfaces() {
    this._excludedInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInterfacesInput() {
    return this._excludedInterfaces;
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

  // name - computed: true, optional: true, required: false
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

  // network_device_id - computed: true, optional: true, required: false
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  public resetNetworkDeviceId() {
    this._networkDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // qos_device_interface_info - computed: false, optional: true, required: false
  private _qosDeviceInterfaceInfo = new QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfoList(this, "qos_device_interface_info", false);
  public get qosDeviceInterfaceInfo() {
    return this._qosDeviceInterfaceInfo;
  }
  public putQosDeviceInterfaceInfo(value: QosDeviceInterfaceParametersParametersQosDeviceInterfaceInfo[] | cdktf.IResolvable) {
    this._qosDeviceInterfaceInfo.internalValue = value;
  }
  public resetQosDeviceInterfaceInfo() {
    this._qosDeviceInterfaceInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosDeviceInterfaceInfoInput() {
    return this._qosDeviceInterfaceInfo.internalValue;
  }
}

export class QosDeviceInterfaceParametersParametersList extends cdktf.ComplexList {
  public internalValue? : QosDeviceInterfaceParametersParameters[] | cdktf.IResolvable

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
  public get(index: number): QosDeviceInterfaceParametersParametersOutputReference {
    return new QosDeviceInterfaceParametersParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QosDeviceInterfaceParameters {
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#parameters QosDeviceInterface#parameters}
  */
  readonly parameters?: QosDeviceInterfaceParametersParameters[] | cdktf.IResolvable;
}

export function qosDeviceInterfaceParametersToTerraform(struct?: QosDeviceInterfaceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(qosDeviceInterfaceParametersParametersToTerraform, true)(struct!.parameters),
  }
}


export function qosDeviceInterfaceParametersToHclTerraform(struct?: QosDeviceInterfaceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(qosDeviceInterfaceParametersParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "QosDeviceInterfaceParametersParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosDeviceInterfaceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosDeviceInterfaceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosDeviceInterfaceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new QosDeviceInterfaceParametersParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: QosDeviceInterfaceParametersParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class QosDeviceInterfaceParametersList extends cdktf.ComplexList {
  public internalValue? : QosDeviceInterfaceParameters[] | cdktf.IResolvable

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
  public get(index: number): QosDeviceInterfaceParametersOutputReference {
    return new QosDeviceInterfaceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface dnacenter_qos_device_interface}
*/
export class QosDeviceInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_qos_device_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QosDeviceInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QosDeviceInterface to import
  * @param importFromId The id of the existing QosDeviceInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QosDeviceInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_qos_device_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/qos_device_interface dnacenter_qos_device_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QosDeviceInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QosDeviceInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_qos_device_interface',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new QosDeviceInterfaceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new QosDeviceInterfaceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: QosDeviceInterfaceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(qosDeviceInterfaceParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(qosDeviceInterfaceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QosDeviceInterfaceParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
