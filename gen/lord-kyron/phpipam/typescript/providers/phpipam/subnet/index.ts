// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#allow_ip_requests Subnet#allow_ip_requests}
  */
  readonly allowIpRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#create_ptr_records Subnet#create_ptr_records}
  */
  readonly createPtrRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#custom_fields Subnet#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#description Subnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#display_hostnames Subnet#display_hostnames}
  */
  readonly displayHostnames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#host_discovery_enabled Subnet#host_discovery_enabled}
  */
  readonly hostDiscoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#include_in_ping Subnet#include_in_ping}
  */
  readonly includeInPing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#is_folder Subnet#is_folder}
  */
  readonly isFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#is_full Subnet#is_full}
  */
  readonly isFull?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#linked_subnet_id Subnet#linked_subnet_id}
  */
  readonly linkedSubnetId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#location_id Subnet#location_id}
  */
  readonly locationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#master_subnet_id Subnet#master_subnet_id}
  */
  readonly masterSubnetId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#nameserver_id Subnet#nameserver_id}
  */
  readonly nameserverId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#resolve_dns Subnet#resolve_dns}
  */
  readonly resolveDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#scan_agent_id Subnet#scan_agent_id}
  */
  readonly scanAgentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#section_id Subnet#section_id}
  */
  readonly sectionId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#show_name Subnet#show_name}
  */
  readonly showName?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#subnet_address Subnet#subnet_address}
  */
  readonly subnetAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#subnet_mask Subnet#subnet_mask}
  */
  readonly subnetMask: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#utilization_threshold Subnet#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#vlan_id Subnet#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#vrf_id Subnet#vrf_id}
  */
  readonly vrfId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet phpipam_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/subnet phpipam_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'phpipam_subnet',
      terraformGeneratorMetadata: {
        providerName: 'phpipam',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowIpRequests = config.allowIpRequests;
    this._createPtrRecords = config.createPtrRecords;
    this._customFields = config.customFields;
    this._description = config.description;
    this._displayHostnames = config.displayHostnames;
    this._hostDiscoveryEnabled = config.hostDiscoveryEnabled;
    this._id = config.id;
    this._includeInPing = config.includeInPing;
    this._isFolder = config.isFolder;
    this._isFull = config.isFull;
    this._linkedSubnetId = config.linkedSubnetId;
    this._locationId = config.locationId;
    this._masterSubnetId = config.masterSubnetId;
    this._nameserverId = config.nameserverId;
    this._resolveDns = config.resolveDns;
    this._scanAgentId = config.scanAgentId;
    this._sectionId = config.sectionId;
    this._showName = config.showName;
    this._subnetAddress = config.subnetAddress;
    this._subnetMask = config.subnetMask;
    this._utilizationThreshold = config.utilizationThreshold;
    this._vlanId = config.vlanId;
    this._vrfId = config.vrfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ip_requests - computed: true, optional: true, required: false
  private _allowIpRequests?: boolean | cdktf.IResolvable; 
  public get allowIpRequests() {
    return this.getBooleanAttribute('allow_ip_requests');
  }
  public set allowIpRequests(value: boolean | cdktf.IResolvable) {
    this._allowIpRequests = value;
  }
  public resetAllowIpRequests() {
    this._allowIpRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpRequestsInput() {
    return this._allowIpRequests;
  }

  // create_ptr_records - computed: true, optional: true, required: false
  private _createPtrRecords?: boolean | cdktf.IResolvable; 
  public get createPtrRecords() {
    return this.getBooleanAttribute('create_ptr_records');
  }
  public set createPtrRecords(value: boolean | cdktf.IResolvable) {
    this._createPtrRecords = value;
  }
  public resetCreatePtrRecords() {
    this._createPtrRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPtrRecordsInput() {
    return this._createPtrRecords;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
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

  // display_hostnames - computed: true, optional: true, required: false
  private _displayHostnames?: boolean | cdktf.IResolvable; 
  public get displayHostnames() {
    return this.getBooleanAttribute('display_hostnames');
  }
  public set displayHostnames(value: boolean | cdktf.IResolvable) {
    this._displayHostnames = value;
  }
  public resetDisplayHostnames() {
    this._displayHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayHostnamesInput() {
    return this._displayHostnames;
  }

  // edit_date - computed: true, optional: false, required: false
  public get editDate() {
    return this.getStringAttribute('edit_date');
  }

  // gateway - computed: true, optional: false, required: false
  private _gateway = new cdktf.StringMap(this, "gateway");
  public get gateway() {
    return this._gateway;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // host_discovery_enabled - computed: true, optional: true, required: false
  private _hostDiscoveryEnabled?: boolean | cdktf.IResolvable; 
  public get hostDiscoveryEnabled() {
    return this.getBooleanAttribute('host_discovery_enabled');
  }
  public set hostDiscoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._hostDiscoveryEnabled = value;
  }
  public resetHostDiscoveryEnabled() {
    this._hostDiscoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostDiscoveryEnabledInput() {
    return this._hostDiscoveryEnabled;
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

  // include_in_ping - computed: true, optional: true, required: false
  private _includeInPing?: boolean | cdktf.IResolvable; 
  public get includeInPing() {
    return this.getBooleanAttribute('include_in_ping');
  }
  public set includeInPing(value: boolean | cdktf.IResolvable) {
    this._includeInPing = value;
  }
  public resetIncludeInPing() {
    this._includeInPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInPingInput() {
    return this._includeInPing;
  }

  // is_folder - computed: true, optional: true, required: false
  private _isFolder?: boolean | cdktf.IResolvable; 
  public get isFolder() {
    return this.getBooleanAttribute('is_folder');
  }
  public set isFolder(value: boolean | cdktf.IResolvable) {
    this._isFolder = value;
  }
  public resetIsFolder() {
    this._isFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFolderInput() {
    return this._isFolder;
  }

  // is_full - computed: true, optional: true, required: false
  private _isFull?: boolean | cdktf.IResolvable; 
  public get isFull() {
    return this.getBooleanAttribute('is_full');
  }
  public set isFull(value: boolean | cdktf.IResolvable) {
    this._isFull = value;
  }
  public resetIsFull() {
    this._isFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFullInput() {
    return this._isFull;
  }

  // linked_subnet_id - computed: true, optional: true, required: false
  private _linkedSubnetId?: number; 
  public get linkedSubnetId() {
    return this.getNumberAttribute('linked_subnet_id');
  }
  public set linkedSubnetId(value: number) {
    this._linkedSubnetId = value;
  }
  public resetLinkedSubnetId() {
    this._linkedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedSubnetIdInput() {
    return this._linkedSubnetId;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // master_subnet_id - computed: true, optional: true, required: false
  private _masterSubnetId?: number; 
  public get masterSubnetId() {
    return this.getNumberAttribute('master_subnet_id');
  }
  public set masterSubnetId(value: number) {
    this._masterSubnetId = value;
  }
  public resetMasterSubnetId() {
    this._masterSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSubnetIdInput() {
    return this._masterSubnetId;
  }

  // nameserver_id - computed: true, optional: true, required: false
  private _nameserverId?: number; 
  public get nameserverId() {
    return this.getNumberAttribute('nameserver_id');
  }
  public set nameserverId(value: number) {
    this._nameserverId = value;
  }
  public resetNameserverId() {
    this._nameserverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverIdInput() {
    return this._nameserverId;
  }

  // nameservers - computed: true, optional: false, required: false
  private _nameservers = new cdktf.StringMap(this, "nameservers");
  public get nameservers() {
    return this._nameservers;
  }

  // parent_subnet_id - computed: true, optional: false, required: false
  public get parentSubnetId() {
    return this.getNumberAttribute('parent_subnet_id');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // resolve_dns - computed: true, optional: true, required: false
  private _resolveDns?: boolean | cdktf.IResolvable; 
  public get resolveDns() {
    return this.getBooleanAttribute('resolve_dns');
  }
  public set resolveDns(value: boolean | cdktf.IResolvable) {
    this._resolveDns = value;
  }
  public resetResolveDns() {
    this._resolveDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveDnsInput() {
    return this._resolveDns;
  }

  // scan_agent_id - computed: true, optional: true, required: false
  private _scanAgentId?: number; 
  public get scanAgentId() {
    return this.getNumberAttribute('scan_agent_id');
  }
  public set scanAgentId(value: number) {
    this._scanAgentId = value;
  }
  public resetScanAgentId() {
    this._scanAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAgentIdInput() {
    return this._scanAgentId;
  }

  // section_id - computed: false, optional: false, required: true
  private _sectionId?: number; 
  public get sectionId() {
    return this.getNumberAttribute('section_id');
  }
  public set sectionId(value: number) {
    this._sectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionIdInput() {
    return this._sectionId;
  }

  // show_name - computed: true, optional: true, required: false
  private _showName?: boolean | cdktf.IResolvable; 
  public get showName() {
    return this.getBooleanAttribute('show_name');
  }
  public set showName(value: boolean | cdktf.IResolvable) {
    this._showName = value;
  }
  public resetShowName() {
    this._showName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNameInput() {
    return this._showName;
  }

  // subnet_address - computed: false, optional: false, required: true
  private _subnetAddress?: string; 
  public get subnetAddress() {
    return this.getStringAttribute('subnet_address');
  }
  public set subnetAddress(value: string) {
    this._subnetAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetAddressInput() {
    return this._subnetAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: number; 
  public get subnetMask() {
    return this.getNumberAttribute('subnet_mask');
  }
  public set subnetMask(value: number) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // utilization_threshold - computed: true, optional: true, required: false
  private _utilizationThreshold?: number; 
  public get utilizationThreshold() {
    return this.getNumberAttribute('utilization_threshold');
  }
  public set utilizationThreshold(value: number) {
    this._utilizationThreshold = value;
  }
  public resetUtilizationThreshold() {
    this._utilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationThresholdInput() {
    return this._utilizationThreshold;
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

  // vrf_id - computed: true, optional: true, required: false
  private _vrfId?: number; 
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }
  public set vrfId(value: number) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ip_requests: cdktf.booleanToTerraform(this._allowIpRequests),
      create_ptr_records: cdktf.booleanToTerraform(this._createPtrRecords),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      display_hostnames: cdktf.booleanToTerraform(this._displayHostnames),
      host_discovery_enabled: cdktf.booleanToTerraform(this._hostDiscoveryEnabled),
      id: cdktf.stringToTerraform(this._id),
      include_in_ping: cdktf.booleanToTerraform(this._includeInPing),
      is_folder: cdktf.booleanToTerraform(this._isFolder),
      is_full: cdktf.booleanToTerraform(this._isFull),
      linked_subnet_id: cdktf.numberToTerraform(this._linkedSubnetId),
      location_id: cdktf.numberToTerraform(this._locationId),
      master_subnet_id: cdktf.numberToTerraform(this._masterSubnetId),
      nameserver_id: cdktf.numberToTerraform(this._nameserverId),
      resolve_dns: cdktf.booleanToTerraform(this._resolveDns),
      scan_agent_id: cdktf.numberToTerraform(this._scanAgentId),
      section_id: cdktf.numberToTerraform(this._sectionId),
      show_name: cdktf.booleanToTerraform(this._showName),
      subnet_address: cdktf.stringToTerraform(this._subnetAddress),
      subnet_mask: cdktf.numberToTerraform(this._subnetMask),
      utilization_threshold: cdktf.numberToTerraform(this._utilizationThreshold),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vrf_id: cdktf.numberToTerraform(this._vrfId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ip_requests: {
        value: cdktf.booleanToHclTerraform(this._allowIpRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_ptr_records: {
        value: cdktf.booleanToHclTerraform(this._createPtrRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
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
      display_hostnames: {
        value: cdktf.booleanToHclTerraform(this._displayHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_discovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._hostDiscoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_in_ping: {
        value: cdktf.booleanToHclTerraform(this._includeInPing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_folder: {
        value: cdktf.booleanToHclTerraform(this._isFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_full: {
        value: cdktf.booleanToHclTerraform(this._isFull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      linked_subnet_id: {
        value: cdktf.numberToHclTerraform(this._linkedSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_subnet_id: {
        value: cdktf.numberToHclTerraform(this._masterSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nameserver_id: {
        value: cdktf.numberToHclTerraform(this._nameserverId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_dns: {
        value: cdktf.booleanToHclTerraform(this._resolveDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_agent_id: {
        value: cdktf.numberToHclTerraform(this._scanAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      section_id: {
        value: cdktf.numberToHclTerraform(this._sectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show_name: {
        value: cdktf.booleanToHclTerraform(this._showName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_address: {
        value: cdktf.stringToHclTerraform(this._subnetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_mask: {
        value: cdktf.numberToHclTerraform(this._subnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      utilization_threshold: {
        value: cdktf.numberToHclTerraform(this._utilizationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_id: {
        value: cdktf.numberToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
