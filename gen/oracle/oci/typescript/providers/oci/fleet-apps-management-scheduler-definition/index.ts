// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementSchedulerDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * action_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#action_groups FleetAppsManagementSchedulerDefinition#action_groups}
  */
  readonly actionGroups: FleetAppsManagementSchedulerDefinitionActionGroups[] | cdktf.IResolvable;
  /**
  * run_books block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#run_books FleetAppsManagementSchedulerDefinition#run_books}
  */
  readonly runBooks?: FleetAppsManagementSchedulerDefinitionRunBooks[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#schedule FleetAppsManagementSchedulerDefinition#schedule}
  */
  readonly schedule: FleetAppsManagementSchedulerDefinitionSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#timeouts FleetAppsManagementSchedulerDefinition#timeouts}
  */
  readonly timeouts?: FleetAppsManagementSchedulerDefinitionTimeouts;
}
export interface FleetAppsManagementSchedulerDefinitionActionGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#fleet_id FleetAppsManagementSchedulerDefinition#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#kind FleetAppsManagementSchedulerDefinition#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}
  */
  readonly runbookId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_version_name FleetAppsManagementSchedulerDefinition#runbook_version_name}
  */
  readonly runbookVersionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#sequence FleetAppsManagementSchedulerDefinition#sequence}
  */
  readonly sequence?: number;
}

export function fleetAppsManagementSchedulerDefinitionActionGroupsToTerraform(struct?: FleetAppsManagementSchedulerDefinitionActionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    fleet_id: cdktf.stringToTerraform(struct!.fleetId),
    kind: cdktf.stringToTerraform(struct!.kind),
    runbook_id: cdktf.stringToTerraform(struct!.runbookId),
    runbook_version_name: cdktf.stringToTerraform(struct!.runbookVersionName),
    sequence: cdktf.numberToTerraform(struct!.sequence),
  }
}


