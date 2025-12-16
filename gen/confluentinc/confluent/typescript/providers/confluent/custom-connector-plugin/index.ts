// https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomConnectorPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#cloud CustomConnectorPlugin#cloud}
  */
  readonly cloud?: string;
  /**
  * Java class or alias for connector. You can get connector class from connector documentation provided by developer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#connector_class CustomConnectorPlugin#connector_class}
  */
  readonly connectorClass: string;
  /**
  * Custom Connector type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#connector_type CustomConnectorPlugin#connector_type}
  */
  readonly connectorType: string;
  /**
  * A free-form description of the Custom Connector Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#description CustomConnectorPlugin#description}
  */
  readonly description?: string;
  /**
  * A human-readable name for the Custom Connector Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#display_name CustomConnectorPlugin#display_name}
  */
  readonly displayName: string;
  /**
  * A documentation link of the Custom Connector Plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#documentation_link CustomConnectorPlugin#documentation_link}
  */
  readonly documentationLink?: string;
  /**
  * The path to the file that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#filename CustomConnectorPlugin#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#id CustomConnectorPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of sensitive properties where a sensitive property is a connector configuration property that must be hidden after a user enters property value when setting up connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#sensitive_config_properties CustomConnectorPlugin#sensitive_config_properties}
  */
  readonly sensitiveConfigProperties?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin confluent_custom_connector_plugin}
*/
export class CustomConnectorPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_custom_connector_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomConnectorPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomConnectorPlugin to import
  * @param importFromId The id of the existing CustomConnectorPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomConnectorPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_custom_connector_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/custom_connector_plugin confluent_custom_connector_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomConnectorPluginConfig
  */
  public constructor(scope: Construct, id: string, config: CustomConnectorPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_custom_connector_plugin',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.56.0',
        providerVersionConstraint: '2.56.0'
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
    this._connectorClass = config.connectorClass;
    this._connectorType = config.connectorType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentationLink = config.documentationLink;
    this._filename = config.filename;
    this._id = config.id;
    this._sensitiveConfigProperties = config.sensitiveConfigProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: true, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // connector_class - computed: false, optional: false, required: true
  private _connectorClass?: string; 
  public get connectorClass() {
    return this.getStringAttribute('connector_class');
  }
  public set connectorClass(value: string) {
    this._connectorClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorClassInput() {
    return this._connectorClass;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.stringToTerraform(this._cloud),
      connector_class: cdktf.stringToTerraform(this._connectorClass),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      documentation_link: cdktf.stringToTerraform(this._documentationLink),
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      sensitive_config_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveConfigProperties),
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
      connector_class: {
        value: cdktf.stringToHclTerraform(this._connectorClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type: {
        value: cdktf.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      sensitive_config_properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveConfigProperties),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
