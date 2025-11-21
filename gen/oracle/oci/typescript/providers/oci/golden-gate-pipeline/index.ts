// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoldenGatePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#compartment_id GoldenGatePipeline#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#defined_tags GoldenGatePipeline#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#description GoldenGatePipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#display_name GoldenGatePipeline#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#freeform_tags GoldenGatePipeline#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#id GoldenGatePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#license_model GoldenGatePipeline#license_model}
  */
  readonly licenseModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#recipe_type GoldenGatePipeline#recipe_type}
  */
  readonly recipeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#subnet_id GoldenGatePipeline#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#locks GoldenGatePipeline#locks}
  */
  readonly locks?: GoldenGatePipelineLocks[] | cdktf.IResolvable;
  /**
  * process_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#process_options GoldenGatePipeline#process_options}
  */
  readonly processOptions?: GoldenGatePipelineProcessOptions;
  /**
  * source_connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#source_connection_details GoldenGatePipeline#source_connection_details}
  */
  readonly sourceConnectionDetails: GoldenGatePipelineSourceConnectionDetails;
  /**
  * target_connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#target_connection_details GoldenGatePipeline#target_connection_details}
  */
  readonly targetConnectionDetails: GoldenGatePipelineTargetConnectionDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#timeouts GoldenGatePipeline#timeouts}
  */
  readonly timeouts?: GoldenGatePipelineTimeouts;
}
export interface GoldenGatePipelineIngressIps {
}

