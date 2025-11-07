// https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#custom_fields Address#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#description Address#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#device_id Address#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#exclude_ping Address#exclude_ping}
  */
  readonly excludePing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#hostname Address#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#id Address#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#ip_address Address#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#is_gateway Address#is_gateway}
  */
  readonly isGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#mac_address Address#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#note Address#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#owner Address#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#ptr_record_id Address#ptr_record_id}
  */
  readonly ptrRecordId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#remove_dns_on_delete Address#remove_dns_on_delete}
  */
  readonly removeDnsOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#skip_ptr_record Address#skip_ptr_record}
  */
  readonly skipPtrRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#state_tag_id Address#state_tag_id}
  */
  readonly stateTagId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#subnet_id Address#subnet_id}
  */
  readonly subnetId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#switch_port_label Address#switch_port_label}
  */
  readonly switchPortLabel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address phpipam_address}
*/
export class Address extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "phpipam_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Address resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Address to import
  * @param importFromId The id of the existing Address that should be imported. Refer to the {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Address to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "phpipam_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lord-kyron/phpipam/1.6.2/docs/resources/address phpipam_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AddressConfig
  */
  public constructor(scope: Construct, id: string, config: AddressConfig) {
    super(scope, id, {
      terraformResourceType: 'phpipam_address',
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
    this._customFields = config.customFields;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._excludePing = config.excludePing;
    this._hostname = config.hostname;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._isGateway = config.isGateway;
    this._macAddress = config.macAddress;
    this._note = config.note;
    this._owner = config.owner;
    this._ptrRecordId = config.ptrRecordId;
    this._removeDnsOnDelete = config.removeDnsOnDelete;
    this._skipPtrRecord = config.skipPtrRecord;
    this._stateTagId = config.stateTagId;
    this._subnetId = config.subnetId;
    this._switchPortLabel = config.switchPortLabel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_id - computed: true, optional: false, required: false
  public get addressId() {
    return this.getNumberAttribute('address_id');
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

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // edit_date - computed: true, optional: false, required: false
  public get editDate() {
    return this.getStringAttribute('edit_date');
  }

  // exclude_ping - computed: true, optional: true, required: false
  private _excludePing?: boolean | cdktf.IResolvable; 
  public get excludePing() {
    return this.getBooleanAttribute('exclude_ping');
  }
  public set excludePing(value: boolean | cdktf.IResolvable) {
    this._excludePing = value;
  }
  public resetExcludePing() {
    this._excludePing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePingInput() {
    return this._excludePing;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_gateway - computed: true, optional: true, required: false
  private _isGateway?: boolean | cdktf.IResolvable; 
  public get isGateway() {
    return this.getBooleanAttribute('is_gateway');
  }
  public set isGateway(value: boolean | cdktf.IResolvable) {
    this._isGateway = value;
  }
  public resetIsGateway() {
    this._isGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGatewayInput() {
    return this._isGateway;
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // note - computed: true, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // ptr_record_id - computed: true, optional: true, required: false
  private _ptrRecordId?: number; 
  public get ptrRecordId() {
    return this.getNumberAttribute('ptr_record_id');
  }
  public set ptrRecordId(value: number) {
    this._ptrRecordId = value;
  }
  public resetPtrRecordId() {
    this._ptrRecordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrRecordIdInput() {
    return this._ptrRecordId;
  }

  // remove_dns_on_delete - computed: false, optional: true, required: false
  private _removeDnsOnDelete?: boolean | cdktf.IResolvable; 
  public get removeDnsOnDelete() {
    return this.getBooleanAttribute('remove_dns_on_delete');
  }
  public set removeDnsOnDelete(value: boolean | cdktf.IResolvable) {
    this._removeDnsOnDelete = value;
  }
  public resetRemoveDnsOnDelete() {
    this._removeDnsOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDnsOnDeleteInput() {
    return this._removeDnsOnDelete;
  }

  // skip_ptr_record - computed: true, optional: true, required: false
  private _skipPtrRecord?: boolean | cdktf.IResolvable; 
  public get skipPtrRecord() {
    return this.getBooleanAttribute('skip_ptr_record');
  }
  public set skipPtrRecord(value: boolean | cdktf.IResolvable) {
    this._skipPtrRecord = value;
  }
  public resetSkipPtrRecord() {
    this._skipPtrRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipPtrRecordInput() {
    return this._skipPtrRecord;
  }

  // state_tag_id - computed: true, optional: true, required: false
  private _stateTagId?: number; 
  public get stateTagId() {
    return this.getNumberAttribute('state_tag_id');
  }
  public set stateTagId(value: number) {
    this._stateTagId = value;
  }
  public resetStateTagId() {
    this._stateTagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTagIdInput() {
    return this._stateTagId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // switch_port_label - computed: true, optional: true, required: false
  private _switchPortLabel?: string; 
  public get switchPortLabel() {
    return this.getStringAttribute('switch_port_label');
  }
  public set switchPortLabel(value: string) {
    this._switchPortLabel = value;
  }
  public resetSwitchPortLabel() {
    this._switchPortLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortLabelInput() {
    return this._switchPortLabel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.numberToTerraform(this._deviceId),
      exclude_ping: cdktf.booleanToTerraform(this._excludePing),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_gateway: cdktf.booleanToTerraform(this._isGateway),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      note: cdktf.stringToTerraform(this._note),
      owner: cdktf.stringToTerraform(this._owner),
      ptr_record_id: cdktf.numberToTerraform(this._ptrRecordId),
      remove_dns_on_delete: cdktf.booleanToTerraform(this._removeDnsOnDelete),
      skip_ptr_record: cdktf.booleanToTerraform(this._skipPtrRecord),
      state_tag_id: cdktf.numberToTerraform(this._stateTagId),
      subnet_id: cdktf.numberToTerraform(this._subnetId),
      switch_port_label: cdktf.stringToTerraform(this._switchPortLabel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_ping: {
        value: cdktf.booleanToHclTerraform(this._excludePing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_gateway: {
        value: cdktf.booleanToHclTerraform(this._isGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptr_record_id: {
        value: cdktf.numberToHclTerraform(this._ptrRecordId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_dns_on_delete: {
        value: cdktf.booleanToHclTerraform(this._removeDnsOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_ptr_record: {
        value: cdktf.booleanToHclTerraform(this._skipPtrRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state_tag_id: {
        value: cdktf.numberToHclTerraform(this._stateTagId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.numberToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_port_label: {
        value: cdktf.stringToHclTerraform(this._switchPortLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
