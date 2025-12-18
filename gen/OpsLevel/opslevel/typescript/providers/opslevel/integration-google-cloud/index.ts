// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGoogleCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * The service account email OpsLevel uses to access the Google Cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud#client_email IntegrationGoogleCloud#client_email}
  */
  readonly clientEmail: string;
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud#name IntegrationGoogleCloud#name}
  */
  readonly name: string;
  /**
  * An Array of tag keys used to associate ownership from an integration. Max 5 (default = ["owner"])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud#ownership_tag_keys IntegrationGoogleCloud#ownership_tag_keys}
  */
  readonly ownershipTagKeys?: string[];
  /**
  * Allow tags imported from Google Cloud to override ownership set in OpsLevel directly. (default = true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud#ownership_tag_overrides IntegrationGoogleCloud#ownership_tag_overrides}
  */
  readonly ownershipTagOverrides?: boolean | cdktf.IResolvable;
  /**
  * The private key for the service account that OpsLevel uses to access the Google Cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud#private_key IntegrationGoogleCloud#private_key}
  */
  readonly privateKey: string;
}
export interface IntegrationGoogleCloudProjects {
}

export function integrationGoogleCloudProjectsToTerraform(struct?: IntegrationGoogleCloudProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationGoogleCloudProjectsToHclTerraform(struct?: IntegrationGoogleCloudProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationGoogleCloudProjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationGoogleCloudProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGoogleCloudProjects | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class IntegrationGoogleCloudProjectsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationGoogleCloudProjectsOutputReference {
    return new IntegrationGoogleCloudProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud opslevel_integration_google_cloud}
*/
export class IntegrationGoogleCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_integration_google_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGoogleCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGoogleCloud to import
  * @param importFromId The id of the existing IntegrationGoogleCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGoogleCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_integration_google_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/integration_google_cloud opslevel_integration_google_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGoogleCloudConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGoogleCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_integration_google_cloud',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientEmail = config.clientEmail;
    this._name = config.name;
    this._ownershipTagKeys = config.ownershipTagKeys;
    this._ownershipTagOverrides = config.ownershipTagOverrides;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installed_at - computed: true, optional: false, required: false
  public get installedAt() {
    return this.getStringAttribute('installed_at');
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

  // ownership_tag_keys - computed: true, optional: true, required: false
  private _ownershipTagKeys?: string[]; 
  public get ownershipTagKeys() {
    return this.getListAttribute('ownership_tag_keys');
  }
  public set ownershipTagKeys(value: string[]) {
    this._ownershipTagKeys = value;
  }
  public resetOwnershipTagKeys() {
    this._ownershipTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipTagKeysInput() {
    return this._ownershipTagKeys;
  }

  // ownership_tag_overrides - computed: true, optional: true, required: false
  private _ownershipTagOverrides?: boolean | cdktf.IResolvable; 
  public get ownershipTagOverrides() {
    return this.getBooleanAttribute('ownership_tag_overrides');
  }
  public set ownershipTagOverrides(value: boolean | cdktf.IResolvable) {
    this._ownershipTagOverrides = value;
  }
  public resetOwnershipTagOverrides() {
    this._ownershipTagOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipTagOverridesInput() {
    return this._ownershipTagOverrides;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new IntegrationGoogleCloudProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_email: cdktf.stringToTerraform(this._clientEmail),
      name: cdktf.stringToTerraform(this._name),
      ownership_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownershipTagKeys),
      ownership_tag_overrides: cdktf.booleanToTerraform(this._ownershipTagOverrides),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
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
      ownership_tag_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownershipTagKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ownership_tag_overrides: {
        value: cdktf.booleanToHclTerraform(this._ownershipTagOverrides),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
