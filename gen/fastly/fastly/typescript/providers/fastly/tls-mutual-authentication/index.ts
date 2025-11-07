// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsMutualAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of TLS Activation IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication#activation_ids TlsMutualAuthentication#activation_ids}
  */
  readonly activationIds?: string[];
  /**
  * One or more certificates. Enter each individual certificate blob on a new line. Must be PEM-formatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication#cert_bundle TlsMutualAuthentication#cert_bundle}
  */
  readonly certBundle: string;
  /**
  * Determines whether Mutual TLS will fail closed (enforced) or fail open. A true value will require a successful Mutual TLS handshake for the connection to continue and will fail closed if unsuccessful. A false value will fail open and allow the connection to proceed (if this attribute is not set we default to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication#enforced TlsMutualAuthentication#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication#id TlsMutualAuthentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A comma-separated list used by the Terraform provider during a state refresh to return more data related to your mutual authentication from the Fastly API (permitted values: `tls_activations`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication#include TlsMutualAuthentication#include}
  */
  readonly include?: string;
  /**
  * A custom name for your mutual authentication. If name is not supplied we will auto-generate one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication#name TlsMutualAuthentication#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication fastly_tls_mutual_authentication}
*/
export class TlsMutualAuthentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_tls_mutual_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsMutualAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsMutualAuthentication to import
  * @param importFromId The id of the existing TlsMutualAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsMutualAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_tls_mutual_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/tls_mutual_authentication fastly_tls_mutual_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsMutualAuthenticationConfig
  */
  public constructor(scope: Construct, id: string, config: TlsMutualAuthenticationConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_tls_mutual_authentication',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationIds = config.activationIds;
    this._certBundle = config.certBundle;
    this._enforced = config.enforced;
    this._id = config.id;
    this._include = config.include;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_ids - computed: false, optional: true, required: false
  private _activationIds?: string[]; 
  public get activationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('activation_ids'));
  }
  public set activationIds(value: string[]) {
    this._activationIds = value;
  }
  public resetActivationIds() {
    this._activationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationIdsInput() {
    return this._activationIds;
  }

  // cert_bundle - computed: false, optional: false, required: true
  private _certBundle?: string; 
  public get certBundle() {
    return this.getStringAttribute('cert_bundle');
  }
  public set certBundle(value: string) {
    this._certBundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certBundleInput() {
    return this._certBundle;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enforced - computed: true, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
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

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tls_activations - computed: true, optional: false, required: false
  public get tlsActivations() {
    return this.getListAttribute('tls_activations');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activationIds),
      cert_bundle: cdktf.stringToTerraform(this._certBundle),
      enforced: cdktf.booleanToTerraform(this._enforced),
      id: cdktf.stringToTerraform(this._id),
      include: cdktf.stringToTerraform(this._include),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activationIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cert_bundle: {
        value: cdktf.stringToHclTerraform(this._certBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforced: {
        value: cdktf.booleanToHclTerraform(this._enforced),
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
      include: {
        value: cdktf.stringToHclTerraform(this._include),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
