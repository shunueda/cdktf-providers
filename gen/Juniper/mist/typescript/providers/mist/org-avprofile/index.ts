// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgAvprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * enum: `block`, `log-and-permit`, `permit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#fallback_action OrgAvprofile#fallback_action}
  */
  readonly fallbackAction?: string;
  /**
  * In KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#max_filesize OrgAvprofile#max_filesize}
  */
  readonly maxFilesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#mime_whitelist OrgAvprofile#mime_whitelist}
  */
  readonly mimeWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#name OrgAvprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#org_id OrgAvprofile#org_id}
  */
  readonly orgId: string;
  /**
  * List of protocols to monitor. enum: `ftp`, `http`, `imap`, `pop3`, `smtp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#protocols OrgAvprofile#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#url_whitelist OrgAvprofile#url_whitelist}
  */
  readonly urlWhitelist?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile mist_org_avprofile}
*/
export class OrgAvprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_avprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgAvprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgAvprofile to import
  * @param importFromId The id of the existing OrgAvprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgAvprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_avprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_avprofile mist_org_avprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgAvprofileConfig
  */
  public constructor(scope: Construct, id: string, config: OrgAvprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_avprofile',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fallbackAction = config.fallbackAction;
    this._maxFilesize = config.maxFilesize;
    this._mimeWhitelist = config.mimeWhitelist;
    this._name = config.name;
    this._orgId = config.orgId;
    this._protocols = config.protocols;
    this._urlWhitelist = config.urlWhitelist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fallback_action - computed: false, optional: true, required: false
  private _fallbackAction?: string; 
  public get fallbackAction() {
    return this.getStringAttribute('fallback_action');
  }
  public set fallbackAction(value: string) {
    this._fallbackAction = value;
  }
  public resetFallbackAction() {
    this._fallbackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackActionInput() {
    return this._fallbackAction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_filesize - computed: true, optional: true, required: false
  private _maxFilesize?: number; 
  public get maxFilesize() {
    return this.getNumberAttribute('max_filesize');
  }
  public set maxFilesize(value: number) {
    this._maxFilesize = value;
  }
  public resetMaxFilesize() {
    this._maxFilesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesizeInput() {
    return this._maxFilesize;
  }

  // mime_whitelist - computed: true, optional: true, required: false
  private _mimeWhitelist?: string[]; 
  public get mimeWhitelist() {
    return this.getListAttribute('mime_whitelist');
  }
  public set mimeWhitelist(value: string[]) {
    this._mimeWhitelist = value;
  }
  public resetMimeWhitelist() {
    this._mimeWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeWhitelistInput() {
    return this._mimeWhitelist;
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

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // url_whitelist - computed: true, optional: true, required: false
  private _urlWhitelist?: string[]; 
  public get urlWhitelist() {
    return this.getListAttribute('url_whitelist');
  }
  public set urlWhitelist(value: string[]) {
    this._urlWhitelist = value;
  }
  public resetUrlWhitelist() {
    this._urlWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlWhitelistInput() {
    return this._urlWhitelist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fallback_action: cdktf.stringToTerraform(this._fallbackAction),
      max_filesize: cdktf.numberToTerraform(this._maxFilesize),
      mime_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mimeWhitelist),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      url_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlWhitelist),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fallback_action: {
        value: cdktf.stringToHclTerraform(this._fallbackAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_filesize: {
        value: cdktf.numberToHclTerraform(this._maxFilesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mime_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mimeWhitelist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlWhitelist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