export function fleetAppsManagementSchedulerDefinitionActionGroupsToHclTerraform(struct?: FleetAppsManagementSchedulerDefinitionActionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fleet_id: {
      value: cdktf.stringToHclTerraform(struct!.fleetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runbook_id: {
      value: cdktf.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runbook_version_name: {
      value: cdktf.stringToHclTerraform(struct!.runbookVersionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence: {
      value: cdktf.numberToHclTerraform(struct!.sequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementSchedulerDefinitionActionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fleetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetId = this._fleetId;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._runbookVersionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookVersionName = this._runbookVersionName;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementSchedulerDefinitionActionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._fleetId = undefined;
      this._kind = undefined;
      this._runbookId = undefined;
      this._runbookVersionName = undefined;
      this._sequence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._fleetId = value.fleetId;
      this._kind = value.kind;
      this._runbookId = value.runbookId;
      this._runbookVersionName = value.runbookVersionName;
      this._sequence = value.sequence;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // runbook_id - computed: false, optional: false, required: true
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // runbook_version_name - computed: false, optional: false, required: true
  private _runbookVersionName?: string; 
  public get runbookVersionName() {
    return this.getStringAttribute('runbook_version_name');
  }
  public set runbookVersionName(value: string) {
    this._runbookVersionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookVersionNameInput() {
    return this._runbookVersionName;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }
}

export class FleetAppsManagementSchedulerDefinitionActionGroupsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementSchedulerDefinitionActionGroups[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference {
    return new FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#bucket FleetAppsManagementSchedulerDefinition#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#checksum FleetAppsManagementSchedulerDefinition#checksum}
  */
  readonly checksum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#namespace FleetAppsManagementSchedulerDefinition#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#object FleetAppsManagementSchedulerDefinition#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#source_type FleetAppsManagementSchedulerDefinition#source_type}
  */
  readonly sourceType: string;
}

export function fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentToTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentOutputReference | FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentToHclTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentOutputReference | FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._checksum = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._checksum = value.checksum;
      this._namespace = value.namespace;
      this._object = value.object;
      this._sourceType = value.sourceType;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // checksum - computed: false, optional: false, required: true
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#kind FleetAppsManagementSchedulerDefinition#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#name FleetAppsManagementSchedulerDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#value FleetAppsManagementSchedulerDefinition#value}
  */
  readonly value?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#content FleetAppsManagementSchedulerDefinition#content}
  */
  readonly content?: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContent;
}

export function fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsToTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    content: fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentToTerraform(struct!.content),
  }
}


export function fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsToHclTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._value = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._value = value.value;
      this._content.internalValue = value.content;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // content - computed: false, optional: true, required: false
  private _content = new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

export class FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference {
    return new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementSchedulerDefinitionRunBooksInputParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#step_name FleetAppsManagementSchedulerDefinition#step_name}
  */
  readonly stepName: string;
  /**
  * arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#arguments FleetAppsManagementSchedulerDefinition#arguments}
  */
  readonly arguments?: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments[] | cdktf.IResolvable;
}

export function fleetAppsManagementSchedulerDefinitionRunBooksInputParametersToTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooksInputParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_name: cdktf.stringToTerraform(struct!.stepName),
    arguments: cdktf.listMapper(fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsToTerraform, true)(struct!.arguments),
  }
}


export function fleetAppsManagementSchedulerDefinitionRunBooksInputParametersToHclTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooksInputParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step_name: {
      value: cdktf.stringToHclTerraform(struct!.stepName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arguments: {
      value: cdktf.listMapperHcl(fleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsToHclTerraform, true)(struct!.arguments),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementSchedulerDefinitionRunBooksInputParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepName = this._stepName;
    }
    if (this._arguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementSchedulerDefinitionRunBooksInputParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepName = undefined;
      this._arguments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepName = value.stepName;
      this._arguments.internalValue = value.arguments;
    }
  }

  // step_name - computed: false, optional: false, required: true
  private _stepName?: string; 
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
  public set stepName(value: string) {
    this._stepName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNameInput() {
    return this._stepName;
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments = new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments[] | cdktf.IResolvable) {
    this._arguments.internalValue = value;
  }
  public resetArguments() {
    this._arguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments.internalValue;
  }
}

export class FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementSchedulerDefinitionRunBooksInputParameters[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference {
    return new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementSchedulerDefinitionRunBooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}
  */
  readonly runbookId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_version_name FleetAppsManagementSchedulerDefinition#runbook_version_name}
  */
  readonly runbookVersionName: string;
  /**
  * input_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#input_parameters FleetAppsManagementSchedulerDefinition#input_parameters}
  */
  readonly inputParameters?: FleetAppsManagementSchedulerDefinitionRunBooksInputParameters[] | cdktf.IResolvable;
}

export function fleetAppsManagementSchedulerDefinitionRunBooksToTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runbook_id: cdktf.stringToTerraform(struct!.runbookId),
    runbook_version_name: cdktf.stringToTerraform(struct!.runbookVersionName),
    input_parameters: cdktf.listMapper(fleetAppsManagementSchedulerDefinitionRunBooksInputParametersToTerraform, true)(struct!.inputParameters),
  }
}


export function fleetAppsManagementSchedulerDefinitionRunBooksToHclTerraform(struct?: FleetAppsManagementSchedulerDefinitionRunBooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    runbook_id: {
      value: cdktf.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runbook_version_name: {
      value: cdktf.stringToHclTerraform(struct!.runbookVersionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_parameters: {
      value: cdktf.listMapperHcl(fleetAppsManagementSchedulerDefinitionRunBooksInputParametersToHclTerraform, true)(struct!.inputParameters),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementSchedulerDefinitionRunBooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementSchedulerDefinitionRunBooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._runbookVersionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookVersionName = this._runbookVersionName;
    }
    if (this._inputParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputParameters = this._inputParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementSchedulerDefinitionRunBooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runbookId = undefined;
      this._runbookVersionName = undefined;
      this._inputParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runbookId = value.runbookId;
      this._runbookVersionName = value.runbookVersionName;
      this._inputParameters.internalValue = value.inputParameters;
    }
  }

  // runbook_id - computed: false, optional: false, required: true
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // runbook_version_name - computed: false, optional: false, required: true
  private _runbookVersionName?: string; 
  public get runbookVersionName() {
    return this.getStringAttribute('runbook_version_name');
  }
  public set runbookVersionName(value: string) {
    this._runbookVersionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookVersionNameInput() {
    return this._runbookVersionName;
  }

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters = new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList(this, "input_parameters", false);
  public get inputParameters() {
    return this._inputParameters;
  }
  public putInputParameters(value: FleetAppsManagementSchedulerDefinitionRunBooksInputParameters[] | cdktf.IResolvable) {
    this._inputParameters.internalValue = value;
  }
  public resetInputParameters() {
    this._inputParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParametersInput() {
    return this._inputParameters.internalValue;
  }
}

export class FleetAppsManagementSchedulerDefinitionRunBooksList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementSchedulerDefinitionRunBooks[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementSchedulerDefinitionRunBooksOutputReference {
    return new FleetAppsManagementSchedulerDefinitionRunBooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementSchedulerDefinitionSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}
  */
  readonly executionStartdate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}
  */
  readonly maintenanceWindowId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}
  */
  readonly recurrences?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}
  */
  readonly type: string;
}

export function fleetAppsManagementSchedulerDefinitionScheduleToTerraform(struct?: FleetAppsManagementSchedulerDefinitionScheduleOutputReference | FleetAppsManagementSchedulerDefinitionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    execution_startdate: cdktf.stringToTerraform(struct!.executionStartdate),
    maintenance_window_id: cdktf.stringToTerraform(struct!.maintenanceWindowId),
    recurrences: cdktf.stringToTerraform(struct!.recurrences),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetAppsManagementSchedulerDefinitionScheduleToHclTerraform(struct?: FleetAppsManagementSchedulerDefinitionScheduleOutputReference | FleetAppsManagementSchedulerDefinitionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_startdate: {
      value: cdktf.stringToHclTerraform(struct!.executionStartdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_window_id: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrences: {
      value: cdktf.stringToHclTerraform(struct!.recurrences),
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

export class FleetAppsManagementSchedulerDefinitionScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementSchedulerDefinitionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._executionStartdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStartdate = this._executionStartdate;
    }
    if (this._maintenanceWindowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowId = this._maintenanceWindowId;
    }
    if (this._recurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrences = this._recurrences;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementSchedulerDefinitionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._executionStartdate = undefined;
      this._maintenanceWindowId = undefined;
      this._recurrences = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._executionStartdate = value.executionStartdate;
      this._maintenanceWindowId = value.maintenanceWindowId;
      this._recurrences = value.recurrences;
      this._type = value.type;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // execution_startdate - computed: false, optional: false, required: true
  private _executionStartdate?: string; 
  public get executionStartdate() {
    return this.getStringAttribute('execution_startdate');
  }
  public set executionStartdate(value: string) {
    this._executionStartdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStartdateInput() {
    return this._executionStartdate;
  }

  // maintenance_window_id - computed: true, optional: true, required: false
  private _maintenanceWindowId?: string; 
  public get maintenanceWindowId() {
    return this.getStringAttribute('maintenance_window_id');
  }
  public set maintenanceWindowId(value: string) {
    this._maintenanceWindowId = value;
  }
  public resetMaintenanceWindowId() {
    this._maintenanceWindowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowIdInput() {
    return this._maintenanceWindowId;
  }

  // recurrences - computed: true, optional: true, required: false
  private _recurrences?: string; 
  public get recurrences() {
    return this.getStringAttribute('recurrences');
  }
  public set recurrences(value: string) {
    this._recurrences = value;
  }
  public resetRecurrences() {
    this._recurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencesInput() {
    return this._recurrences;
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
export interface FleetAppsManagementSchedulerDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementSchedulerDefinitionTimeoutsToTerraform(struct?: FleetAppsManagementSchedulerDefinitionTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementSchedulerDefinitionTimeoutsToHclTerraform(struct?: FleetAppsManagementSchedulerDefinitionTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementSchedulerDefinitionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementSchedulerDefinitionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition}
*/
export class FleetAppsManagementSchedulerDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_scheduler_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementSchedulerDefinition to import
  * @param importFromId The id of the existing FleetAppsManagementSchedulerDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementSchedulerDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_scheduler_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementSchedulerDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementSchedulerDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_scheduler_definition',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._actionGroups.internalValue = config.actionGroups;
    this._runBooks.internalValue = config.runBooks;
    this._schedule.internalValue = config.schedule;
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

  // count_of_affected_action_groups - computed: true, optional: false, required: false
  public get countOfAffectedActionGroups() {
    return this.getNumberAttribute('count_of_affected_action_groups');
  }

  // count_of_affected_resources - computed: true, optional: false, required: false
  public get countOfAffectedResources() {
    return this.getNumberAttribute('count_of_affected_resources');
  }

  // count_of_affected_targets - computed: true, optional: false, required: false
  public get countOfAffectedTargets() {
    return this.getNumberAttribute('count_of_affected_targets');
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_operations - computed: true, optional: false, required: false
  public get lifecycleOperations() {
    return this.getListAttribute('lifecycle_operations');
  }

  // products - computed: true, optional: false, required: false
  public get products() {
    return this.getListAttribute('products');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // time_of_next_run - computed: true, optional: false, required: false
  public get timeOfNextRun() {
    return this.getStringAttribute('time_of_next_run');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // action_groups - computed: false, optional: false, required: true
  private _actionGroups = new FleetAppsManagementSchedulerDefinitionActionGroupsList(this, "action_groups", false);
  public get actionGroups() {
    return this._actionGroups;
  }
  public putActionGroups(value: FleetAppsManagementSchedulerDefinitionActionGroups[] | cdktf.IResolvable) {
    this._actionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupsInput() {
    return this._actionGroups.internalValue;
  }

  // run_books - computed: false, optional: true, required: false
  private _runBooks = new FleetAppsManagementSchedulerDefinitionRunBooksList(this, "run_books", false);
  public get runBooks() {
    return this._runBooks;
  }
  public putRunBooks(value: FleetAppsManagementSchedulerDefinitionRunBooks[] | cdktf.IResolvable) {
    this._runBooks.internalValue = value;
  }
  public resetRunBooks() {
    this._runBooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runBooksInput() {
    return this._runBooks.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new FleetAppsManagementSchedulerDefinitionScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: FleetAppsManagementSchedulerDefinitionSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementSchedulerDefinitionTimeouts) {
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
      action_groups: cdktf.listMapper(fleetAppsManagementSchedulerDefinitionActionGroupsToTerraform, true)(this._actionGroups.internalValue),
      run_books: cdktf.listMapper(fleetAppsManagementSchedulerDefinitionRunBooksToTerraform, true)(this._runBooks.internalValue),
      schedule: fleetAppsManagementSchedulerDefinitionScheduleToTerraform(this._schedule.internalValue),
      timeouts: fleetAppsManagementSchedulerDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
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
      action_groups: {
        value: cdktf.listMapperHcl(fleetAppsManagementSchedulerDefinitionActionGroupsToHclTerraform, true)(this._actionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementSchedulerDefinitionActionGroupsList",
      },
      run_books: {
        value: cdktf.listMapperHcl(fleetAppsManagementSchedulerDefinitionRunBooksToHclTerraform, true)(this._runBooks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementSchedulerDefinitionRunBooksList",
      },
      schedule: {
        value: fleetAppsManagementSchedulerDefinitionScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementSchedulerDefinitionScheduleList",
      },
      timeouts: {
        value: fleetAppsManagementSchedulerDefinitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementSchedulerDefinitionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
