// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branch needs to be valid git repository branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#branch ConfigRepository#branch}
  */
  readonly branch: string;
  /**
  * The canonical of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#canonical ConfigRepository#canonical}
  */
  readonly canonical?: string;
  /**
  * The canonical of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#credential_canonical ConfigRepository#credential_canonical}
  */
  readonly credentialCanonical: string;
  /**
  * Whether the given entity is default one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#default ConfigRepository#default}
  */
  readonly default: boolean | cdktf.IResolvable;
  /**
  * The name of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#name ConfigRepository#name}
  */
  readonly name: string;
  /**
  * A canonical of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#organization_canonical ConfigRepository#organization_canonical}
  */
  readonly organizationCanonical?: string;
  /**
  * GitURL represents all git URL formats we accept.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#url ConfigRepository#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository cycloid_config_repository}
*/
export class ConfigRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_config_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigRepository to import
  * @param importFromId The id of the existing ConfigRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_config_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/config_repository cycloid_config_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_config_repository',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.23',
        providerVersionConstraint: '0.0.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._canonical = config.canonical;
    this._credentialCanonical = config.credentialCanonical;
    this._default = config.default;
    this._name = config.name;
    this._organizationCanonical = config.organizationCanonical;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // canonical - computed: true, optional: true, required: false
  private _canonical?: string; 
  public get canonical() {
    return this.getStringAttribute('canonical');
  }
  public set canonical(value: string) {
    this._canonical = value;
  }
  public resetCanonical() {
    this._canonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalInput() {
    return this._canonical;
  }

  // credential_canonical - computed: false, optional: false, required: true
  private _credentialCanonical?: string; 
  public get credentialCanonical() {
    return this.getStringAttribute('credential_canonical');
  }
  public set credentialCanonical(value: string) {
    this._credentialCanonical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialCanonicalInput() {
    return this._credentialCanonical;
  }

  // default - computed: false, optional: false, required: true
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // organization_canonical - computed: true, optional: true, required: false
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  public resetOrganizationCanonical() {
    this._organizationCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      canonical: cdktf.stringToTerraform(this._canonical),
      credential_canonical: cdktf.stringToTerraform(this._credentialCanonical),
      default: cdktf.booleanToTerraform(this._default),
      name: cdktf.stringToTerraform(this._name),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      canonical: {
        value: cdktf.stringToHclTerraform(this._canonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_canonical: {
        value: cdktf.stringToHclTerraform(this._credentialCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
