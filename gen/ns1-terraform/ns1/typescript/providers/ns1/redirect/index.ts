// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedirectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#certificate_id Redirect#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#domain Redirect#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#forwarding_mode Redirect#forwarding_mode}
  */
  readonly forwardingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#forwarding_type Redirect#forwarding_type}
  */
  readonly forwardingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#https_forced Redirect#https_forced}
  */
  readonly httpsForced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#path Redirect#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#query_forwarding Redirect#query_forwarding}
  */
  readonly queryForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#tags Redirect#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#target Redirect#target}
  */
  readonly target: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect ns1_redirect}
*/
export class Redirect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_redirect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Redirect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Redirect to import
  * @param importFromId The id of the existing Redirect that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Redirect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_redirect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/redirect ns1_redirect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedirectConfig
  */
  public constructor(scope: Construct, id: string, config: RedirectConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_redirect',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._domain = config.domain;
    this._forwardingMode = config.forwardingMode;
    this._forwardingType = config.forwardingType;
    this._httpsForced = config.httpsForced;
    this._path = config.path;
    this._queryForwarding = config.queryForwarding;
    this._tags = config.tags;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // forwarding_mode - computed: false, optional: true, required: false
  private _forwardingMode?: string; 
  public get forwardingMode() {
    return this.getStringAttribute('forwarding_mode');
  }
  public set forwardingMode(value: string) {
    this._forwardingMode = value;
  }
  public resetForwardingMode() {
    this._forwardingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingModeInput() {
    return this._forwardingMode;
  }

  // forwarding_type - computed: false, optional: true, required: false
  private _forwardingType?: string; 
  public get forwardingType() {
    return this.getStringAttribute('forwarding_type');
  }
  public set forwardingType(value: string) {
    this._forwardingType = value;
  }
  public resetForwardingType() {
    this._forwardingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingTypeInput() {
    return this._forwardingType;
  }

  // https_enabled - computed: true, optional: false, required: false
  public get httpsEnabled() {
    return this.getBooleanAttribute('https_enabled');
  }

  // https_forced - computed: true, optional: true, required: false
  private _httpsForced?: boolean | cdktf.IResolvable; 
  public get httpsForced() {
    return this.getBooleanAttribute('https_forced');
  }
  public set httpsForced(value: boolean | cdktf.IResolvable) {
    this._httpsForced = value;
  }
  public resetHttpsForced() {
    this._httpsForced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsForcedInput() {
    return this._httpsForced;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // query_forwarding - computed: false, optional: true, required: false
  private _queryForwarding?: boolean | cdktf.IResolvable; 
  public get queryForwarding() {
    return this.getBooleanAttribute('query_forwarding');
  }
  public set queryForwarding(value: boolean | cdktf.IResolvable) {
    this._queryForwarding = value;
  }
  public resetQueryForwarding() {
    this._queryForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForwardingInput() {
    return this._queryForwarding;
  }

  // tags - computed: false, optional: true, required: false
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      domain: cdktf.stringToTerraform(this._domain),
      forwarding_mode: cdktf.stringToTerraform(this._forwardingMode),
      forwarding_type: cdktf.stringToTerraform(this._forwardingType),
      https_forced: cdktf.booleanToTerraform(this._httpsForced),
      path: cdktf.stringToTerraform(this._path),
      query_forwarding: cdktf.booleanToTerraform(this._queryForwarding),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target: cdktf.stringToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
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
      forwarding_mode: {
        value: cdktf.stringToHclTerraform(this._forwardingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_type: {
        value: cdktf.stringToHclTerraform(this._forwardingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_forced: {
        value: cdktf.booleanToHclTerraform(this._httpsForced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_forwarding: {
        value: cdktf.booleanToHclTerraform(this._queryForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
