// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudDesktopsDesktopConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Desktop Group to which the Desktop belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#desktop_group_id CloudDesktopsDesktop#desktop_group_id}
  */
  readonly desktopGroupId: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#labels CloudDesktopsDesktop#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The list of members which can use the Desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#members CloudDesktopsDesktop#members}
  */
  readonly members?: CloudDesktopsDesktopMembers[] | cdktf.IResolvable;
  /**
  * The name of the Desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#name CloudDesktopsDesktop#name}
  */
  readonly name?: string;
  /**
  * The specification of the Desktop network interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#network_interface CloudDesktopsDesktop#network_interface}
  */
  readonly networkInterface?: CloudDesktopsDesktopNetworkInterface;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#timeouts CloudDesktopsDesktop#timeouts}
  */
  readonly timeouts?: CloudDesktopsDesktopTimeouts;
}
export interface CloudDesktopsDesktopMembers {
  /**
  * Identity of the access binding. See [the official documentation](https://yandex.cloud/ru/docs/cloud-desktop/api-ref/grpc/Desktop/create#yandex.cloud.clouddesktop.v1.api.User)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#subject_id CloudDesktopsDesktop#subject_id}
  */
  readonly subjectId: string;
  /**
  * Type of the access binding. See [the official documentation](https://yandex.cloud/ru/docs/cloud-desktop/api-ref/grpc/Desktop/create#yandex.cloud.clouddesktop.v1.api.User)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#subject_type CloudDesktopsDesktop#subject_type}
  */
  readonly subjectType: string;
}

export function cloudDesktopsDesktopMembersToTerraform(struct?: CloudDesktopsDesktopMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_id: cdktf.stringToTerraform(struct!.subjectId),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function cloudDesktopsDesktopMembersToHclTerraform(struct?: CloudDesktopsDesktopMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject_id: {
      value: cdktf.stringToHclTerraform(struct!.subjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDesktopsDesktopMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subjectId = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subjectId = value.subjectId;
      this._subjectType = value.subjectType;
    }
  }

  // subject_id - computed: false, optional: false, required: true
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}

export class CloudDesktopsDesktopMembersList extends cdktf.ComplexList {
  public internalValue? : CloudDesktopsDesktopMembers[] | cdktf.IResolvable

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
  public get(index: number): CloudDesktopsDesktopMembersOutputReference {
    return new CloudDesktopsDesktopMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDesktopsDesktopNetworkInterface {
  /**
  * ID of the subnet for desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#subnet_id CloudDesktopsDesktop#subnet_id}
  */
  readonly subnetId?: string;
}

export function cloudDesktopsDesktopNetworkInterfaceToTerraform(struct?: CloudDesktopsDesktopNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function cloudDesktopsDesktopNetworkInterfaceToHclTerraform(struct?: CloudDesktopsDesktopNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetId = value.subnetId;
    }
  }

  // subnet_id - computed: false, optional: true, required: false
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
}
export interface CloudDesktopsDesktopTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#create CloudDesktopsDesktop#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#delete CloudDesktopsDesktop#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#update CloudDesktopsDesktop#update}
  */
  readonly update?: string;
}

export function cloudDesktopsDesktopTimeoutsToTerraform(struct?: CloudDesktopsDesktopTimeouts | cdktf.IResolvable): any {
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


export function cloudDesktopsDesktopTimeoutsToHclTerraform(struct?: CloudDesktopsDesktopTimeouts | cdktf.IResolvable): any {
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

export class CloudDesktopsDesktopTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudDesktopsDesktopTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop yandex_cloud_desktops_desktop}
*/
export class CloudDesktopsDesktop extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cloud_desktops_desktop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudDesktopsDesktop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudDesktopsDesktop to import
  * @param importFromId The id of the existing CloudDesktopsDesktop that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudDesktopsDesktop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_cloud_desktops_desktop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/cloud_desktops_desktop yandex_cloud_desktops_desktop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudDesktopsDesktopConfig
  */
  public constructor(scope: Construct, id: string, config: CloudDesktopsDesktopConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_cloud_desktops_desktop',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desktopGroupId = config.desktopGroupId;
    this._labels = config.labels;
    this._members.internalValue = config.members;
    this._name = config.name;
    this._networkInterface.internalValue = config.networkInterface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desktop_group_id - computed: false, optional: false, required: true
  private _desktopGroupId?: string; 
  public get desktopGroupId() {
    return this.getStringAttribute('desktop_group_id');
  }
  public set desktopGroupId(value: string) {
    this._desktopGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopGroupIdInput() {
    return this._desktopGroupId;
  }

  // desktop_id - computed: true, optional: false, required: false
  public get desktopId() {
    return this.getStringAttribute('desktop_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // members - computed: false, optional: true, required: false
  private _members = new CloudDesktopsDesktopMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: CloudDesktopsDesktopMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
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

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new CloudDesktopsDesktopNetworkInterfaceOutputReference(this, "network_interface");
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: CloudDesktopsDesktopNetworkInterface) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudDesktopsDesktopTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudDesktopsDesktopTimeouts) {
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
      desktop_group_id: cdktf.stringToTerraform(this._desktopGroupId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      members: cdktf.listMapper(cloudDesktopsDesktopMembersToTerraform, false)(this._members.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_interface: cloudDesktopsDesktopNetworkInterfaceToTerraform(this._networkInterface.internalValue),
      timeouts: cloudDesktopsDesktopTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desktop_group_id: {
        value: cdktf.stringToHclTerraform(this._desktopGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      members: {
        value: cdktf.listMapperHcl(cloudDesktopsDesktopMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudDesktopsDesktopMembersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface: {
        value: cloudDesktopsDesktopNetworkInterfaceToHclTerraform(this._networkInterface.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDesktopsDesktopNetworkInterface",
      },
      timeouts: {
        value: cloudDesktopsDesktopTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDesktopsDesktopTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
