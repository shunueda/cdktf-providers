// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateAuthenticationApiSettingsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPingfederateAuthenticationApiSettingsDefaultApplicationRef {
}

export function dataPingfederateAuthenticationApiSettingsDefaultApplicationRefToTerraform(struct?: DataPingfederateAuthenticationApiSettingsDefaultApplicationRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateAuthenticationApiSettingsDefaultApplicationRefToHclTerraform(struct?: DataPingfederateAuthenticationApiSettingsDefaultApplicationRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateAuthenticationApiSettingsDefaultApplicationRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateAuthenticationApiSettingsDefaultApplicationRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateAuthenticationApiSettingsDefaultApplicationRef | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_settings pingfederate_authentication_api_settings}
*/
export class DataPingfederateAuthenticationApiSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_api_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateAuthenticationApiSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateAuthenticationApiSettings to import
  * @param importFromId The id of the existing DataPingfederateAuthenticationApiSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateAuthenticationApiSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_api_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_api_settings pingfederate_authentication_api_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateAuthenticationApiSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateAuthenticationApiSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_api_settings',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_enabled - computed: true, optional: false, required: false
  public get apiEnabled() {
    return this.getBooleanAttribute('api_enabled');
  }

  // default_application_ref - computed: true, optional: false, required: false
  private _defaultApplicationRef = new DataPingfederateAuthenticationApiSettingsDefaultApplicationRefOutputReference(this, "default_application_ref");
  public get defaultApplicationRef() {
    return this._defaultApplicationRef;
  }

  // enable_api_descriptions - computed: true, optional: false, required: false
  public get enableApiDescriptions() {
    return this.getBooleanAttribute('enable_api_descriptions');
  }

  // include_request_context - computed: true, optional: false, required: false
  public get includeRequestContext() {
    return this.getBooleanAttribute('include_request_context');
  }

  // restrict_access_to_redirectless_mode - computed: true, optional: false, required: false
  public get restrictAccessToRedirectlessMode() {
    return this.getBooleanAttribute('restrict_access_to_redirectless_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
