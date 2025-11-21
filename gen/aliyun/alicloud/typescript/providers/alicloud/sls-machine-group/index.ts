// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlsMachineGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#group_name SlsMachineGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#group_type SlsMachineGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#id SlsMachineGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#machine_identify_type SlsMachineGroup#machine_identify_type}
  */
  readonly machineIdentifyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#machine_list SlsMachineGroup#machine_list}
  */
  readonly machineList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#project_name SlsMachineGroup#project_name}
  */
  readonly projectName: string;
  /**
  * group_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#group_attribute SlsMachineGroup#group_attribute}
  */
  readonly groupAttribute?: SlsMachineGroupGroupAttribute;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#timeouts SlsMachineGroup#timeouts}
  */
  readonly timeouts?: SlsMachineGroupTimeouts;
}
export interface SlsMachineGroupGroupAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#external_name SlsMachineGroup#external_name}
  */
  readonly externalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#group_topic SlsMachineGroup#group_topic}
  */
  readonly groupTopic?: string;
}

export function slsMachineGroupGroupAttributeToTerraform(struct?: SlsMachineGroupGroupAttributeOutputReference | SlsMachineGroupGroupAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_name: cdktf.stringToTerraform(struct!.externalName),
    group_topic: cdktf.stringToTerraform(struct!.groupTopic),
  }
}


export function slsMachineGroupGroupAttributeToHclTerraform(struct?: SlsMachineGroupGroupAttributeOutputReference | SlsMachineGroupGroupAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_name: {
      value: cdktf.stringToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_topic: {
      value: cdktf.stringToHclTerraform(struct!.groupTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsMachineGroupGroupAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsMachineGroupGroupAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._groupTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTopic = this._groupTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsMachineGroupGroupAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalName = undefined;
      this._groupTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalName = value.externalName;
      this._groupTopic = value.groupTopic;
    }
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // group_topic - computed: false, optional: true, required: false
  private _groupTopic?: string; 
  public get groupTopic() {
    return this.getStringAttribute('group_topic');
  }
  public set groupTopic(value: string) {
    this._groupTopic = value;
  }
  public resetGroupTopic() {
    this._groupTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTopicInput() {
    return this._groupTopic;
  }
}
export interface SlsMachineGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#create SlsMachineGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#delete SlsMachineGroup#delete}
  */
  readonly delete?: string;
}

export function slsMachineGroupTimeoutsToTerraform(struct?: SlsMachineGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function slsMachineGroupTimeoutsToHclTerraform(struct?: SlsMachineGroupTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsMachineGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SlsMachineGroupTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsMachineGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group alicloud_sls_machine_group}
*/
export class SlsMachineGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sls_machine_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlsMachineGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlsMachineGroup to import
  * @param importFromId The id of the existing SlsMachineGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlsMachineGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sls_machine_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/sls_machine_group alicloud_sls_machine_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlsMachineGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SlsMachineGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sls_machine_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupName = config.groupName;
    this._groupType = config.groupType;
    this._id = config.id;
    this._machineIdentifyType = config.machineIdentifyType;
    this._machineList = config.machineList;
    this._projectName = config.projectName;
    this._groupAttribute.internalValue = config.groupAttribute;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_type - computed: false, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // machine_identify_type - computed: false, optional: false, required: true
  private _machineIdentifyType?: string; 
  public get machineIdentifyType() {
    return this.getStringAttribute('machine_identify_type');
  }
  public set machineIdentifyType(value: string) {
    this._machineIdentifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineIdentifyTypeInput() {
    return this._machineIdentifyType;
  }

  // machine_list - computed: false, optional: false, required: true
  private _machineList?: string[]; 
  public get machineList() {
    return this.getListAttribute('machine_list');
  }
  public set machineList(value: string[]) {
    this._machineList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineListInput() {
    return this._machineList;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // group_attribute - computed: false, optional: true, required: false
  private _groupAttribute = new SlsMachineGroupGroupAttributeOutputReference(this, "group_attribute");
  public get groupAttribute() {
    return this._groupAttribute;
  }
  public putGroupAttribute(value: SlsMachineGroupGroupAttribute) {
    this._groupAttribute.internalValue = value;
  }
  public resetGroupAttribute() {
    this._groupAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeInput() {
    return this._groupAttribute.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SlsMachineGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SlsMachineGroupTimeouts) {
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
      group_name: cdktf.stringToTerraform(this._groupName),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      machine_identify_type: cdktf.stringToTerraform(this._machineIdentifyType),
      machine_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._machineList),
      project_name: cdktf.stringToTerraform(this._projectName),
      group_attribute: slsMachineGroupGroupAttributeToTerraform(this._groupAttribute.internalValue),
      timeouts: slsMachineGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      machine_identify_type: {
        value: cdktf.stringToHclTerraform(this._machineIdentifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._machineList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_attribute: {
        value: slsMachineGroupGroupAttributeToHclTerraform(this._groupAttribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsMachineGroupGroupAttributeList",
      },
      timeouts: {
        value: slsMachineGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SlsMachineGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
