// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDcnmVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#advertise_default_route DataDcnmVrf#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#advertise_host_route DataDcnmVrf#advertise_host_route}
  */
  readonly advertiseHostRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#deploy DataDcnmVrf#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#description DataDcnmVrf#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#extension_template DataDcnmVrf#extension_template}
  */
  readonly extensionTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#fabric_name DataDcnmVrf#fabric_name}
  */
  readonly fabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#id DataDcnmVrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#intf_description DataDcnmVrf#intf_description}
  */
  readonly intfDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#ipv6_link_local_flag DataDcnmVrf#ipv6_link_local_flag}
  */
  readonly ipv6LinkLocalFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#loopback_id DataDcnmVrf#loopback_id}
  */
  readonly loopbackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#max_bgp_path DataDcnmVrf#max_bgp_path}
  */
  readonly maxBgpPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#max_ibgp_path DataDcnmVrf#max_ibgp_path}
  */
  readonly maxIbgpPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#mtu DataDcnmVrf#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#mutlicast_address DataDcnmVrf#mutlicast_address}
  */
  readonly mutlicastAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#mutlicast_group DataDcnmVrf#mutlicast_group}
  */
  readonly mutlicastGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#name DataDcnmVrf#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#rp_address DataDcnmVrf#rp_address}
  */
  readonly rpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#rp_external_flag DataDcnmVrf#rp_external_flag}
  */
  readonly rpExternalFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#segment_id DataDcnmVrf#segment_id}
  */
  readonly segmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#service_template DataDcnmVrf#service_template}
  */
  readonly serviceTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#source DataDcnmVrf#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#static_default_route DataDcnmVrf#static_default_route}
  */
  readonly staticDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#tag DataDcnmVrf#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#template DataDcnmVrf#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#trm_bgw_msite_flag DataDcnmVrf#trm_bgw_msite_flag}
  */
  readonly trmBgwMsiteFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#trm_enable DataDcnmVrf#trm_enable}
  */
  readonly trmEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#vlan_id DataDcnmVrf#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#vlan_name DataDcnmVrf#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#attachments DataDcnmVrf#attachments}
  */
  readonly attachments?: DataDcnmVrfAttachments[] | cdktf.IResolvable;
}
export interface DataDcnmVrfAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#attach DataDcnmVrf#attach}
  */
  readonly attach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#serial_number DataDcnmVrf#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#vlan_id DataDcnmVrf#vlan_id}
  */
  readonly vlanId?: number;
}

