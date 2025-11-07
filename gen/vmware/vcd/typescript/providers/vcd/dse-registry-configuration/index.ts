// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DseRegistryConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Chart repository to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#chart_repository DseRegistryConfiguration#chart_repository}
  */
  readonly chartRepository?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#id DseRegistryConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Data Solution Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#name DseRegistryConfiguration#name}
  */
  readonly name?: string;
  /**
  * Package name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#package_name DseRegistryConfiguration#package_name}
  */
  readonly packageName?: string;
  /**
  * Package repository to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#package_repository DseRegistryConfiguration#package_repository}
  */
  readonly packageRepository?: string;
  /**
  * Use the default settings as provided by the Data Solution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#use_default_values DseRegistryConfiguration#use_default_values}
  */
  readonly useDefaultValues?: boolean | cdktf.IResolvable;
  /**
  * Version of package to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#version DseRegistryConfiguration#version}
  */
  readonly version?: string;
  /**
  * container_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#container_registry DseRegistryConfiguration#container_registry}
  */
  readonly containerRegistry?: DseRegistryConfigurationContainerRegistry[] | cdktf.IResolvable;
}
export interface DseRegistryConfigurationContainerRegistry {
  /**
  * Registry description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#description DseRegistryConfiguration#description}
  */
  readonly description: string;
  /**
  * Registry host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#host DseRegistryConfiguration#host}
  */
  readonly host: string;
  /**
  * Password for registry user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#password DseRegistryConfiguration#password}
  */
  readonly password?: string;
  /**
  * Username for registry access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#username DseRegistryConfiguration#username}
  */
  readonly username?: string;
}

export function dseRegistryConfigurationContainerRegistryToTerraform(struct?: DseRegistryConfigurationContainerRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dseRegistryConfigurationContainerRegistryToHclTerraform(struct?: DseRegistryConfigurationContainerRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DseRegistryConfigurationContainerRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DseRegistryConfigurationContainerRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DseRegistryConfigurationContainerRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._host = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._host = value.host;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DseRegistryConfigurationContainerRegistryList extends cdktf.ComplexList {
  public internalValue? : DseRegistryConfigurationContainerRegistry[] | cdktf.IResolvable

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
  public get(index: number): DseRegistryConfigurationContainerRegistryOutputReference {
    return new DseRegistryConfigurationContainerRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration vcd_dse_registry_configuration}
*/
export class DseRegistryConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_dse_registry_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DseRegistryConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DseRegistryConfiguration to import
  * @param importFromId The id of the existing DseRegistryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DseRegistryConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_dse_registry_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/dse_registry_configuration vcd_dse_registry_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DseRegistryConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DseRegistryConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_dse_registry_configuration',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chartRepository = config.chartRepository;
    this._id = config.id;
    this._name = config.name;
    this._packageName = config.packageName;
    this._packageRepository = config.packageRepository;
    this._useDefaultValues = config.useDefaultValues;
    this._version = config.version;
    this._containerRegistry.internalValue = config.containerRegistry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chart_repository - computed: true, optional: true, required: false
  private _chartRepository?: string; 
  public get chartRepository() {
    return this.getStringAttribute('chart_repository');
  }
  public set chartRepository(value: string) {
    this._chartRepository = value;
  }
  public resetChartRepository() {
    this._chartRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartRepositoryInput() {
    return this._chartRepository;
  }

  // compatible_version_constraints - computed: true, optional: false, required: false
  public get compatibleVersionConstraints() {
    return cdktf.Fn.tolist(this.getListAttribute('compatible_version_constraints'));
  }

  // default_chart_repository - computed: true, optional: false, required: false
  public get defaultChartRepository() {
    return this.getStringAttribute('default_chart_repository');
  }

  // default_package_name - computed: true, optional: false, required: false
  public get defaultPackageName() {
    return this.getStringAttribute('default_package_name');
  }

  // default_repository - computed: true, optional: false, required: false
  public get defaultRepository() {
    return this.getStringAttribute('default_repository');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
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

  // name - computed: false, optional: true, required: false
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

  // package_name - computed: true, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_repository - computed: true, optional: true, required: false
  private _packageRepository?: string; 
  public get packageRepository() {
    return this.getStringAttribute('package_repository');
  }
  public set packageRepository(value: string) {
    this._packageRepository = value;
  }
  public resetPackageRepository() {
    this._packageRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRepositoryInput() {
    return this._packageRepository;
  }

  // rde_state - computed: true, optional: false, required: false
  public get rdeState() {
    return this.getStringAttribute('rde_state');
  }

  // requires_version_compatibility - computed: true, optional: false, required: false
  public get requiresVersionCompatibility() {
    return this.getBooleanAttribute('requires_version_compatibility');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_default_values - computed: false, optional: true, required: false
  private _useDefaultValues?: boolean | cdktf.IResolvable; 
  public get useDefaultValues() {
    return this.getBooleanAttribute('use_default_values');
  }
  public set useDefaultValues(value: boolean | cdktf.IResolvable) {
    this._useDefaultValues = value;
  }
  public resetUseDefaultValues() {
    this._useDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultValuesInput() {
    return this._useDefaultValues;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // container_registry - computed: false, optional: true, required: false
  private _containerRegistry = new DseRegistryConfigurationContainerRegistryList(this, "container_registry", true);
  public get containerRegistry() {
    return this._containerRegistry;
  }
  public putContainerRegistry(value: DseRegistryConfigurationContainerRegistry[] | cdktf.IResolvable) {
    this._containerRegistry.internalValue = value;
  }
  public resetContainerRegistry() {
    this._containerRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryInput() {
    return this._containerRegistry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chart_repository: cdktf.stringToTerraform(this._chartRepository),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      package_name: cdktf.stringToTerraform(this._packageName),
      package_repository: cdktf.stringToTerraform(this._packageRepository),
      use_default_values: cdktf.booleanToTerraform(this._useDefaultValues),
      version: cdktf.stringToTerraform(this._version),
      container_registry: cdktf.listMapper(dseRegistryConfigurationContainerRegistryToTerraform, true)(this._containerRegistry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chart_repository: {
        value: cdktf.stringToHclTerraform(this._chartRepository),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_name: {
        value: cdktf.stringToHclTerraform(this._packageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_repository: {
        value: cdktf.stringToHclTerraform(this._packageRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_values: {
        value: cdktf.booleanToHclTerraform(this._useDefaultValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_registry: {
        value: cdktf.listMapperHcl(dseRegistryConfigurationContainerRegistryToHclTerraform, true)(this._containerRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DseRegistryConfigurationContainerRegistryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
