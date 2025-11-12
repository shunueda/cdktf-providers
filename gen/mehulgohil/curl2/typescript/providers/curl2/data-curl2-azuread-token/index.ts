// https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/azuread_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCurl2AzureadTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The value passed for the scope parameter in this request should be the resource identifier (application ID URI) of the resource you want, affixed with the .default suffix. Example: ["https://graph.microsoft.com/.default"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/azuread_token#scopes DataCurl2AzureadToken#scopes}
  */
  readonly scopes: string[];
}
export interface DataCurl2AzureadTokenResponse {
}

export function dataCurl2AzureadTokenResponseToTerraform(struct?: DataCurl2AzureadTokenResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCurl2AzureadTokenResponseToHclTerraform(struct?: DataCurl2AzureadTokenResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCurl2AzureadTokenResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCurl2AzureadTokenResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCurl2AzureadTokenResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/azuread_token curl2_azuread_token}
*/
export class DataCurl2AzureadToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "curl2_azuread_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCurl2AzureadToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCurl2AzureadToken to import
  * @param importFromId The id of the existing DataCurl2AzureadToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/azuread_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCurl2AzureadToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "curl2_azuread_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/azuread_token curl2_azuread_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCurl2AzureadTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataCurl2AzureadTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'curl2_azuread_token',
      terraformGeneratorMetadata: {
        providerName: 'curl2',
        providerVersion: '1.6.1',
        providerVersionConstraint: '1.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // response - computed: true, optional: false, required: false
  private _response = new DataCurl2AzureadTokenResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
