// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#accessmode VolumeInstance#accessmode}
  */
  readonly accessmode?: string;
  /**
  * flag to keep the contents of the volume unencrypted (in clear text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#cleartext VolumeInstance#cleartext}
  */
  readonly cleartext?: boolean | cdktf.IResolvable;
  /**
  * content tree ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#content_tree_id VolumeInstance#content_tree_id}
  */
  readonly contentTreeId?: string;
  /**
  * Detailed description of the volume instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#description VolumeInstance#description}
  */
  readonly description?: string;
  /**
  * id of the device on which volume instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#device_id VolumeInstance#device_id}
  */
  readonly deviceId?: string;
  /**
  * name of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#image VolumeInstance#image}
  */
  readonly image?: string;
  /**
  * flag to create implicit volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#implicit VolumeInstance#implicit}
  */
  readonly implicit?: boolean | cdktf.IResolvable;
  /**
  * label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#label VolumeInstance#label}
  */
  readonly label?: string;
  /**
  * flag to enable the volume to be attached to multiple app instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#multiattach VolumeInstance#multiattach}
  */
  readonly multiattach?: boolean | cdktf.IResolvable;
  /**
  * User defined name of the volume instance, unique across the enterprise. Once object is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#name VolumeInstance#name}
  */
  readonly name: string;
  /**
  * id of the project in which the volume instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#project_id VolumeInstance#project_id}
  */
  readonly projectId?: string;
  /**
  * size of volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#size_bytes VolumeInstance#size_bytes}
  */
  readonly sizeBytes?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#tags VolumeInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the volume instance. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#title VolumeInstance#title}
  */
  readonly title: string;
  /**
  * type of Volume Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#type VolumeInstance#type}
  */
  readonly type: string;
  /**
  * edge_node_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#edge_node_cluster VolumeInstance#edge_node_cluster}
  */
  readonly edgeNodeCluster?: VolumeInstanceEdgeNodeCluster[] | cdktf.IResolvable;
}
export interface VolumeInstanceRevision {
}

