// https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * **Deprecation notice:** This attribute is deprecated and will be removed in a future release.  Flows are automatically deployed on import. A boolean that specifies whether to deploy the flow after import.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#deploy Flow#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies a description of the flow.  If the field is left undefined, the description from the flow export will be used.  If this field is left undefined and the flow export does not contain a description, the service will define a description on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#description Flow#description}
  */
  readonly description?: string;
  /**
  * The ID of the PingOne environment to import the DaVinci flow to.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#environment_id Flow#environment_id}
  */
  readonly environmentId: string;
  /**
  * The DaVinci Flow to import, in raw JSON format. Should be a JSON file of a single flow (without subflows) that has been exported from a source DaVinci environment.  Must be a valid JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#flow_json Flow#flow_json}
  */
  readonly flowJson: string;
  /**
  * An integer that specifies the log level for the flow. Valid values are: `1` (no logging), `2` (info logging - default), and `3` (debug logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#log_level Flow#log_level}
  */
  readonly logLevel?: number;
  /**
  * A string that identifies the flow name after import.  If the field is left blank, a flow name will be derived by the service from the name in the import JSON (the `flow_json` parameter).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#name Flow#name}
  */
  readonly name?: string;
  /**
  * connection_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#connection_link Flow#connection_link}
  */
  readonly connectionLink?: FlowConnectionLink[] | cdktf.IResolvable;
  /**
  * subflow_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#subflow_link Flow#subflow_link}
  */
  readonly subflowLink?: FlowSubflowLink[] | cdktf.IResolvable;
}
export interface FlowFlowVariables {
}