export function goldenGatePipelineIngressIpsToTerraform(struct?: GoldenGatePipelineIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function goldenGatePipelineIngressIpsToHclTerraform(struct?: GoldenGatePipelineIngressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoldenGatePipelineIngressIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGatePipelineIngressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineIngressIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress_ip - computed: true, optional: false, required: false
  public get ingressIp() {
    return this.getStringAttribute('ingress_ip');
  }
}

export class GoldenGatePipelineIngressIpsList extends cdktf.ComplexList {

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
  public get(index: number): GoldenGatePipelineIngressIpsOutputReference {
    return new GoldenGatePipelineIngressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGatePipelineMappingRules {
}

export function goldenGatePipelineMappingRulesToTerraform(struct?: GoldenGatePipelineMappingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function goldenGatePipelineMappingRulesToHclTerraform(struct?: GoldenGatePipelineMappingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoldenGatePipelineMappingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGatePipelineMappingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineMappingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mapping_type - computed: true, optional: false, required: false
  public get mappingType() {
    return this.getStringAttribute('mapping_type');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class GoldenGatePipelineMappingRulesList extends cdktf.ComplexList {

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
  public get(index: number): GoldenGatePipelineMappingRulesOutputReference {
    return new GoldenGatePipelineMappingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGatePipelinePipelineDiagnosticData {
}

export function goldenGatePipelinePipelineDiagnosticDataToTerraform(struct?: GoldenGatePipelinePipelineDiagnosticData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function goldenGatePipelinePipelineDiagnosticDataToHclTerraform(struct?: GoldenGatePipelinePipelineDiagnosticData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoldenGatePipelinePipelineDiagnosticDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGatePipelinePipelineDiagnosticData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelinePipelineDiagnosticData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // diagnostic_state - computed: true, optional: false, required: false
  public get diagnosticState() {
    return this.getStringAttribute('diagnostic_state');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // time_last_collected - computed: true, optional: false, required: false
  public get timeLastCollected() {
    return this.getStringAttribute('time_last_collected');
  }
}

export class GoldenGatePipelinePipelineDiagnosticDataList extends cdktf.ComplexList {

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
  public get(index: number): GoldenGatePipelinePipelineDiagnosticDataOutputReference {
    return new GoldenGatePipelinePipelineDiagnosticDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGatePipelineLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#message GoldenGatePipeline#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#related_resource_id GoldenGatePipeline#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#time_created GoldenGatePipeline#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#type GoldenGatePipeline#type}
  */
  readonly type: string;
}

export function goldenGatePipelineLocksToTerraform(struct?: GoldenGatePipelineLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function goldenGatePipelineLocksToHclTerraform(struct?: GoldenGatePipelineLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGatePipelineLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenGatePipelineLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._relatedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedResourceId = this._relatedResourceId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: true, required: false
  private _relatedResourceId?: string; 
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }
  public set relatedResourceId(value: string) {
    this._relatedResourceId = value;
  }
  public resetRelatedResourceId() {
    this._relatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceIdInput() {
    return this._relatedResourceId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoldenGatePipelineLocksList extends cdktf.ComplexList {
  public internalValue? : GoldenGatePipelineLocks[] | cdktf.IResolvable

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
  public get(index: number): GoldenGatePipelineLocksOutputReference {
    return new GoldenGatePipelineLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenGatePipelineProcessOptionsInitialDataLoad {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#action_on_existing_table GoldenGatePipeline#action_on_existing_table}
  */
  readonly actionOnExistingTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#is_initial_load GoldenGatePipeline#is_initial_load}
  */
  readonly isInitialLoad: string;
}

export function goldenGatePipelineProcessOptionsInitialDataLoadToTerraform(struct?: GoldenGatePipelineProcessOptionsInitialDataLoadOutputReference | GoldenGatePipelineProcessOptionsInitialDataLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_existing_table: cdktf.stringToTerraform(struct!.actionOnExistingTable),
    is_initial_load: cdktf.stringToTerraform(struct!.isInitialLoad),
  }
}


export function goldenGatePipelineProcessOptionsInitialDataLoadToHclTerraform(struct?: GoldenGatePipelineProcessOptionsInitialDataLoadOutputReference | GoldenGatePipelineProcessOptionsInitialDataLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_existing_table: {
      value: cdktf.stringToHclTerraform(struct!.actionOnExistingTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_initial_load: {
      value: cdktf.stringToHclTerraform(struct!.isInitialLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGatePipelineProcessOptionsInitialDataLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGatePipelineProcessOptionsInitialDataLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnExistingTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnExistingTable = this._actionOnExistingTable;
    }
    if (this._isInitialLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInitialLoad = this._isInitialLoad;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineProcessOptionsInitialDataLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnExistingTable = undefined;
      this._isInitialLoad = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnExistingTable = value.actionOnExistingTable;
      this._isInitialLoad = value.isInitialLoad;
    }
  }

  // action_on_existing_table - computed: true, optional: true, required: false
  private _actionOnExistingTable?: string; 
  public get actionOnExistingTable() {
    return this.getStringAttribute('action_on_existing_table');
  }
  public set actionOnExistingTable(value: string) {
    this._actionOnExistingTable = value;
  }
  public resetActionOnExistingTable() {
    this._actionOnExistingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnExistingTableInput() {
    return this._actionOnExistingTable;
  }

  // is_initial_load - computed: false, optional: false, required: true
  private _isInitialLoad?: string; 
  public get isInitialLoad() {
    return this.getStringAttribute('is_initial_load');
  }
  public set isInitialLoad(value: string) {
    this._isInitialLoad = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isInitialLoadInput() {
    return this._isInitialLoad;
  }
}
export interface GoldenGatePipelineProcessOptionsReplicateSchemaChange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#action_on_ddl_error GoldenGatePipeline#action_on_ddl_error}
  */
  readonly actionOnDdlError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#action_on_dml_error GoldenGatePipeline#action_on_dml_error}
  */
  readonly actionOnDmlError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#can_replicate_schema_change GoldenGatePipeline#can_replicate_schema_change}
  */
  readonly canReplicateSchemaChange: string;
}

export function goldenGatePipelineProcessOptionsReplicateSchemaChangeToTerraform(struct?: GoldenGatePipelineProcessOptionsReplicateSchemaChangeOutputReference | GoldenGatePipelineProcessOptionsReplicateSchemaChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_ddl_error: cdktf.stringToTerraform(struct!.actionOnDdlError),
    action_on_dml_error: cdktf.stringToTerraform(struct!.actionOnDmlError),
    can_replicate_schema_change: cdktf.stringToTerraform(struct!.canReplicateSchemaChange),
  }
}


export function goldenGatePipelineProcessOptionsReplicateSchemaChangeToHclTerraform(struct?: GoldenGatePipelineProcessOptionsReplicateSchemaChangeOutputReference | GoldenGatePipelineProcessOptionsReplicateSchemaChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_ddl_error: {
      value: cdktf.stringToHclTerraform(struct!.actionOnDdlError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_on_dml_error: {
      value: cdktf.stringToHclTerraform(struct!.actionOnDmlError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_replicate_schema_change: {
      value: cdktf.stringToHclTerraform(struct!.canReplicateSchemaChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGatePipelineProcessOptionsReplicateSchemaChangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGatePipelineProcessOptionsReplicateSchemaChange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnDdlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnDdlError = this._actionOnDdlError;
    }
    if (this._actionOnDmlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnDmlError = this._actionOnDmlError;
    }
    if (this._canReplicateSchemaChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.canReplicateSchemaChange = this._canReplicateSchemaChange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineProcessOptionsReplicateSchemaChange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnDdlError = undefined;
      this._actionOnDmlError = undefined;
      this._canReplicateSchemaChange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnDdlError = value.actionOnDdlError;
      this._actionOnDmlError = value.actionOnDmlError;
      this._canReplicateSchemaChange = value.canReplicateSchemaChange;
    }
  }

  // action_on_ddl_error - computed: true, optional: true, required: false
  private _actionOnDdlError?: string; 
  public get actionOnDdlError() {
    return this.getStringAttribute('action_on_ddl_error');
  }
  public set actionOnDdlError(value: string) {
    this._actionOnDdlError = value;
  }
  public resetActionOnDdlError() {
    this._actionOnDdlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnDdlErrorInput() {
    return this._actionOnDdlError;
  }

  // action_on_dml_error - computed: true, optional: true, required: false
  private _actionOnDmlError?: string; 
  public get actionOnDmlError() {
    return this.getStringAttribute('action_on_dml_error');
  }
  public set actionOnDmlError(value: string) {
    this._actionOnDmlError = value;
  }
  public resetActionOnDmlError() {
    this._actionOnDmlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnDmlErrorInput() {
    return this._actionOnDmlError;
  }

  // can_replicate_schema_change - computed: false, optional: false, required: true
  private _canReplicateSchemaChange?: string; 
  public get canReplicateSchemaChange() {
    return this.getStringAttribute('can_replicate_schema_change');
  }
  public set canReplicateSchemaChange(value: string) {
    this._canReplicateSchemaChange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canReplicateSchemaChangeInput() {
    return this._canReplicateSchemaChange;
  }
}
export interface GoldenGatePipelineProcessOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#should_restart_on_failure GoldenGatePipeline#should_restart_on_failure}
  */
  readonly shouldRestartOnFailure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#start_using_default_mapping GoldenGatePipeline#start_using_default_mapping}
  */
  readonly startUsingDefaultMapping?: string;
  /**
  * initial_data_load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#initial_data_load GoldenGatePipeline#initial_data_load}
  */
  readonly initialDataLoad: GoldenGatePipelineProcessOptionsInitialDataLoad;
  /**
  * replicate_schema_change block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#replicate_schema_change GoldenGatePipeline#replicate_schema_change}
  */
  readonly replicateSchemaChange: GoldenGatePipelineProcessOptionsReplicateSchemaChange;
}

export function goldenGatePipelineProcessOptionsToTerraform(struct?: GoldenGatePipelineProcessOptionsOutputReference | GoldenGatePipelineProcessOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_restart_on_failure: cdktf.stringToTerraform(struct!.shouldRestartOnFailure),
    start_using_default_mapping: cdktf.stringToTerraform(struct!.startUsingDefaultMapping),
    initial_data_load: goldenGatePipelineProcessOptionsInitialDataLoadToTerraform(struct!.initialDataLoad),
    replicate_schema_change: goldenGatePipelineProcessOptionsReplicateSchemaChangeToTerraform(struct!.replicateSchemaChange),
  }
}


export function goldenGatePipelineProcessOptionsToHclTerraform(struct?: GoldenGatePipelineProcessOptionsOutputReference | GoldenGatePipelineProcessOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_restart_on_failure: {
      value: cdktf.stringToHclTerraform(struct!.shouldRestartOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_using_default_mapping: {
      value: cdktf.stringToHclTerraform(struct!.startUsingDefaultMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_data_load: {
      value: goldenGatePipelineProcessOptionsInitialDataLoadToHclTerraform(struct!.initialDataLoad),
      isBlock: true,
      type: "list",
      storageClassType: "GoldenGatePipelineProcessOptionsInitialDataLoadList",
    },
    replicate_schema_change: {
      value: goldenGatePipelineProcessOptionsReplicateSchemaChangeToHclTerraform(struct!.replicateSchemaChange),
      isBlock: true,
      type: "list",
      storageClassType: "GoldenGatePipelineProcessOptionsReplicateSchemaChangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGatePipelineProcessOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGatePipelineProcessOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldRestartOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldRestartOnFailure = this._shouldRestartOnFailure;
    }
    if (this._startUsingDefaultMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.startUsingDefaultMapping = this._startUsingDefaultMapping;
    }
    if (this._initialDataLoad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDataLoad = this._initialDataLoad?.internalValue;
    }
    if (this._replicateSchemaChange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicateSchemaChange = this._replicateSchemaChange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineProcessOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldRestartOnFailure = undefined;
      this._startUsingDefaultMapping = undefined;
      this._initialDataLoad.internalValue = undefined;
      this._replicateSchemaChange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldRestartOnFailure = value.shouldRestartOnFailure;
      this._startUsingDefaultMapping = value.startUsingDefaultMapping;
      this._initialDataLoad.internalValue = value.initialDataLoad;
      this._replicateSchemaChange.internalValue = value.replicateSchemaChange;
    }
  }

  // should_restart_on_failure - computed: false, optional: false, required: true
  private _shouldRestartOnFailure?: string; 
  public get shouldRestartOnFailure() {
    return this.getStringAttribute('should_restart_on_failure');
  }
  public set shouldRestartOnFailure(value: string) {
    this._shouldRestartOnFailure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldRestartOnFailureInput() {
    return this._shouldRestartOnFailure;
  }

  // start_using_default_mapping - computed: true, optional: true, required: false
  private _startUsingDefaultMapping?: string; 
  public get startUsingDefaultMapping() {
    return this.getStringAttribute('start_using_default_mapping');
  }
  public set startUsingDefaultMapping(value: string) {
    this._startUsingDefaultMapping = value;
  }
  public resetStartUsingDefaultMapping() {
    this._startUsingDefaultMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startUsingDefaultMappingInput() {
    return this._startUsingDefaultMapping;
  }

  // initial_data_load - computed: false, optional: false, required: true
  private _initialDataLoad = new GoldenGatePipelineProcessOptionsInitialDataLoadOutputReference(this, "initial_data_load");
  public get initialDataLoad() {
    return this._initialDataLoad;
  }
  public putInitialDataLoad(value: GoldenGatePipelineProcessOptionsInitialDataLoad) {
    this._initialDataLoad.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDataLoadInput() {
    return this._initialDataLoad.internalValue;
  }

  // replicate_schema_change - computed: false, optional: false, required: true
  private _replicateSchemaChange = new GoldenGatePipelineProcessOptionsReplicateSchemaChangeOutputReference(this, "replicate_schema_change");
  public get replicateSchemaChange() {
    return this._replicateSchemaChange;
  }
  public putReplicateSchemaChange(value: GoldenGatePipelineProcessOptionsReplicateSchemaChange) {
    this._replicateSchemaChange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateSchemaChangeInput() {
    return this._replicateSchemaChange.internalValue;
  }
}
export interface GoldenGatePipelineSourceConnectionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#connection_id GoldenGatePipeline#connection_id}
  */
  readonly connectionId: string;
}

export function goldenGatePipelineSourceConnectionDetailsToTerraform(struct?: GoldenGatePipelineSourceConnectionDetailsOutputReference | GoldenGatePipelineSourceConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
  }
}


export function goldenGatePipelineSourceConnectionDetailsToHclTerraform(struct?: GoldenGatePipelineSourceConnectionDetailsOutputReference | GoldenGatePipelineSourceConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGatePipelineSourceConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGatePipelineSourceConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineSourceConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }
}
export interface GoldenGatePipelineTargetConnectionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#connection_id GoldenGatePipeline#connection_id}
  */
  readonly connectionId: string;
}

export function goldenGatePipelineTargetConnectionDetailsToTerraform(struct?: GoldenGatePipelineTargetConnectionDetailsOutputReference | GoldenGatePipelineTargetConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
  }
}


export function goldenGatePipelineTargetConnectionDetailsToHclTerraform(struct?: GoldenGatePipelineTargetConnectionDetailsOutputReference | GoldenGatePipelineTargetConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGatePipelineTargetConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoldenGatePipelineTargetConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineTargetConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }
}
export interface GoldenGatePipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#create GoldenGatePipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#delete GoldenGatePipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#update GoldenGatePipeline#update}
  */
  readonly update?: string;
}

export function goldenGatePipelineTimeoutsToTerraform(struct?: GoldenGatePipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function goldenGatePipelineTimeoutsToHclTerraform(struct?: GoldenGatePipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenGatePipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoldenGatePipelineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenGatePipelineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline oci_golden_gate_pipeline}
*/
export class GoldenGatePipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoldenGatePipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoldenGatePipeline to import
  * @param importFromId The id of the existing GoldenGatePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoldenGatePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/golden_gate_pipeline oci_golden_gate_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoldenGatePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: GoldenGatePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._recipeType = config.recipeType;
    this._subnetId = config.subnetId;
    this._locks.internalValue = config.locks;
    this._processOptions.internalValue = config.processOptions;
    this._sourceConnectionDetails.internalValue = config.sourceConnectionDetails;
    this._targetConnectionDetails.internalValue = config.targetConnectionDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // ingress_ips - computed: true, optional: false, required: false
  private _ingressIps = new GoldenGatePipelineIngressIpsList(this, "ingress_ips", false);
  public get ingressIps() {
    return this._ingressIps;
  }

  // is_auto_scaling_enabled - computed: true, optional: false, required: false
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }

  // license_model - computed: false, optional: false, required: true
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_sub_state - computed: true, optional: false, required: false
  public get lifecycleSubState() {
    return this.getStringAttribute('lifecycle_sub_state');
  }

  // mapping_rules - computed: true, optional: false, required: false
  private _mappingRules = new GoldenGatePipelineMappingRulesList(this, "mapping_rules", false);
  public get mappingRules() {
    return this._mappingRules;
  }

  // pipeline_diagnostic_data - computed: true, optional: false, required: false
  private _pipelineDiagnosticData = new GoldenGatePipelinePipelineDiagnosticDataList(this, "pipeline_diagnostic_data", false);
  public get pipelineDiagnosticData() {
    return this._pipelineDiagnosticData;
  }

  // recipe_type - computed: false, optional: false, required: true
  private _recipeType?: string; 
  public get recipeType() {
    return this.getStringAttribute('recipe_type');
  }
  public set recipeType(value: string) {
    this._recipeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeTypeInput() {
    return this._recipeType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_recorded - computed: true, optional: false, required: false
  public get timeLastRecorded() {
    return this.getStringAttribute('time_last_recorded');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new GoldenGatePipelineLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: GoldenGatePipelineLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // process_options - computed: false, optional: true, required: false
  private _processOptions = new GoldenGatePipelineProcessOptionsOutputReference(this, "process_options");
  public get processOptions() {
    return this._processOptions;
  }
  public putProcessOptions(value: GoldenGatePipelineProcessOptions) {
    this._processOptions.internalValue = value;
  }
  public resetProcessOptions() {
    this._processOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processOptionsInput() {
    return this._processOptions.internalValue;
  }

  // source_connection_details - computed: false, optional: false, required: true
  private _sourceConnectionDetails = new GoldenGatePipelineSourceConnectionDetailsOutputReference(this, "source_connection_details");
  public get sourceConnectionDetails() {
    return this._sourceConnectionDetails;
  }
  public putSourceConnectionDetails(value: GoldenGatePipelineSourceConnectionDetails) {
    this._sourceConnectionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionDetailsInput() {
    return this._sourceConnectionDetails.internalValue;
  }

  // target_connection_details - computed: false, optional: false, required: true
  private _targetConnectionDetails = new GoldenGatePipelineTargetConnectionDetailsOutputReference(this, "target_connection_details");
  public get targetConnectionDetails() {
    return this._targetConnectionDetails;
  }
  public putTargetConnectionDetails(value: GoldenGatePipelineTargetConnectionDetails) {
    this._targetConnectionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConnectionDetailsInput() {
    return this._targetConnectionDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoldenGatePipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoldenGatePipelineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      recipe_type: cdktf.stringToTerraform(this._recipeType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      locks: cdktf.listMapper(goldenGatePipelineLocksToTerraform, true)(this._locks.internalValue),
      process_options: goldenGatePipelineProcessOptionsToTerraform(this._processOptions.internalValue),
      source_connection_details: goldenGatePipelineSourceConnectionDetailsToTerraform(this._sourceConnectionDetails.internalValue),
      target_connection_details: goldenGatePipelineTargetConnectionDetailsToTerraform(this._targetConnectionDetails.internalValue),
      timeouts: goldenGatePipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipe_type: {
        value: cdktf.stringToHclTerraform(this._recipeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locks: {
        value: cdktf.listMapperHcl(goldenGatePipelineLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGatePipelineLocksList",
      },
      process_options: {
        value: goldenGatePipelineProcessOptionsToHclTerraform(this._processOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGatePipelineProcessOptionsList",
      },
      source_connection_details: {
        value: goldenGatePipelineSourceConnectionDetailsToHclTerraform(this._sourceConnectionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGatePipelineSourceConnectionDetailsList",
      },
      target_connection_details: {
        value: goldenGatePipelineTargetConnectionDetailsToHclTerraform(this._targetConnectionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenGatePipelineTargetConnectionDetailsList",
      },
      timeouts: {
        value: goldenGatePipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoldenGatePipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
