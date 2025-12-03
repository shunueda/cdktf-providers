// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseXmlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config#id ClickhouseXmlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config#instance_id ClickhouseXmlConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * modify_conf_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config#modify_conf_context ClickhouseXmlConfig#modify_conf_context}
  */
  readonly modifyConfContext: ClickhouseXmlConfigModifyConfContext;
}
export interface ClickhouseXmlConfigModifyConfContext {
  /**
  * Configuration file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config#file_name ClickhouseXmlConfig#file_name}
  */
  readonly fileName: string;
  /**
  * Path to save configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config#file_path ClickhouseXmlConfig#file_path}
  */
  readonly filePath?: string;
  /**
  * New content of configuration file, base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config#new_conf_value ClickhouseXmlConfig#new_conf_value}
  */
  readonly newConfValue: string;
}

export function clickhouseXmlConfigModifyConfContextToTerraform(struct?: ClickhouseXmlConfigModifyConfContextOutputReference | ClickhouseXmlConfigModifyConfContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    new_conf_value: cdktf.stringToTerraform(struct!.newConfValue),
  }
}


export function clickhouseXmlConfigModifyConfContextToHclTerraform(struct?: ClickhouseXmlConfigModifyConfContextOutputReference | ClickhouseXmlConfigModifyConfContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_conf_value: {
      value: cdktf.stringToHclTerraform(struct!.newConfValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseXmlConfigModifyConfContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseXmlConfigModifyConfContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._newConfValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newConfValue = this._newConfValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseXmlConfigModifyConfContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileName = undefined;
      this._filePath = undefined;
      this._newConfValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileName = value.fileName;
      this._filePath = value.filePath;
      this._newConfValue = value.newConfValue;
    }
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // new_conf_value - computed: false, optional: false, required: true
  private _newConfValue?: string; 
  public get newConfValue() {
    return this.getStringAttribute('new_conf_value');
  }
  public set newConfValue(value: string) {
    this._newConfValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newConfValueInput() {
    return this._newConfValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config tencentcloud_clickhouse_xml_config}
*/
export class ClickhouseXmlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clickhouse_xml_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseXmlConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseXmlConfig to import
  * @param importFromId The id of the existing ClickhouseXmlConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseXmlConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clickhouse_xml_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/clickhouse_xml_config tencentcloud_clickhouse_xml_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseXmlConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhouseXmlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clickhouse_xml_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._modifyConfContext.internalValue = config.modifyConfContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // modify_conf_context - computed: false, optional: false, required: true
  private _modifyConfContext = new ClickhouseXmlConfigModifyConfContextOutputReference(this, "modify_conf_context");
  public get modifyConfContext() {
    return this._modifyConfContext;
  }
  public putModifyConfContext(value: ClickhouseXmlConfigModifyConfContext) {
    this._modifyConfContext.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyConfContextInput() {
    return this._modifyConfContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      modify_conf_context: clickhouseXmlConfigModifyConfContextToTerraform(this._modifyConfContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_conf_context: {
        value: clickhouseXmlConfigModifyConfContextToHclTerraform(this._modifyConfContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseXmlConfigModifyConfContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
