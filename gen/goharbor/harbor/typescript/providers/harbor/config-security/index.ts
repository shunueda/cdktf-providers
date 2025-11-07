// https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_security#cve_allowlist ConfigSecurity#cve_allowlist}
  */
  readonly cveAllowlist: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_security#expires_at ConfigSecurity#expires_at}
  */
  readonly expiresAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_security#id ConfigSecurity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_security harbor_config_security}
*/
export class ConfigSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_config_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigSecurity to import
  * @param importFromId The id of the existing ConfigSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_config_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_security harbor_config_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_config_security',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cveAllowlist = config.cveAllowlist;
    this._expiresAt = config.expiresAt;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // cve_allowlist - computed: false, optional: false, required: true
  private _cveAllowlist?: string[]; 
  public get cveAllowlist() {
    return this.getListAttribute('cve_allowlist');
  }
  public set cveAllowlist(value: string[]) {
    this._cveAllowlist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cveAllowlistInput() {
    return this._cveAllowlist;
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: number; 
  public get expiresAt() {
    return this.getNumberAttribute('expires_at');
  }
  public set expiresAt(value: number) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cve_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cveAllowlist),
      expires_at: cdktf.numberToTerraform(this._expiresAt),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cve_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cveAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      expires_at: {
        value: cdktf.numberToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