export function flowFlowVariablesToTerraform(struct?: FlowFlowVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function flowFlowVariablesToHclTerraform(struct?: FlowFlowVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FlowFlowVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowFlowVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowFlowVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class FlowFlowVariablesList extends cdktf.ComplexList {

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
  public get(index: number): FlowFlowVariablesOutputReference {
    return new FlowFlowVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowConnectionLink {
  /**
  * A string that specifies the connector ID that will be applied when flow is imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#id Flow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The connector name.  If `replace_import_connection_id` is also specified, this value is used when the flow is imported.  If `replace_import_connection_id` is not specified, the name must match that of the connector in the import file, so the connector ID in the `id` parameter can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#name Flow#name}
  */
  readonly name: string;
  /**
  * Connection ID of the connector in the import to replace with the connector described in `id` and `name` parameters.  This can be found in the source system in the "Connectors" menu, but is also at the following path in the JSON file: `[enabledGraphData|graphData].elements.nodes.data.connectionId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#replace_import_connection_id Flow#replace_import_connection_id}
  */
  readonly replaceImportConnectionId?: string;
}

export function flowConnectionLinkToTerraform(struct?: FlowConnectionLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    replace_import_connection_id: cdktf.stringToTerraform(struct!.replaceImportConnectionId),
  }
}


export function flowConnectionLinkToHclTerraform(struct?: FlowConnectionLink | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_import_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.replaceImportConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowConnectionLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowConnectionLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replaceImportConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceImportConnectionId = this._replaceImportConnectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowConnectionLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._replaceImportConnectionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._replaceImportConnectionId = value.replaceImportConnectionId;
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

  // replace_import_connection_id - computed: false, optional: true, required: false
  private _replaceImportConnectionId?: string; 
  public get replaceImportConnectionId() {
    return this.getStringAttribute('replace_import_connection_id');
  }
  public set replaceImportConnectionId(value: string) {
    this._replaceImportConnectionId = value;
  }
  public resetReplaceImportConnectionId() {
    this._replaceImportConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceImportConnectionIdInput() {
    return this._replaceImportConnectionId;
  }
}

export class FlowConnectionLinkList extends cdktf.ComplexList {
  public internalValue? : FlowConnectionLink[] | cdktf.IResolvable

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
  public get(index: number): FlowConnectionLinkOutputReference {
    return new FlowConnectionLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlowSubflowLink {
  /**
  * A string that specifies the subflow ID that will be applied when flow is imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#id Flow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The subflow name.  If `replace_import_subflow_id` is also specified, this value is used when the flow is imported.  If `replace_import_subflow_id` is not specified, the name must match that of the connector in the import file, so the connector ID in the `id` parameter can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#name Flow#name}
  */
  readonly name: string;
  /**
  * Subflow ID of the subflow in the import to replace with the subflow described in `id` and `name` parameters.  This can be found in the source system in the "Connectors" menu, but is also at the following path in the JSON file: `[enabledGraphData|graphData].elements.nodes.data.connectionId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#replace_import_subflow_id Flow#replace_import_subflow_id}
  */
  readonly replaceImportSubflowId?: string;
}

export function flowSubflowLinkToTerraform(struct?: FlowSubflowLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    replace_import_subflow_id: cdktf.stringToTerraform(struct!.replaceImportSubflowId),
  }
}


export function flowSubflowLinkToHclTerraform(struct?: FlowSubflowLink | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_import_subflow_id: {
      value: cdktf.stringToHclTerraform(struct!.replaceImportSubflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlowSubflowLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlowSubflowLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replaceImportSubflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceImportSubflowId = this._replaceImportSubflowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlowSubflowLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._replaceImportSubflowId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._replaceImportSubflowId = value.replaceImportSubflowId;
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

  // replace_import_subflow_id - computed: false, optional: true, required: false
  private _replaceImportSubflowId?: string; 
  public get replaceImportSubflowId() {
    return this.getStringAttribute('replace_import_subflow_id');
  }
  public set replaceImportSubflowId(value: string) {
    this._replaceImportSubflowId = value;
  }
  public resetReplaceImportSubflowId() {
    this._replaceImportSubflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceImportSubflowIdInput() {
    return this._replaceImportSubflowId;
  }
}

export class FlowSubflowLinkList extends cdktf.ComplexList {
  public internalValue? : FlowSubflowLink[] | cdktf.IResolvable

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
  public get(index: number): FlowSubflowLinkOutputReference {
    return new FlowSubflowLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow davinci_flow}
*/
export class Flow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "davinci_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Flow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Flow to import
  * @param importFromId The id of the existing Flow that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Flow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "davinci_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/flow davinci_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowConfig
  */
  public constructor(scope: Construct, id: string, config: FlowConfig) {
    super(scope, id, {
      terraformResourceType: 'davinci_flow',
      terraformGeneratorMetadata: {
        providerName: 'davinci',
        providerVersion: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploy = config.deploy;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._flowJson = config.flowJson;
    this._logLevel = config.logLevel;
    this._name = config.name;
    this._connectionLink.internalValue = config.connectionLink;
    this._subflowLink.internalValue = config.subflowLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // description - computed: true, optional: true, required: false
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // flow_configuration_json - computed: true, optional: false, required: false
  public get flowConfigurationJson() {
    return this.getStringAttribute('flow_configuration_json');
  }

  // flow_export_json - computed: true, optional: false, required: false
  public get flowExportJson() {
    return this.getStringAttribute('flow_export_json');
  }

  // flow_json - computed: false, optional: false, required: true
  private _flowJson?: string; 
  public get flowJson() {
    return this.getStringAttribute('flow_json');
  }
  public set flowJson(value: string) {
    this._flowJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowJsonInput() {
    return this._flowJson;
  }

  // flow_variables - computed: true, optional: false, required: false
  private _flowVariables = new FlowFlowVariablesList(this, "flow_variables", true);
  public get flowVariables() {
    return this._flowVariables;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }
  public set logLevel(value: number) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // name - computed: true, optional: true, required: false
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

  // connection_link - computed: false, optional: true, required: false
  private _connectionLink = new FlowConnectionLinkList(this, "connection_link", true);
  public get connectionLink() {
    return this._connectionLink;
  }
  public putConnectionLink(value: FlowConnectionLink[] | cdktf.IResolvable) {
    this._connectionLink.internalValue = value;
  }
  public resetConnectionLink() {
    this._connectionLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLinkInput() {
    return this._connectionLink.internalValue;
  }

  // subflow_link - computed: false, optional: true, required: false
  private _subflowLink = new FlowSubflowLinkList(this, "subflow_link", true);
  public get subflowLink() {
    return this._subflowLink;
  }
  public putSubflowLink(value: FlowSubflowLink[] | cdktf.IResolvable) {
    this._subflowLink.internalValue = value;
  }
  public resetSubflowLink() {
    this._subflowLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subflowLinkInput() {
    return this._subflowLink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy: cdktf.booleanToTerraform(this._deploy),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      flow_json: cdktf.stringToTerraform(this._flowJson),
      log_level: cdktf.numberToTerraform(this._logLevel),
      name: cdktf.stringToTerraform(this._name),
      connection_link: cdktf.listMapper(flowConnectionLinkToTerraform, true)(this._connectionLink.internalValue),
      subflow_link: cdktf.listMapper(flowSubflowLinkToTerraform, true)(this._subflowLink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_json: {
        value: cdktf.stringToHclTerraform(this._flowJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.numberToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_link: {
        value: cdktf.listMapperHcl(flowConnectionLinkToHclTerraform, true)(this._connectionLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FlowConnectionLinkList",
      },
      subflow_link: {
        value: cdktf.listMapperHcl(flowSubflowLinkToHclTerraform, true)(this._subflowLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FlowSubflowLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
