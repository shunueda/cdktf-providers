// https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/auth0_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCurl2Auth0TokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The audience for the token, which is your API. Example: "https://xyz.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/auth0_token#audience DataCurl2Auth0Token#audience}
  */
  readonly audience: string;
}
export interface DataCurl2Auth0TokenResponse {
}

export function dataCurl2Auth0TokenResponseToTerraform(struct?: DataCurl2Auth0TokenResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCurl2Auth0TokenResponseToHclTerraform(struct?: DataCurl2Auth0TokenResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCurl2Auth0TokenResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCurl2Auth0TokenResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCurl2Auth0TokenResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/auth0_token curl2_auth0_token}
*/
export class DataCurl2Auth0Token extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "curl2_auth0_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCurl2Auth0Token resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCurl2Auth0Token to import
  * @param importFromId The id of the existing DataCurl2Auth0Token that should be imported. Refer to the {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/auth0_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCurl2Auth0Token to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "curl2_auth0_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/auth0_token curl2_auth0_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCurl2Auth0TokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataCurl2Auth0TokenConfig) {
    super(scope, id, {
      terraformResourceType: 'curl2_auth0_token',
      terraformGeneratorMetadata: {
        providerName: 'curl2',
        providerVersion: '1.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audience = config.audience;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataCurl2Auth0TokenResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktf.stringToTerraform(this._audience),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
