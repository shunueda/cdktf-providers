// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDiscoverySettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Correlation ID for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#correlation_id ServiceDiscoverySetting#correlation_id}
  */
  readonly correlationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#id ServiceDiscoverySetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#org_identifier ServiceDiscoverySetting#org_identifier}
  */
  readonly orgIdentifier?: string;
  /**
  * The project identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#project_identifier ServiceDiscoverySetting#project_identifier}
  */
  readonly projectIdentifier?: string;
  /**
  * image_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#image_registry ServiceDiscoverySetting#image_registry}
  */
  readonly imageRegistry?: ServiceDiscoverySettingImageRegistry;
}
export interface ServiceDiscoverySettingImageRegistry {
  /**
  * The account name for the image registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#account ServiceDiscoverySetting#account}
  */
  readonly account: string;
  /**
  * List of secrets for the image registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#secrets ServiceDiscoverySetting#secrets}
  */
  readonly secrets?: string[];
  /**
  * The server URL for the image registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#server ServiceDiscoverySetting#server}
  */
  readonly server: string;
}

export function serviceDiscoverySettingImageRegistryToTerraform(struct?: ServiceDiscoverySettingImageRegistryOutputReference | ServiceDiscoverySettingImageRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function serviceDiscoverySettingImageRegistryToHclTerraform(struct?: ServiceDiscoverySettingImageRegistryOutputReference | ServiceDiscoverySettingImageRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoverySettingImageRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDiscoverySettingImageRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoverySettingImageRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._secrets = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._secrets = value.secrets;
      this._server = value.server;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting harness_service_discovery_setting}
*/
export class ServiceDiscoverySetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_service_discovery_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDiscoverySetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDiscoverySetting to import
  * @param importFromId The id of the existing ServiceDiscoverySetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDiscoverySetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_service_discovery_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/service_discovery_setting harness_service_discovery_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDiscoverySettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceDiscoverySettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harness_service_discovery_setting',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._correlationId = config.correlationId;
    this._id = config.id;
    this._orgIdentifier = config.orgIdentifier;
    this._projectIdentifier = config.projectIdentifier;
    this._imageRegistry.internalValue = config.imageRegistry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // correlation_id - computed: false, optional: true, required: false
  private _correlationId?: string; 
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }
  public set correlationId(value: string) {
    this._correlationId = value;
  }
  public resetCorrelationId() {
    this._correlationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdInput() {
    return this._correlationId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // org_identifier - computed: false, optional: true, required: false
  private _orgIdentifier?: string; 
  public get orgIdentifier() {
    return this.getStringAttribute('org_identifier');
  }
  public set orgIdentifier(value: string) {
    this._orgIdentifier = value;
  }
  public resetOrgIdentifier() {
    this._orgIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdentifierInput() {
    return this._orgIdentifier;
  }

  // project_identifier - computed: false, optional: true, required: false
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  public resetProjectIdentifier() {
    this._projectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // image_registry - computed: false, optional: true, required: false
  private _imageRegistry = new ServiceDiscoverySettingImageRegistryOutputReference(this, "image_registry");
  public get imageRegistry() {
    return this._imageRegistry;
  }
  public putImageRegistry(value: ServiceDiscoverySettingImageRegistry) {
    this._imageRegistry.internalValue = value;
  }
  public resetImageRegistry() {
    this._imageRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      correlation_id: cdktf.stringToTerraform(this._correlationId),
      id: cdktf.stringToTerraform(this._id),
      org_identifier: cdktf.stringToTerraform(this._orgIdentifier),
      project_identifier: cdktf.stringToTerraform(this._projectIdentifier),
      image_registry: serviceDiscoverySettingImageRegistryToTerraform(this._imageRegistry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      correlation_id: {
        value: cdktf.stringToHclTerraform(this._correlationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_identifier: {
        value: cdktf.stringToHclTerraform(this._orgIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_identifier: {
        value: cdktf.stringToHclTerraform(this._projectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_registry: {
        value: serviceDiscoverySettingImageRegistryToHclTerraform(this._imageRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceDiscoverySettingImageRegistryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
