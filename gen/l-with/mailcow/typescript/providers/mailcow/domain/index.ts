// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * is domain active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#active Domain#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * limit count of aliases associated with this domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#aliases Domain#aliases}
  */
  readonly aliases?: number;
  /**
  * relay domain or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#backupmx Domain#backupmx}
  */
  readonly backupmx?: boolean | cdktf.IResolvable;
  /**
  * predefined mailbox quota in add mailbox form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#defquota Domain#defquota}
  */
  readonly defquota?: number;
  /**
  * Description of domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#description Domain#description}
  */
  readonly description?: string;
  /**
  * Fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#domain Domain#domain}
  */
  readonly domain: string;
  /**
  * is domain global address list active or not, it enables shared contacts accross domain in SOGo webmail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#gal Domain#gal}
  */
  readonly gal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit count of mailboxes associated with this domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#mailboxes Domain#mailboxes}
  */
  readonly mailboxes?: number;
  /**
  * maximum quota per mailbox
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#maxquota Domain#maxquota}
  */
  readonly maxquota?: number;
  /**
  * maximum quota for this domain (for all mailboxes in sum)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#quota Domain#quota}
  */
  readonly quota?: number;
  /**
  * rate limit, decimal with unit s,m,h,d
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#rate_limit Domain#rate_limit}
  */
  readonly rateLimit?: string;
  /**
  * if not, them you have to create "dummy" mailbox for each address to relay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#relay_all_recipients Domain#relay_all_recipients}
  */
  readonly relayAllRecipients?: boolean | cdktf.IResolvable;
  /**
  * Relay non-existing mailboxes only. Existing mailboxes will be delivered locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#relay_unknown_only Domain#relay_unknown_only}
  */
  readonly relayUnknownOnly?: boolean | cdktf.IResolvable;
  /**
  * if the SOGo container should be restarted after adding the domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#restart_sogo Domain#restart_sogo}
  */
  readonly restartSogo?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain mailcow_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/domain mailcow_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_domain',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._aliases = config.aliases;
    this._backupmx = config.backupmx;
    this._defquota = config.defquota;
    this._description = config.description;
    this._domain = config.domain;
    this._gal = config.gal;
    this._id = config.id;
    this._mailboxes = config.mailboxes;
    this._maxquota = config.maxquota;
    this._quota = config.quota;
    this._rateLimit = config.rateLimit;
    this._relayAllRecipients = config.relayAllRecipients;
    this._relayUnknownOnly = config.relayUnknownOnly;
    this._restartSogo = config.restartSogo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: number; 
  public get aliases() {
    return this.getNumberAttribute('aliases');
  }
  public set aliases(value: number) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // backupmx - computed: false, optional: true, required: false
  private _backupmx?: boolean | cdktf.IResolvable; 
  public get backupmx() {
    return this.getBooleanAttribute('backupmx');
  }
  public set backupmx(value: boolean | cdktf.IResolvable) {
    this._backupmx = value;
  }
  public resetBackupmx() {
    this._backupmx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupmxInput() {
    return this._backupmx;
  }

  // defquota - computed: false, optional: true, required: false
  private _defquota?: number; 
  public get defquota() {
    return this.getNumberAttribute('defquota');
  }
  public set defquota(value: number) {
    this._defquota = value;
  }
  public resetDefquota() {
    this._defquota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defquotaInput() {
    return this._defquota;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gal - computed: false, optional: true, required: false
  private _gal?: boolean | cdktf.IResolvable; 
  public get gal() {
    return this.getBooleanAttribute('gal');
  }
  public set gal(value: boolean | cdktf.IResolvable) {
    this._gal = value;
  }
  public resetGal() {
    this._gal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galInput() {
    return this._gal;
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

  // mailboxes - computed: false, optional: true, required: false
  private _mailboxes?: number; 
  public get mailboxes() {
    return this.getNumberAttribute('mailboxes');
  }
  public set mailboxes(value: number) {
    this._mailboxes = value;
  }
  public resetMailboxes() {
    this._mailboxes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailboxesInput() {
    return this._mailboxes;
  }

  // maxquota - computed: false, optional: true, required: false
  private _maxquota?: number; 
  public get maxquota() {
    return this.getNumberAttribute('maxquota');
  }
  public set maxquota(value: number) {
    this._maxquota = value;
  }
  public resetMaxquota() {
    this._maxquota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxquotaInput() {
    return this._maxquota;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: string; 
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }
  public set rateLimit(value: string) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // relay_all_recipients - computed: false, optional: true, required: false
  private _relayAllRecipients?: boolean | cdktf.IResolvable; 
  public get relayAllRecipients() {
    return this.getBooleanAttribute('relay_all_recipients');
  }
  public set relayAllRecipients(value: boolean | cdktf.IResolvable) {
    this._relayAllRecipients = value;
  }
  public resetRelayAllRecipients() {
    this._relayAllRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAllRecipientsInput() {
    return this._relayAllRecipients;
  }

  // relay_unknown_only - computed: false, optional: true, required: false
  private _relayUnknownOnly?: boolean | cdktf.IResolvable; 
  public get relayUnknownOnly() {
    return this.getBooleanAttribute('relay_unknown_only');
  }
  public set relayUnknownOnly(value: boolean | cdktf.IResolvable) {
    this._relayUnknownOnly = value;
  }
  public resetRelayUnknownOnly() {
    this._relayUnknownOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayUnknownOnlyInput() {
    return this._relayUnknownOnly;
  }

  // restart_sogo - computed: false, optional: true, required: false
  private _restartSogo?: boolean | cdktf.IResolvable; 
  public get restartSogo() {
    return this.getBooleanAttribute('restart_sogo');
  }
  public set restartSogo(value: boolean | cdktf.IResolvable) {
    this._restartSogo = value;
  }
  public resetRestartSogo() {
    this._restartSogo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartSogoInput() {
    return this._restartSogo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      aliases: cdktf.numberToTerraform(this._aliases),
      backupmx: cdktf.booleanToTerraform(this._backupmx),
      defquota: cdktf.numberToTerraform(this._defquota),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      gal: cdktf.booleanToTerraform(this._gal),
      id: cdktf.stringToTerraform(this._id),
      mailboxes: cdktf.numberToTerraform(this._mailboxes),
      maxquota: cdktf.numberToTerraform(this._maxquota),
      quota: cdktf.numberToTerraform(this._quota),
      rate_limit: cdktf.stringToTerraform(this._rateLimit),
      relay_all_recipients: cdktf.booleanToTerraform(this._relayAllRecipients),
      relay_unknown_only: cdktf.booleanToTerraform(this._relayUnknownOnly),
      restart_sogo: cdktf.booleanToTerraform(this._restartSogo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aliases: {
        value: cdktf.numberToHclTerraform(this._aliases),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backupmx: {
        value: cdktf.booleanToHclTerraform(this._backupmx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      defquota: {
        value: cdktf.numberToHclTerraform(this._defquota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gal: {
        value: cdktf.booleanToHclTerraform(this._gal),
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
      mailboxes: {
        value: cdktf.numberToHclTerraform(this._mailboxes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxquota: {
        value: cdktf.numberToHclTerraform(this._maxquota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota: {
        value: cdktf.numberToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit: {
        value: cdktf.stringToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relay_all_recipients: {
        value: cdktf.booleanToHclTerraform(this._relayAllRecipients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      relay_unknown_only: {
        value: cdktf.booleanToHclTerraform(this._relayUnknownOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restart_sogo: {
        value: cdktf.booleanToHclTerraform(this._restartSogo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
