// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of IPs that may perform a zone transfer for this Domain. This is potentially dangerous, and should be set to an empty list unless you intend to use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#axfr_ips Domain#axfr_ips}
  */
  readonly axfrIps?: string[];
  /**
  * A description for this Domain. This is for display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#description Domain#description}
  */
  readonly description?: string;
  /**
  * The domain this Domain represents. These must be unique in our system; you cannot have two Domains representing the same domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#domain Domain#domain}
  */
  readonly domain: string;
  /**
  * The amount of time in seconds that may pass before this Domain is no longer Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#expire_sec Domain#expire_sec}
  */
  readonly expireSec?: number;
  /**
  * The group this Domain belongs to. This is for display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#group Domain#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP addresses representing the master DNS for this Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#master_ips Domain#master_ips}
  */
  readonly masterIps?: string[];
  /**
  * The amount of time in seconds before this Domain should be refreshed. Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#refresh_sec Domain#refresh_sec}
  */
  readonly refreshSec?: number;
  /**
  * The interval, in seconds, at which a failed refresh should be retried. Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#retry_sec Domain#retry_sec}
  */
  readonly retrySec?: number;
  /**
  * Start of Authority email address. This is required for master Domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#soa_email Domain#soa_email}
  */
  readonly soaEmail?: string;
  /**
  * Used to control whether this Domain is currently being rendered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#status Domain#status}
  */
  readonly status?: string;
  /**
  * An array of tags applied to this object. Tags are for organizational purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#tags Domain#tags}
  */
  readonly tags?: string[];
  /**
  * 'Time to Live' - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#ttl_sec Domain#ttl_sec}
  */
  readonly ttlSec?: number;
  /**
  * If this Domain represents the authoritative source of information for the domain it describes, or if it is a read-only copy of a master (also called a slave).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain linode_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/domain linode_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_domain',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._axfrIps = config.axfrIps;
    this._description = config.description;
    this._domain = config.domain;
    this._expireSec = config.expireSec;
    this._group = config.group;
    this._id = config.id;
    this._masterIps = config.masterIps;
    this._refreshSec = config.refreshSec;
    this._retrySec = config.retrySec;
    this._soaEmail = config.soaEmail;
    this._status = config.status;
    this._tags = config.tags;
    this._ttlSec = config.ttlSec;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // axfr_ips - computed: false, optional: true, required: false
  private _axfrIps?: string[]; 
  public get axfrIps() {
    return cdktf.Fn.tolist(this.getListAttribute('axfr_ips'));
  }
  public set axfrIps(value: string[]) {
    this._axfrIps = value;
  }
  public resetAxfrIps() {
    this._axfrIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axfrIpsInput() {
    return this._axfrIps;
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

  // expire_sec - computed: false, optional: true, required: false
  private _expireSec?: number; 
  public get expireSec() {
    return this.getNumberAttribute('expire_sec');
  }
  public set expireSec(value: number) {
    this._expireSec = value;
  }
  public resetExpireSec() {
    this._expireSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireSecInput() {
    return this._expireSec;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // master_ips - computed: false, optional: true, required: false
  private _masterIps?: string[]; 
  public get masterIps() {
    return cdktf.Fn.tolist(this.getListAttribute('master_ips'));
  }
  public set masterIps(value: string[]) {
    this._masterIps = value;
  }
  public resetMasterIps() {
    this._masterIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpsInput() {
    return this._masterIps;
  }

  // refresh_sec - computed: false, optional: true, required: false
  private _refreshSec?: number; 
  public get refreshSec() {
    return this.getNumberAttribute('refresh_sec');
  }
  public set refreshSec(value: number) {
    this._refreshSec = value;
  }
  public resetRefreshSec() {
    this._refreshSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshSecInput() {
    return this._refreshSec;
  }

  // retry_sec - computed: false, optional: true, required: false
  private _retrySec?: number; 
  public get retrySec() {
    return this.getNumberAttribute('retry_sec');
  }
  public set retrySec(value: number) {
    this._retrySec = value;
  }
  public resetRetrySec() {
    this._retrySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrySecInput() {
    return this._retrySec;
  }

  // soa_email - computed: false, optional: true, required: false
  private _soaEmail?: string; 
  public get soaEmail() {
    return this.getStringAttribute('soa_email');
  }
  public set soaEmail(value: string) {
    this._soaEmail = value;
  }
  public resetSoaEmail() {
    this._soaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaEmailInput() {
    return this._soaEmail;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // ttl_sec - computed: false, optional: true, required: false
  private _ttlSec?: number; 
  public get ttlSec() {
    return this.getNumberAttribute('ttl_sec');
  }
  public set ttlSec(value: number) {
    this._ttlSec = value;
  }
  public resetTtlSec() {
    this._ttlSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecInput() {
    return this._ttlSec;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      axfr_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._axfrIps),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      expire_sec: cdktf.numberToTerraform(this._expireSec),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      master_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterIps),
      refresh_sec: cdktf.numberToTerraform(this._refreshSec),
      retry_sec: cdktf.numberToTerraform(this._retrySec),
      soa_email: cdktf.stringToTerraform(this._soaEmail),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      ttl_sec: cdktf.numberToTerraform(this._ttlSec),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      axfr_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._axfrIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      expire_sec: {
        value: cdktf.numberToHclTerraform(this._expireSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      master_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masterIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_sec: {
        value: cdktf.numberToHclTerraform(this._refreshSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_sec: {
        value: cdktf.numberToHclTerraform(this._retrySec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soa_email: {
        value: cdktf.stringToHclTerraform(this._soaEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ttl_sec: {
        value: cdktf.numberToHclTerraform(this._ttlSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
