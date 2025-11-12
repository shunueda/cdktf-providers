// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether this resource should just take over control of an existing user. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#allow_existing User#allow_existing}
  */
  readonly allowExisting?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether this user should be blocked from the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#blocked User#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * Override the device fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#dev_id_override User#dev_id_override}
  */
  readonly devIdOverride?: number;
  /**
  * A fixed IPv4 address for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#fixed_ip User#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Specifies the local DNS record for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#local_dns_record User#local_dns_record}
  */
  readonly localDnsRecord?: string;
  /**
  * The MAC address of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#mac User#mac}
  */
  readonly mac: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * The network ID for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#network_id User#network_id}
  */
  readonly networkId?: string;
  /**
  * A note with additional information for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#note User#note}
  */
  readonly note?: string;
  /**
  * The name of the site to associate the user with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#site User#site}
  */
  readonly site?: string;
  /**
  * Specifies whether this resource should tell the controller to "forget" the user on destroy. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#skip_forget_on_destroy User#skip_forget_on_destroy}
  */
  readonly skipForgetOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The user group ID for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#user_group_id User#user_group_id}
  */
  readonly userGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user unifi_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user unifi_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_user',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowExisting = config.allowExisting;
    this._blocked = config.blocked;
    this._devIdOverride = config.devIdOverride;
    this._fixedIp = config.fixedIp;
    this._localDnsRecord = config.localDnsRecord;
    this._mac = config.mac;
    this._name = config.name;
    this._networkId = config.networkId;
    this._note = config.note;
    this._site = config.site;
    this._skipForgetOnDestroy = config.skipForgetOnDestroy;
    this._userGroupId = config.userGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_existing - computed: false, optional: true, required: false
  private _allowExisting?: boolean | cdktf.IResolvable; 
  public get allowExisting() {
    return this.getBooleanAttribute('allow_existing');
  }
  public set allowExisting(value: boolean | cdktf.IResolvable) {
    this._allowExisting = value;
  }
  public resetAllowExisting() {
    this._allowExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExistingInput() {
    return this._allowExisting;
  }

  // blocked - computed: false, optional: true, required: false
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // dev_id_override - computed: false, optional: true, required: false
  private _devIdOverride?: number; 
  public get devIdOverride() {
    return this.getNumberAttribute('dev_id_override');
  }
  public set devIdOverride(value: number) {
    this._devIdOverride = value;
  }
  public resetDevIdOverride() {
    this._devIdOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIdOverrideInput() {
    return this._devIdOverride;
  }

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp?: string; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // local_dns_record - computed: false, optional: true, required: false
  private _localDnsRecord?: string; 
  public get localDnsRecord() {
    return this.getStringAttribute('local_dns_record');
  }
  public set localDnsRecord(value: string) {
    this._localDnsRecord = value;
  }
  public resetLocalDnsRecord() {
    this._localDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsRecordInput() {
    return this._localDnsRecord;
  }

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
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

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // skip_forget_on_destroy - computed: false, optional: true, required: false
  private _skipForgetOnDestroy?: boolean | cdktf.IResolvable; 
  public get skipForgetOnDestroy() {
    return this.getBooleanAttribute('skip_forget_on_destroy');
  }
  public set skipForgetOnDestroy(value: boolean | cdktf.IResolvable) {
    this._skipForgetOnDestroy = value;
  }
  public resetSkipForgetOnDestroy() {
    this._skipForgetOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipForgetOnDestroyInput() {
    return this._skipForgetOnDestroy;
  }

  // user_group_id - computed: false, optional: true, required: false
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_existing: cdktf.booleanToTerraform(this._allowExisting),
      blocked: cdktf.booleanToTerraform(this._blocked),
      dev_id_override: cdktf.numberToTerraform(this._devIdOverride),
      fixed_ip: cdktf.stringToTerraform(this._fixedIp),
      local_dns_record: cdktf.stringToTerraform(this._localDnsRecord),
      mac: cdktf.stringToTerraform(this._mac),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      note: cdktf.stringToTerraform(this._note),
      site: cdktf.stringToTerraform(this._site),
      skip_forget_on_destroy: cdktf.booleanToTerraform(this._skipForgetOnDestroy),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_existing: {
        value: cdktf.booleanToHclTerraform(this._allowExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked: {
        value: cdktf.booleanToHclTerraform(this._blocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dev_id_override: {
        value: cdktf.numberToHclTerraform(this._devIdOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_ip: {
        value: cdktf.stringToHclTerraform(this._fixedIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_dns_record: {
        value: cdktf.stringToHclTerraform(this._localDnsRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
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
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_forget_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._skipForgetOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