export function dataDcnmVrfAttachmentsToTerraform(struct?: DataDcnmVrfAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach: cdktf.booleanToTerraform(struct!.attach),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function dataDcnmVrfAttachmentsToHclTerraform(struct?: DataDcnmVrfAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach: {
      value: cdktf.booleanToHclTerraform(struct!.attach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDcnmVrfAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDcnmVrfAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attach !== undefined) {
      hasAnyValues = true;
      internalValueResult.attach = this._attach;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDcnmVrfAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attach = undefined;
      this._serialNumber = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attach = value.attach;
      this._serialNumber = value.serialNumber;
      this._vlanId = value.vlanId;
    }
  }

  // attach - computed: true, optional: true, required: false
  private _attach?: boolean | cdktf.IResolvable; 
  public get attach() {
    return this.getBooleanAttribute('attach');
  }
  public set attach(value: boolean | cdktf.IResolvable) {
    this._attach = value;
  }
  public resetAttach() {
    this._attach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInput() {
    return this._attach;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class DataDcnmVrfAttachmentsList extends cdktf.ComplexList {
  public internalValue? : DataDcnmVrfAttachments[] | cdktf.IResolvable

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
  public get(index: number): DataDcnmVrfAttachmentsOutputReference {
    return new DataDcnmVrfAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf dcnm_vrf}
*/
export class DataDcnmVrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDcnmVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDcnmVrf to import
  * @param importFromId The id of the existing DataDcnmVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDcnmVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/vrf dcnm_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDcnmVrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataDcnmVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_vrf',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7',
        providerVersionConstraint: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseDefaultRoute = config.advertiseDefaultRoute;
    this._advertiseHostRoute = config.advertiseHostRoute;
    this._deploy = config.deploy;
    this._description = config.description;
    this._extensionTemplate = config.extensionTemplate;
    this._fabricName = config.fabricName;
    this._id = config.id;
    this._intfDescription = config.intfDescription;
    this._ipv6LinkLocalFlag = config.ipv6LinkLocalFlag;
    this._loopbackId = config.loopbackId;
    this._maxBgpPath = config.maxBgpPath;
    this._maxIbgpPath = config.maxIbgpPath;
    this._mtu = config.mtu;
    this._mutlicastAddress = config.mutlicastAddress;
    this._mutlicastGroup = config.mutlicastGroup;
    this._name = config.name;
    this._rpAddress = config.rpAddress;
    this._rpExternalFlag = config.rpExternalFlag;
    this._segmentId = config.segmentId;
    this._serviceTemplate = config.serviceTemplate;
    this._source = config.source;
    this._staticDefaultRoute = config.staticDefaultRoute;
    this._tag = config.tag;
    this._template = config.template;
    this._trmBgwMsiteFlag = config.trmBgwMsiteFlag;
    this._trmEnable = config.trmEnable;
    this._vlanId = config.vlanId;
    this._vlanName = config.vlanName;
    this._attachments.internalValue = config.attachments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_default_route - computed: true, optional: true, required: false
  private _advertiseDefaultRoute?: string; 
  public get advertiseDefaultRoute() {
    return this.getStringAttribute('advertise_default_route');
  }
  public set advertiseDefaultRoute(value: string) {
    this._advertiseDefaultRoute = value;
  }
  public resetAdvertiseDefaultRoute() {
    this._advertiseDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDefaultRouteInput() {
    return this._advertiseDefaultRoute;
  }

  // advertise_host_route - computed: true, optional: true, required: false
  private _advertiseHostRoute?: string; 
  public get advertiseHostRoute() {
    return this.getStringAttribute('advertise_host_route');
  }
  public set advertiseHostRoute(value: string) {
    this._advertiseHostRoute = value;
  }
  public resetAdvertiseHostRoute() {
    this._advertiseHostRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseHostRouteInput() {
    return this._advertiseHostRoute;
  }

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
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

  // extension_template - computed: true, optional: true, required: false
  private _extensionTemplate?: string; 
  public get extensionTemplate() {
    return this.getStringAttribute('extension_template');
  }
  public set extensionTemplate(value: string) {
    this._extensionTemplate = value;
  }
  public resetExtensionTemplate() {
    this._extensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTemplateInput() {
    return this._extensionTemplate;
  }

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
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

  // intf_description - computed: true, optional: true, required: false
  private _intfDescription?: string; 
  public get intfDescription() {
    return this.getStringAttribute('intf_description');
  }
  public set intfDescription(value: string) {
    this._intfDescription = value;
  }
  public resetIntfDescription() {
    this._intfDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfDescriptionInput() {
    return this._intfDescription;
  }

  // ipv6_link_local_flag - computed: true, optional: true, required: false
  private _ipv6LinkLocalFlag?: string; 
  public get ipv6LinkLocalFlag() {
    return this.getStringAttribute('ipv6_link_local_flag');
  }
  public set ipv6LinkLocalFlag(value: string) {
    this._ipv6LinkLocalFlag = value;
  }
  public resetIpv6LinkLocalFlag() {
    this._ipv6LinkLocalFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalFlagInput() {
    return this._ipv6LinkLocalFlag;
  }

  // loopback_id - computed: true, optional: true, required: false
  private _loopbackId?: number; 
  public get loopbackId() {
    return this.getNumberAttribute('loopback_id');
  }
  public set loopbackId(value: number) {
    this._loopbackId = value;
  }
  public resetLoopbackId() {
    this._loopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIdInput() {
    return this._loopbackId;
  }

  // max_bgp_path - computed: true, optional: true, required: false
  private _maxBgpPath?: number; 
  public get maxBgpPath() {
    return this.getNumberAttribute('max_bgp_path');
  }
  public set maxBgpPath(value: number) {
    this._maxBgpPath = value;
  }
  public resetMaxBgpPath() {
    this._maxBgpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBgpPathInput() {
    return this._maxBgpPath;
  }

  // max_ibgp_path - computed: true, optional: true, required: false
  private _maxIbgpPath?: number; 
  public get maxIbgpPath() {
    return this.getNumberAttribute('max_ibgp_path');
  }
  public set maxIbgpPath(value: number) {
    this._maxIbgpPath = value;
  }
  public resetMaxIbgpPath() {
    this._maxIbgpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIbgpPathInput() {
    return this._maxIbgpPath;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mutlicast_address - computed: true, optional: true, required: false
  private _mutlicastAddress?: string; 
  public get mutlicastAddress() {
    return this.getStringAttribute('mutlicast_address');
  }
  public set mutlicastAddress(value: string) {
    this._mutlicastAddress = value;
  }
  public resetMutlicastAddress() {
    this._mutlicastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutlicastAddressInput() {
    return this._mutlicastAddress;
  }

  // mutlicast_group - computed: true, optional: true, required: false
  private _mutlicastGroup?: string; 
  public get mutlicastGroup() {
    return this.getStringAttribute('mutlicast_group');
  }
  public set mutlicastGroup(value: string) {
    this._mutlicastGroup = value;
  }
  public resetMutlicastGroup() {
    this._mutlicastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutlicastGroupInput() {
    return this._mutlicastGroup;
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

  // rp_address - computed: true, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }

  // rp_external_flag - computed: true, optional: true, required: false
  private _rpExternalFlag?: string; 
  public get rpExternalFlag() {
    return this.getStringAttribute('rp_external_flag');
  }
  public set rpExternalFlag(value: string) {
    this._rpExternalFlag = value;
  }
  public resetRpExternalFlag() {
    this._rpExternalFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpExternalFlagInput() {
    return this._rpExternalFlag;
  }

  // segment_id - computed: true, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // service_template - computed: true, optional: true, required: false
  private _serviceTemplate?: string; 
  public get serviceTemplate() {
    return this.getStringAttribute('service_template');
  }
  public set serviceTemplate(value: string) {
    this._serviceTemplate = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // static_default_route - computed: true, optional: true, required: false
  private _staticDefaultRoute?: string; 
  public get staticDefaultRoute() {
    return this.getStringAttribute('static_default_route');
  }
  public set staticDefaultRoute(value: string) {
    this._staticDefaultRoute = value;
  }
  public resetStaticDefaultRoute() {
    this._staticDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDefaultRouteInput() {
    return this._staticDefaultRoute;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // trm_bgw_msite_flag - computed: true, optional: true, required: false
  private _trmBgwMsiteFlag?: string; 
  public get trmBgwMsiteFlag() {
    return this.getStringAttribute('trm_bgw_msite_flag');
  }
  public set trmBgwMsiteFlag(value: string) {
    this._trmBgwMsiteFlag = value;
  }
  public resetTrmBgwMsiteFlag() {
    this._trmBgwMsiteFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmBgwMsiteFlagInput() {
    return this._trmBgwMsiteFlag;
  }

  // trm_enable - computed: true, optional: true, required: false
  private _trmEnable?: string; 
  public get trmEnable() {
    return this.getStringAttribute('trm_enable');
  }
  public set trmEnable(value: string) {
    this._trmEnable = value;
  }
  public resetTrmEnable() {
    this._trmEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmEnableInput() {
    return this._trmEnable;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_name - computed: true, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new DataDcnmVrfAttachmentsList(this, "attachments", true);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: DataDcnmVrfAttachments[] | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_default_route: cdktf.stringToTerraform(this._advertiseDefaultRoute),
      advertise_host_route: cdktf.stringToTerraform(this._advertiseHostRoute),
      deploy: cdktf.booleanToTerraform(this._deploy),
      description: cdktf.stringToTerraform(this._description),
      extension_template: cdktf.stringToTerraform(this._extensionTemplate),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      id: cdktf.stringToTerraform(this._id),
      intf_description: cdktf.stringToTerraform(this._intfDescription),
      ipv6_link_local_flag: cdktf.stringToTerraform(this._ipv6LinkLocalFlag),
      loopback_id: cdktf.numberToTerraform(this._loopbackId),
      max_bgp_path: cdktf.numberToTerraform(this._maxBgpPath),
      max_ibgp_path: cdktf.numberToTerraform(this._maxIbgpPath),
      mtu: cdktf.numberToTerraform(this._mtu),
      mutlicast_address: cdktf.stringToTerraform(this._mutlicastAddress),
      mutlicast_group: cdktf.stringToTerraform(this._mutlicastGroup),
      name: cdktf.stringToTerraform(this._name),
      rp_address: cdktf.stringToTerraform(this._rpAddress),
      rp_external_flag: cdktf.stringToTerraform(this._rpExternalFlag),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      service_template: cdktf.stringToTerraform(this._serviceTemplate),
      source: cdktf.stringToTerraform(this._source),
      static_default_route: cdktf.stringToTerraform(this._staticDefaultRoute),
      tag: cdktf.stringToTerraform(this._tag),
      template: cdktf.stringToTerraform(this._template),
      trm_bgw_msite_flag: cdktf.stringToTerraform(this._trmBgwMsiteFlag),
      trm_enable: cdktf.stringToTerraform(this._trmEnable),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_name: cdktf.stringToTerraform(this._vlanName),
      attachments: cdktf.listMapper(dataDcnmVrfAttachmentsToTerraform, true)(this._attachments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_default_route: {
        value: cdktf.stringToHclTerraform(this._advertiseDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_host_route: {
        value: cdktf.stringToHclTerraform(this._advertiseHostRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_template: {
        value: cdktf.stringToHclTerraform(this._extensionTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
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
      intf_description: {
        value: cdktf.stringToHclTerraform(this._intfDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_link_local_flag: {
        value: cdktf.stringToHclTerraform(this._ipv6LinkLocalFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_id: {
        value: cdktf.numberToHclTerraform(this._loopbackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_bgp_path: {
        value: cdktf.numberToHclTerraform(this._maxBgpPath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ibgp_path: {
        value: cdktf.numberToHclTerraform(this._maxIbgpPath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mutlicast_address: {
        value: cdktf.stringToHclTerraform(this._mutlicastAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mutlicast_group: {
        value: cdktf.stringToHclTerraform(this._mutlicastGroup),
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
      rp_address: {
        value: cdktf.stringToHclTerraform(this._rpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_external_flag: {
        value: cdktf.stringToHclTerraform(this._rpExternalFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_template: {
        value: cdktf.stringToHclTerraform(this._serviceTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_default_route: {
        value: cdktf.stringToHclTerraform(this._staticDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trm_bgw_msite_flag: {
        value: cdktf.stringToHclTerraform(this._trmBgwMsiteFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trm_enable: {
        value: cdktf.stringToHclTerraform(this._trmEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_name: {
        value: cdktf.stringToHclTerraform(this._vlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachments: {
        value: cdktf.listMapperHcl(dataDcnmVrfAttachmentsToHclTerraform, true)(this._attachments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataDcnmVrfAttachmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
