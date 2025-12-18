// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgPskConfig extends cdktf.TerraformMetaArguments {
  /**
  * email to send psk expiring notifications to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#email OrgPsk#email}
  */
  readonly email?: string;
  /**
  * Expire time for this PSK key (epoch time in seconds). Default `null` (as no expiration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#expire_time OrgPsk#expire_time}
  */
  readonly expireTime?: number;
  /**
  * Number of days before psk is expired. Used as to when to start sending reminder notification when the psk is about to expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#expiry_notification_time OrgPsk#expiry_notification_time}
  */
  readonly expiryNotificationTime?: number;
  /**
  * If `usage`==`single`, the mac that this PSK ties to, empty if `auto-binding`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#mac OrgPsk#mac}
  */
  readonly mac?: string;
  /**
  * If `usage`==`macs`, this list contains N number of client mac addresses or mac patterns(1122*) or both. This list is capped at 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#macs OrgPsk#macs}
  */
  readonly macs?: string[];
  /**
  * For Org PSK Only. Max concurrent users for this PSK key. Default is 0 (unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#max_usage OrgPsk#max_usage}
  */
  readonly maxUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#name OrgPsk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#note OrgPsk#note}
  */
  readonly note?: string;
  /**
  * If set to true, reminder notification will be sent when psk is about to expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#notify_expiry OrgPsk#notify_expiry}
  */
  readonly notifyExpiry?: boolean | cdktf.IResolvable;
  /**
  * If set to true, notification will be sent when psk is created or edited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#notify_on_create_or_edit OrgPsk#notify_on_create_or_edit}
  */
  readonly notifyOnCreateOrEdit?: boolean | cdktf.IResolvable;
  /**
  * previous passphrase of the PSK if it has been rotated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#old_passphrase OrgPsk#old_passphrase}
  */
  readonly oldPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#org_id OrgPsk#org_id}
  */
  readonly orgId: string;
  /**
  * passphrase of the PSK (8-63 character or 64 in hex)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#passphrase OrgPsk#passphrase}
  */
  readonly passphrase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#role OrgPsk#role}
  */
  readonly role?: string;
  /**
  * SSID this PSK should be applicable to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#ssid OrgPsk#ssid}
  */
  readonly ssid: string;
  /**
  * enum: `macs`, `multi`, `single`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#usage OrgPsk#usage}
  */
  readonly usage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#vlan_id OrgPsk#vlan_id}
  */
  readonly vlanId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk mist_org_psk}
*/
export class OrgPsk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_psk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgPsk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgPsk to import
  * @param importFromId The id of the existing OrgPsk that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgPsk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_psk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_psk mist_org_psk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgPskConfig
  */
  public constructor(scope: Construct, id: string, config: OrgPskConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_psk',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._expireTime = config.expireTime;
    this._expiryNotificationTime = config.expiryNotificationTime;
    this._mac = config.mac;
    this._macs = config.macs;
    this._maxUsage = config.maxUsage;
    this._name = config.name;
    this._note = config.note;
    this._notifyExpiry = config.notifyExpiry;
    this._notifyOnCreateOrEdit = config.notifyOnCreateOrEdit;
    this._oldPassphrase = config.oldPassphrase;
    this._orgId = config.orgId;
    this._passphrase = config.passphrase;
    this._role = config.role;
    this._ssid = config.ssid;
    this._usage = config.usage;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // expiry_notification_time - computed: false, optional: true, required: false
  private _expiryNotificationTime?: number; 
  public get expiryNotificationTime() {
    return this.getNumberAttribute('expiry_notification_time');
  }
  public set expiryNotificationTime(value: number) {
    this._expiryNotificationTime = value;
  }
  public resetExpiryNotificationTime() {
    this._expiryNotificationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryNotificationTimeInput() {
    return this._expiryNotificationTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // macs - computed: false, optional: true, required: false
  private _macs?: string[]; 
  public get macs() {
    return this.getListAttribute('macs');
  }
  public set macs(value: string[]) {
    this._macs = value;
  }
  public resetMacs() {
    this._macs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsInput() {
    return this._macs;
  }

  // max_usage - computed: false, optional: true, required: false
  private _maxUsage?: number; 
  public get maxUsage() {
    return this.getNumberAttribute('max_usage');
  }
  public set maxUsage(value: number) {
    this._maxUsage = value;
  }
  public resetMaxUsage() {
    this._maxUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUsageInput() {
    return this._maxUsage;
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

  // note - computed: false, optional: true, required: false
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

  // notify_expiry - computed: true, optional: true, required: false
  private _notifyExpiry?: boolean | cdktf.IResolvable; 
  public get notifyExpiry() {
    return this.getBooleanAttribute('notify_expiry');
  }
  public set notifyExpiry(value: boolean | cdktf.IResolvable) {
    this._notifyExpiry = value;
  }
  public resetNotifyExpiry() {
    this._notifyExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyExpiryInput() {
    return this._notifyExpiry;
  }

  // notify_on_create_or_edit - computed: false, optional: true, required: false
  private _notifyOnCreateOrEdit?: boolean | cdktf.IResolvable; 
  public get notifyOnCreateOrEdit() {
    return this.getBooleanAttribute('notify_on_create_or_edit');
  }
  public set notifyOnCreateOrEdit(value: boolean | cdktf.IResolvable) {
    this._notifyOnCreateOrEdit = value;
  }
  public resetNotifyOnCreateOrEdit() {
    this._notifyOnCreateOrEdit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnCreateOrEditInput() {
    return this._notifyOnCreateOrEdit;
  }

  // old_passphrase - computed: false, optional: true, required: false
  private _oldPassphrase?: string; 
  public get oldPassphrase() {
    return this.getStringAttribute('old_passphrase');
  }
  public set oldPassphrase(value: string) {
    this._oldPassphrase = value;
  }
  public resetOldPassphrase() {
    this._oldPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPassphraseInput() {
    return this._oldPassphrase;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // passphrase - computed: false, optional: false, required: true
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // role - computed: false, optional: true, required: false
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

  // ssid - computed: false, optional: false, required: true
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // usage - computed: true, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      expire_time: cdktf.numberToTerraform(this._expireTime),
      expiry_notification_time: cdktf.numberToTerraform(this._expiryNotificationTime),
      mac: cdktf.stringToTerraform(this._mac),
      macs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macs),
      max_usage: cdktf.numberToTerraform(this._maxUsage),
      name: cdktf.stringToTerraform(this._name),
      note: cdktf.stringToTerraform(this._note),
      notify_expiry: cdktf.booleanToTerraform(this._notifyExpiry),
      notify_on_create_or_edit: cdktf.booleanToTerraform(this._notifyOnCreateOrEdit),
      old_passphrase: cdktf.stringToTerraform(this._oldPassphrase),
      org_id: cdktf.stringToTerraform(this._orgId),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      role: cdktf.stringToTerraform(this._role),
      ssid: cdktf.stringToTerraform(this._ssid),
      usage: cdktf.stringToTerraform(this._usage),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_time: {
        value: cdktf.numberToHclTerraform(this._expireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expiry_notification_time: {
        value: cdktf.numberToHclTerraform(this._expiryNotificationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_usage: {
        value: cdktf.numberToHclTerraform(this._maxUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      notify_expiry: {
        value: cdktf.booleanToHclTerraform(this._notifyExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_create_or_edit: {
        value: cdktf.booleanToHclTerraform(this._notifyOnCreateOrEdit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      old_passphrase: {
        value: cdktf.stringToHclTerraform(this._oldPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
