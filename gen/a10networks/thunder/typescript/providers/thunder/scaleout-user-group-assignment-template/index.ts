// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutUserGroupAssignmentTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#id ScaleoutUserGroupAssignmentTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Scaleout User Group Assignment Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#name ScaleoutUserGroupAssignmentTemplate#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#user_tag ScaleoutUserGroupAssignmentTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#uuid ScaleoutUserGroupAssignmentTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * v4_assignment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#v4_assignment_list ScaleoutUserGroupAssignmentTemplate#v4_assignment_list}
  */
  readonly v4AssignmentList?: ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct[] | cdktf.IResolvable;
  /**
  * v6_assignment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#v6_assignment_list ScaleoutUserGroupAssignmentTemplate#v6_assignment_list}
  */
  readonly v6AssignmentList?: ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct[] | cdktf.IResolvable;
}
export interface ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct {
  /**
  * User group assignment prefix length, default is 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#assignment_prefix_length ScaleoutUserGroupAssignmentTemplate#assignment_prefix_length}
  */
  readonly assignmentPrefixLength?: number;
  /**
  * IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#ipv4_prefix ScaleoutUserGroupAssignmentTemplate#ipv4_prefix}
  */
  readonly ipv4Prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#service_config_template ScaleoutUserGroupAssignmentTemplate#service_config_template}
  */
  readonly serviceConfigTemplate?: string;
  /**
  * User group range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#user_group_range_end ScaleoutUserGroupAssignmentTemplate#user_group_range_end}
  */
  readonly userGroupRangeEnd?: number;
  /**
  * User group range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#user_group_range_start ScaleoutUserGroupAssignmentTemplate#user_group_range_start}
  */
  readonly userGroupRangeStart?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#uuid ScaleoutUserGroupAssignmentTemplate#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutUserGroupAssignmentTemplateV4AssignmentListStructToTerraform(struct?: ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment_prefix_length: cdktf.numberToTerraform(struct!.assignmentPrefixLength),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
    service_config_template: cdktf.stringToTerraform(struct!.serviceConfigTemplate),
    user_group_range_end: cdktf.numberToTerraform(struct!.userGroupRangeEnd),
    user_group_range_start: cdktf.numberToTerraform(struct!.userGroupRangeStart),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutUserGroupAssignmentTemplateV4AssignmentListStructToHclTerraform(struct?: ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.assignmentPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_config_template: {
      value: cdktf.stringToHclTerraform(struct!.serviceConfigTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group_range_end: {
      value: cdktf.numberToHclTerraform(struct!.userGroupRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group_range_start: {
      value: cdktf.numberToHclTerraform(struct!.userGroupRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutUserGroupAssignmentTemplateV4AssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignmentPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignmentPrefixLength = this._assignmentPrefixLength;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    if (this._serviceConfigTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfigTemplate = this._serviceConfigTemplate;
    }
    if (this._userGroupRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupRangeEnd = this._userGroupRangeEnd;
    }
    if (this._userGroupRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupRangeStart = this._userGroupRangeStart;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignmentPrefixLength = undefined;
      this._ipv4Prefix = undefined;
      this._serviceConfigTemplate = undefined;
      this._userGroupRangeEnd = undefined;
      this._userGroupRangeStart = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignmentPrefixLength = value.assignmentPrefixLength;
      this._ipv4Prefix = value.ipv4Prefix;
      this._serviceConfigTemplate = value.serviceConfigTemplate;
      this._userGroupRangeEnd = value.userGroupRangeEnd;
      this._userGroupRangeStart = value.userGroupRangeStart;
      this._uuid = value.uuid;
    }
  }

  // assignment_prefix_length - computed: false, optional: true, required: false
  private _assignmentPrefixLength?: number; 
  public get assignmentPrefixLength() {
    return this.getNumberAttribute('assignment_prefix_length');
  }
  public set assignmentPrefixLength(value: number) {
    this._assignmentPrefixLength = value;
  }
  public resetAssignmentPrefixLength() {
    this._assignmentPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPrefixLengthInput() {
    return this._assignmentPrefixLength;
  }

  // ipv4_prefix - computed: false, optional: false, required: true
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }

  // service_config_template - computed: false, optional: true, required: false
  private _serviceConfigTemplate?: string; 
  public get serviceConfigTemplate() {
    return this.getStringAttribute('service_config_template');
  }
  public set serviceConfigTemplate(value: string) {
    this._serviceConfigTemplate = value;
  }
  public resetServiceConfigTemplate() {
    this._serviceConfigTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigTemplateInput() {
    return this._serviceConfigTemplate;
  }

  // user_group_range_end - computed: false, optional: true, required: false
  private _userGroupRangeEnd?: number; 
  public get userGroupRangeEnd() {
    return this.getNumberAttribute('user_group_range_end');
  }
  public set userGroupRangeEnd(value: number) {
    this._userGroupRangeEnd = value;
  }
  public resetUserGroupRangeEnd() {
    this._userGroupRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeEndInput() {
    return this._userGroupRangeEnd;
  }

  // user_group_range_start - computed: false, optional: true, required: false
  private _userGroupRangeStart?: number; 
  public get userGroupRangeStart() {
    return this.getNumberAttribute('user_group_range_start');
  }
  public set userGroupRangeStart(value: number) {
    this._userGroupRangeStart = value;
  }
  public resetUserGroupRangeStart() {
    this._userGroupRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeStartInput() {
    return this._userGroupRangeStart;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class ScaleoutUserGroupAssignmentTemplateV4AssignmentListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutUserGroupAssignmentTemplateV4AssignmentListStructOutputReference {
    return new ScaleoutUserGroupAssignmentTemplateV4AssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct {
  /**
  * User group assignment prefix length, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#assignment_prefix_length ScaleoutUserGroupAssignmentTemplate#assignment_prefix_length}
  */
  readonly assignmentPrefixLength?: number;
  /**
  * IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#ipv6_prefix ScaleoutUserGroupAssignmentTemplate#ipv6_prefix}
  */
  readonly ipv6Prefix: string;
  /**
  * Configure a scaleout service config template to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#service_config_template ScaleoutUserGroupAssignmentTemplate#service_config_template}
  */
  readonly serviceConfigTemplate?: string;
  /**
  * User group range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#user_group_range_end ScaleoutUserGroupAssignmentTemplate#user_group_range_end}
  */
  readonly userGroupRangeEnd?: number;
  /**
  * User group range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#user_group_range_start ScaleoutUserGroupAssignmentTemplate#user_group_range_start}
  */
  readonly userGroupRangeStart?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#uuid ScaleoutUserGroupAssignmentTemplate#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutUserGroupAssignmentTemplateV6AssignmentListStructToTerraform(struct?: ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment_prefix_length: cdktf.numberToTerraform(struct!.assignmentPrefixLength),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    service_config_template: cdktf.stringToTerraform(struct!.serviceConfigTemplate),
    user_group_range_end: cdktf.numberToTerraform(struct!.userGroupRangeEnd),
    user_group_range_start: cdktf.numberToTerraform(struct!.userGroupRangeStart),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutUserGroupAssignmentTemplateV6AssignmentListStructToHclTerraform(struct?: ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.assignmentPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_config_template: {
      value: cdktf.stringToHclTerraform(struct!.serviceConfigTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group_range_end: {
      value: cdktf.numberToHclTerraform(struct!.userGroupRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group_range_start: {
      value: cdktf.numberToHclTerraform(struct!.userGroupRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutUserGroupAssignmentTemplateV6AssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignmentPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignmentPrefixLength = this._assignmentPrefixLength;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._serviceConfigTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfigTemplate = this._serviceConfigTemplate;
    }
    if (this._userGroupRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupRangeEnd = this._userGroupRangeEnd;
    }
    if (this._userGroupRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupRangeStart = this._userGroupRangeStart;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignmentPrefixLength = undefined;
      this._ipv6Prefix = undefined;
      this._serviceConfigTemplate = undefined;
      this._userGroupRangeEnd = undefined;
      this._userGroupRangeStart = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignmentPrefixLength = value.assignmentPrefixLength;
      this._ipv6Prefix = value.ipv6Prefix;
      this._serviceConfigTemplate = value.serviceConfigTemplate;
      this._userGroupRangeEnd = value.userGroupRangeEnd;
      this._userGroupRangeStart = value.userGroupRangeStart;
      this._uuid = value.uuid;
    }
  }

  // assignment_prefix_length - computed: false, optional: true, required: false
  private _assignmentPrefixLength?: number; 
  public get assignmentPrefixLength() {
    return this.getNumberAttribute('assignment_prefix_length');
  }
  public set assignmentPrefixLength(value: number) {
    this._assignmentPrefixLength = value;
  }
  public resetAssignmentPrefixLength() {
    this._assignmentPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPrefixLengthInput() {
    return this._assignmentPrefixLength;
  }

  // ipv6_prefix - computed: false, optional: false, required: true
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // service_config_template - computed: false, optional: true, required: false
  private _serviceConfigTemplate?: string; 
  public get serviceConfigTemplate() {
    return this.getStringAttribute('service_config_template');
  }
  public set serviceConfigTemplate(value: string) {
    this._serviceConfigTemplate = value;
  }
  public resetServiceConfigTemplate() {
    this._serviceConfigTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigTemplateInput() {
    return this._serviceConfigTemplate;
  }

  // user_group_range_end - computed: false, optional: true, required: false
  private _userGroupRangeEnd?: number; 
  public get userGroupRangeEnd() {
    return this.getNumberAttribute('user_group_range_end');
  }
  public set userGroupRangeEnd(value: number) {
    this._userGroupRangeEnd = value;
  }
  public resetUserGroupRangeEnd() {
    this._userGroupRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeEndInput() {
    return this._userGroupRangeEnd;
  }

  // user_group_range_start - computed: false, optional: true, required: false
  private _userGroupRangeStart?: number; 
  public get userGroupRangeStart() {
    return this.getNumberAttribute('user_group_range_start');
  }
  public set userGroupRangeStart(value: number) {
    this._userGroupRangeStart = value;
  }
  public resetUserGroupRangeStart() {
    this._userGroupRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeStartInput() {
    return this._userGroupRangeStart;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class ScaleoutUserGroupAssignmentTemplateV6AssignmentListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutUserGroupAssignmentTemplateV6AssignmentListStructOutputReference {
    return new ScaleoutUserGroupAssignmentTemplateV6AssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template thunder_scaleout_user_group_assignment_template}
*/
export class ScaleoutUserGroupAssignmentTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_user_group_assignment_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutUserGroupAssignmentTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutUserGroupAssignmentTemplate to import
  * @param importFromId The id of the existing ScaleoutUserGroupAssignmentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutUserGroupAssignmentTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_user_group_assignment_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_user_group_assignment_template thunder_scaleout_user_group_assignment_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutUserGroupAssignmentTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutUserGroupAssignmentTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_user_group_assignment_template',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._v4AssignmentList.internalValue = config.v4AssignmentList;
    this._v6AssignmentList.internalValue = config.v6AssignmentList;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // v4_assignment_list - computed: false, optional: true, required: false
  private _v4AssignmentList = new ScaleoutUserGroupAssignmentTemplateV4AssignmentListStructList(this, "v4_assignment_list", false);
  public get v4AssignmentList() {
    return this._v4AssignmentList;
  }
  public putV4AssignmentList(value: ScaleoutUserGroupAssignmentTemplateV4AssignmentListStruct[] | cdktf.IResolvable) {
    this._v4AssignmentList.internalValue = value;
  }
  public resetV4AssignmentList() {
    this._v4AssignmentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AssignmentListInput() {
    return this._v4AssignmentList.internalValue;
  }

  // v6_assignment_list - computed: false, optional: true, required: false
  private _v6AssignmentList = new ScaleoutUserGroupAssignmentTemplateV6AssignmentListStructList(this, "v6_assignment_list", false);
  public get v6AssignmentList() {
    return this._v6AssignmentList;
  }
  public putV6AssignmentList(value: ScaleoutUserGroupAssignmentTemplateV6AssignmentListStruct[] | cdktf.IResolvable) {
    this._v6AssignmentList.internalValue = value;
  }
  public resetV6AssignmentList() {
    this._v6AssignmentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AssignmentListInput() {
    return this._v6AssignmentList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_assignment_list: cdktf.listMapper(scaleoutUserGroupAssignmentTemplateV4AssignmentListStructToTerraform, true)(this._v4AssignmentList.internalValue),
      v6_assignment_list: cdktf.listMapper(scaleoutUserGroupAssignmentTemplateV6AssignmentListStructToTerraform, true)(this._v6AssignmentList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_assignment_list: {
        value: cdktf.listMapperHcl(scaleoutUserGroupAssignmentTemplateV4AssignmentListStructToHclTerraform, true)(this._v4AssignmentList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutUserGroupAssignmentTemplateV4AssignmentListStructList",
      },
      v6_assignment_list: {
        value: cdktf.listMapperHcl(scaleoutUserGroupAssignmentTemplateV6AssignmentListStructToHclTerraform, true)(this._v6AssignmentList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutUserGroupAssignmentTemplateV6AssignmentListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