export function volumeInstanceRevisionToTerraform(struct?: VolumeInstanceRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function volumeInstanceRevisionToHclTerraform(struct?: VolumeInstanceRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VolumeInstanceRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeInstanceRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeInstanceRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class VolumeInstanceRevisionList extends cdktf.ComplexList {

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
  public get(index: number): VolumeInstanceRevisionOutputReference {
    return new VolumeInstanceRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeInstanceEdgeNodeCluster {
  /**
  * designated node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#designated_node_id VolumeInstance#designated_node_id}
  */
  readonly designatedNodeId?: string;
  /**
  * edge node cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#id VolumeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function volumeInstanceEdgeNodeClusterToTerraform(struct?: VolumeInstanceEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    designated_node_id: cdktf.stringToTerraform(struct!.designatedNodeId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function volumeInstanceEdgeNodeClusterToHclTerraform(struct?: VolumeInstanceEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    designated_node_id: {
      value: cdktf.stringToHclTerraform(struct!.designatedNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class VolumeInstanceEdgeNodeClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeInstanceEdgeNodeCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._designatedNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.designatedNodeId = this._designatedNodeId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeInstanceEdgeNodeCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._designatedNodeId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._designatedNodeId = value.designatedNodeId;
      this._id = value.id;
    }
  }

  // designated_node_id - computed: false, optional: true, required: false
  private _designatedNodeId?: string; 
  public get designatedNodeId() {
    return this.getStringAttribute('designated_node_id');
  }
  public set designatedNodeId(value: string) {
    this._designatedNodeId = value;
  }
  public resetDesignatedNodeId() {
    this._designatedNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designatedNodeIdInput() {
    return this._designatedNodeId;
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

export class VolumeInstanceEdgeNodeClusterList extends cdktf.ComplexList {
  public internalValue? : VolumeInstanceEdgeNodeCluster[] | cdktf.IResolvable

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
  public get(index: number): VolumeInstanceEdgeNodeClusterOutputReference {
    return new VolumeInstanceEdgeNodeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance zedcloud_volume_instance}
*/
export class VolumeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_volume_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeInstance to import
  * @param importFromId The id of the existing VolumeInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_volume_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/volume_instance zedcloud_volume_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_volume_instance',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessmode = config.accessmode;
    this._cleartext = config.cleartext;
    this._contentTreeId = config.contentTreeId;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._image = config.image;
    this._implicit = config.implicit;
    this._label = config.label;
    this._multiattach = config.multiattach;
    this._name = config.name;
    this._projectId = config.projectId;
    this._sizeBytes = config.sizeBytes;
    this._tags = config.tags;
    this._title = config.title;
    this._type = config.type;
    this._edgeNodeCluster.internalValue = config.edgeNodeCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessmode - computed: false, optional: true, required: false
  private _accessmode?: string; 
  public get accessmode() {
    return this.getStringAttribute('accessmode');
  }
  public set accessmode(value: string) {
    this._accessmode = value;
  }
  public resetAccessmode() {
    this._accessmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessmodeInput() {
    return this._accessmode;
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: boolean | cdktf.IResolvable; 
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }
  public set cleartext(value: boolean | cdktf.IResolvable) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // content_tree_id - computed: true, optional: true, required: false
  private _contentTreeId?: string; 
  public get contentTreeId() {
    return this.getStringAttribute('content_tree_id');
  }
  public set contentTreeId(value: string) {
    this._contentTreeId = value;
  }
  public resetContentTreeId() {
    this._contentTreeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTreeIdInput() {
    return this._contentTreeId;
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

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // implicit - computed: false, optional: true, required: false
  private _implicit?: boolean | cdktf.IResolvable; 
  public get implicit() {
    return this.getBooleanAttribute('implicit');
  }
  public set implicit(value: boolean | cdktf.IResolvable) {
    this._implicit = value;
  }
  public resetImplicit() {
    this._implicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitInput() {
    return this._implicit;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // multiattach - computed: false, optional: true, required: false
  private _multiattach?: boolean | cdktf.IResolvable; 
  public get multiattach() {
    return this.getBooleanAttribute('multiattach');
  }
  public set multiattach(value: boolean | cdktf.IResolvable) {
    this._multiattach = value;
  }
  public resetMultiattach() {
    this._multiattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiattachInput() {
    return this._multiattach;
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

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new VolumeInstanceRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // size_bytes - computed: false, optional: true, required: false
  private _sizeBytes?: string; 
  public get sizeBytes() {
    return this.getStringAttribute('size_bytes');
  }
  public set sizeBytes(value: string) {
    this._sizeBytes = value;
  }
  public resetSizeBytes() {
    this._sizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // edge_node_cluster - computed: false, optional: true, required: false
  private _edgeNodeCluster = new VolumeInstanceEdgeNodeClusterList(this, "edge_node_cluster", false);
  public get edgeNodeCluster() {
    return this._edgeNodeCluster;
  }
  public putEdgeNodeCluster(value: VolumeInstanceEdgeNodeCluster[] | cdktf.IResolvable) {
    this._edgeNodeCluster.internalValue = value;
  }
  public resetEdgeNodeCluster() {
    this._edgeNodeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeClusterInput() {
    return this._edgeNodeCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessmode: cdktf.stringToTerraform(this._accessmode),
      cleartext: cdktf.booleanToTerraform(this._cleartext),
      content_tree_id: cdktf.stringToTerraform(this._contentTreeId),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.stringToTerraform(this._deviceId),
      image: cdktf.stringToTerraform(this._image),
      implicit: cdktf.booleanToTerraform(this._implicit),
      label: cdktf.stringToTerraform(this._label),
      multiattach: cdktf.booleanToTerraform(this._multiattach),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      size_bytes: cdktf.stringToTerraform(this._sizeBytes),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      edge_node_cluster: cdktf.listMapper(volumeInstanceEdgeNodeClusterToTerraform, true)(this._edgeNodeCluster.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessmode: {
        value: cdktf.stringToHclTerraform(this._accessmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleartext: {
        value: cdktf.booleanToHclTerraform(this._cleartext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      content_tree_id: {
        value: cdktf.stringToHclTerraform(this._contentTreeId),
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
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implicit: {
        value: cdktf.booleanToHclTerraform(this._implicit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiattach: {
        value: cdktf.booleanToHclTerraform(this._multiattach),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_bytes: {
        value: cdktf.stringToHclTerraform(this._sizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_node_cluster: {
        value: cdktf.listMapperHcl(volumeInstanceEdgeNodeClusterToHclTerraform, true)(this._edgeNodeCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VolumeInstanceEdgeNodeClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
