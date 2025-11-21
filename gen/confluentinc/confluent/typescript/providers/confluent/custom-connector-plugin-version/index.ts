// https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomConnectorPluginVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#cloud CustomConnectorPluginVersion#cloud}
  */
  readonly cloud: string;
  /**
  * A documentation link of the Custom Connector Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#documentation_link CustomConnectorPluginVersion#documentation_link}
  */
  readonly documentationLink?: string;
  /**
  * The path to the file that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#filename CustomConnectorPluginVersion#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#id CustomConnectorPluginVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Plugin Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#plugin_id CustomConnectorPluginVersion#plugin_id}
  */
  readonly pluginId: string;
  /**
  * A list of sensitive properties where a sensitive property is a connector configuration property that must be hidden after a user enters property value when setting up connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#sensitive_config_properties CustomConnectorPluginVersion#sensitive_config_properties}
  */
  readonly sensitiveConfigProperties?: string[];
  /**
  * The version of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#version CustomConnectorPluginVersion#version}
  */
  readonly version: string;
  /**
  * connector_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#connector_class CustomConnectorPluginVersion#connector_class}
  */
  readonly connectorClass: CustomConnectorPluginVersionConnectorClass[] | cdktf.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#environment CustomConnectorPluginVersion#environment}
  */
  readonly environment: CustomConnectorPluginVersionEnvironment;
}
export interface CustomConnectorPluginVersionConnectorClass {
  /**
  * Java class or alias for connector. You can get connector class from connector documentation provided by developer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#connector_class_name CustomConnectorPluginVersion#connector_class_name}
  */
  readonly connectorClassName: string;
  /**
  * Custom Connector type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#connector_type CustomConnectorPluginVersion#connector_type}
  */
  readonly connectorType: string;
}

export function customConnectorPluginVersionConnectorClassToTerraform(struct?: CustomConnectorPluginVersionConnectorClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_class_name: cdktf.stringToTerraform(struct!.connectorClassName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
  }
}


export function customConnectorPluginVersionConnectorClassToHclTerraform(struct?: CustomConnectorPluginVersionConnectorClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_class_name: {
      value: cdktf.stringToHclTerraform(struct!.connectorClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomConnectorPluginVersionConnectorClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomConnectorPluginVersionConnectorClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorClassName = this._connectorClassName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomConnectorPluginVersionConnectorClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorClassName = undefined;
      this._connectorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorClassName = value.connectorClassName;
      this._connectorType = value.connectorType;
    }
  }

  // connector_class_name - computed: false, optional: false, required: true
  private _connectorClassName?: string; 
  public get connectorClassName() {
    return this.getStringAttribute('connector_class_name');
  }
  public set connectorClassName(value: string) {
    this._connectorClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorClassNameInput() {
    return this._connectorClassName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }
}

export class CustomConnectorPluginVersionConnectorClassList extends cdktf.ComplexList {
  public internalValue? : CustomConnectorPluginVersionConnectorClass[] | cdktf.IResolvable

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
  public get(index: number): CustomConnectorPluginVersionConnectorClassOutputReference {
    return new CustomConnectorPluginVersionConnectorClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomConnectorPluginVersionEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#id CustomConnectorPluginVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function customConnectorPluginVersionEnvironmentToTerraform(struct?: CustomConnectorPluginVersionEnvironmentOutputReference | CustomConnectorPluginVersionEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function customConnectorPluginVersionEnvironmentToHclTerraform(struct?: CustomConnectorPluginVersionEnvironmentOutputReference | CustomConnectorPluginVersionEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomConnectorPluginVersionEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomConnectorPluginVersionEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomConnectorPluginVersionEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version confluent_custom_connector_plugin_version}
*/
export class CustomConnectorPluginVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_custom_connector_plugin_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomConnectorPluginVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomConnectorPluginVersion to import
  * @param importFromId The id of the existing CustomConnectorPluginVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomConnectorPluginVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_custom_connector_plugin_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/custom_connector_plugin_version confluent_custom_connector_plugin_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomConnectorPluginVersionConfig
  */
  public constructor(scope: Construct, id: string, config: CustomConnectorPluginVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_custom_connector_plugin_version',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.54.0',
        providerVersionConstraint: '2.54.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud = config.cloud;
    this._documentationLink = config.documentationLink;
    this._filename = config.filename;
    this._id = config.id;
    this._pluginId = config.pluginId;
    this._sensitiveConfigProperties = config.sensitiveConfigProperties;
    this._version = config.version;
    this._connectorClass.internalValue = config.connectorClass;
    this._environment.internalValue = config.environment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // documentation_link - computed: false, optional: true, required: false
  private _documentationLink?: string; 
  public get documentationLink() {
    return this.getStringAttribute('documentation_link');
  }
  public set documentationLink(value: string) {
    this._documentationLink = value;
  }
  public resetDocumentationLink() {
    this._documentationLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationLinkInput() {
    return this._documentationLink;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }

  // sensitive_config_properties - computed: false, optional: true, required: false
  private _sensitiveConfigProperties?: string[]; 
  public get sensitiveConfigProperties() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitive_config_properties'));
  }
  public set sensitiveConfigProperties(value: string[]) {
    this._sensitiveConfigProperties = value;
  }
  public resetSensitiveConfigProperties() {
    this._sensitiveConfigProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveConfigPropertiesInput() {
    return this._sensitiveConfigProperties;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // connector_class - computed: false, optional: false, required: true
  private _connectorClass = new CustomConnectorPluginVersionConnectorClassList(this, "connector_class", true);
  public get connectorClass() {
    return this._connectorClass;
  }
  public putConnectorClass(value: CustomConnectorPluginVersionConnectorClass[] | cdktf.IResolvable) {
    this._connectorClass.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorClassInput() {
    return this._connectorClass.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new CustomConnectorPluginVersionEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: CustomConnectorPluginVersionEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.stringToTerraform(this._cloud),
      documentation_link: cdktf.stringToTerraform(this._documentationLink),
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      sensitive_config_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveConfigProperties),
      version: cdktf.stringToTerraform(this._version),
      connector_class: cdktf.listMapper(customConnectorPluginVersionConnectorClassToTerraform, true)(this._connectorClass.internalValue),
      environment: customConnectorPluginVersionEnvironmentToTerraform(this._environment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      documentation_link: {
        value: cdktf.stringToHclTerraform(this._documentationLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
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
      plugin_id: {
        value: cdktf.stringToHclTerraform(this._pluginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_config_properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveConfigProperties),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_class: {
        value: cdktf.listMapperHcl(customConnectorPluginVersionConnectorClassToHclTerraform, true)(this._connectorClass.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CustomConnectorPluginVersionConnectorClassList",
      },
      environment: {
        value: customConnectorPluginVersionEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomConnectorPluginVersionEnvironmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
