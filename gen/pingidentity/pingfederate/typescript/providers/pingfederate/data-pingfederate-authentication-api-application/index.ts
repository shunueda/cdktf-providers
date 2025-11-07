// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateAuthenticationApiApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The persistent, unique ID for the Authentication API application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_application#application_id DataPingfederateAuthenticationApiApplication#application_id}
  */
  readonly applicationId: string;
}
export interface DataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRef {
}

export function dataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRefToTerraform(struct?: DataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRefToHclTerraform(struct?: DataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_application pingfederate_authentication_api_application}
*/
export class DataPingfederateAuthenticationApiApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_api_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateAuthenticationApiApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateAuthenticationApiApplication to import
  * @param importFromId The id of the existing DataPingfederateAuthenticationApiApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateAuthenticationApiApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_api_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_application pingfederate_authentication_api_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateAuthenticationApiApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateAuthenticationApiApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_api_application',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_allowed_origins - computed: true, optional: false, required: false
  public get additionalAllowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_allowed_origins'));
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // client_for_redirectless_mode_ref - computed: true, optional: false, required: false
  private _clientForRedirectlessModeRef = new DataPingfederateAuthenticationApiApplicationClientForRedirectlessModeRefOutputReference(this, "client_for_redirectless_mode_ref");
  public get clientForRedirectlessModeRef() {
    return this._clientForRedirectlessModeRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
