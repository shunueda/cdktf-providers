// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMailcowDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/domain#domain DataMailcowDomain#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/domain#id DataMailcowDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/domain#tags DataMailcowDomain#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/domain mailcow_domain}
*/
export class DataMailcowDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMailcowDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMailcowDomain to import
  * @param importFromId The id of the existing DataMailcowDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMailcowDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/data-sources/domain mailcow_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMailcowDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataMailcowDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_domain',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getNumberAttribute('aliases');
  }

  // aliases_left - computed: true, optional: false, required: false
  public get aliasesLeft() {
    return this.getNumberAttribute('aliases_left');
  }

  // backupmx - computed: true, optional: false, required: false
  public get backupmx() {
    return this.getBooleanAttribute('backupmx');
  }

  // bytes_total - computed: true, optional: false, required: false
  public get bytesTotal() {
    return this.getNumberAttribute('bytes_total');
  }

  // defquota - computed: true, optional: false, required: false
  public get defquota() {
    return this.getNumberAttribute('defquota');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // domain_admins - computed: true, optional: false, required: false
  public get domainAdmins() {
    return this.getStringAttribute('domain_admins');
  }

  // gal - computed: true, optional: false, required: false
  public get gal() {
    return this.getBooleanAttribute('gal');
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

  // mailboxes - computed: true, optional: false, required: false
  public get mailboxes() {
    return this.getNumberAttribute('mailboxes');
  }

  // maxquota - computed: true, optional: false, required: false
  public get maxquota() {
    return this.getNumberAttribute('maxquota');
  }

  // mboxes_in_domain - computed: true, optional: false, required: false
  public get mboxesInDomain() {
    return this.getNumberAttribute('mboxes_in_domain');
  }

  // mboxes_left - computed: true, optional: false, required: false
  public get mboxesLeft() {
    return this.getNumberAttribute('mboxes_left');
  }

  // msgs_total - computed: true, optional: false, required: false
  public get msgsTotal() {
    return this.getNumberAttribute('msgs_total');
  }

  // quota - computed: true, optional: false, required: false
  public get quota() {
    return this.getNumberAttribute('quota');
  }

  // quota_used_in_domain - computed: true, optional: false, required: false
  public get quotaUsedInDomain() {
    return this.getNumberAttribute('quota_used_in_domain');
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }

  // relay_all_recipients - computed: true, optional: false, required: false
  public get relayAllRecipients() {
    return this.getBooleanAttribute('relay_all_recipients');
  }

  // relay_unknown_only - computed: true, optional: false, required: false
  public get relayUnknownOnly() {
    return this.getBooleanAttribute('relay_unknown_only');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
