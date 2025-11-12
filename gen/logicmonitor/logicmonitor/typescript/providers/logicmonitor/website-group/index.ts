// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebsiteGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#description WebsiteGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#disable_alerting WebsiteGroup#disable_alerting}
  */
  readonly disableAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#name WebsiteGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#parent_id WebsiteGroup#parent_id}
  */
  readonly parentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#properties WebsiteGroup#properties}
  */
  readonly properties?: WebsiteGroupProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#stop_monitoring WebsiteGroup#stop_monitoring}
  */
  readonly stopMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#test_location WebsiteGroup#test_location}
  */
  readonly testLocation?: WebsiteGroupTestLocation[] | cdktf.IResolvable;
}
export interface WebsiteGroupProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#name WebsiteGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#value WebsiteGroup#value}
  */
  readonly value?: string;
}

export function websiteGroupPropertiesToTerraform(struct?: WebsiteGroupProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function websiteGroupPropertiesToHclTerraform(struct?: WebsiteGroupProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteGroupPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebsiteGroupProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteGroupProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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
}

export class WebsiteGroupPropertiesList extends cdktf.ComplexList {
  public internalValue? : WebsiteGroupProperties[] | cdktf.IResolvable

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
  public get(index: number): WebsiteGroupPropertiesOutputReference {
    return new WebsiteGroupPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebsiteGroupTestLocationCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#collector_group_id WebsiteGroup#collector_group_id}
  */
  readonly collectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#collector_group_name WebsiteGroup#collector_group_name}
  */
  readonly collectorGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#description WebsiteGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#hostname WebsiteGroup#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#id WebsiteGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#status WebsiteGroup#status}
  */
  readonly status?: string;
}

export function websiteGroupTestLocationCollectorsToTerraform(struct?: WebsiteGroupTestLocationCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_group_id: cdktf.numberToTerraform(struct!.collectorGroupId),
    collector_group_name: cdktf.stringToTerraform(struct!.collectorGroupName),
    description: cdktf.stringToTerraform(struct!.description),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    id: cdktf.numberToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function websiteGroupTestLocationCollectorsToHclTerraform(struct?: WebsiteGroupTestLocationCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_group_name: {
      value: cdktf.stringToHclTerraform(struct!.collectorGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteGroupTestLocationCollectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebsiteGroupTestLocationCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorGroupId = this._collectorGroupId;
    }
    if (this._collectorGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorGroupName = this._collectorGroupName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteGroupTestLocationCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectorGroupId = undefined;
      this._collectorGroupName = undefined;
      this._description = undefined;
      this._hostname = undefined;
      this._id = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectorGroupId = value.collectorGroupId;
      this._collectorGroupName = value.collectorGroupName;
      this._description = value.description;
      this._hostname = value.hostname;
      this._id = value.id;
      this._status = value.status;
    }
  }

  // collector_group_id - computed: false, optional: true, required: false
  private _collectorGroupId?: number; 
  public get collectorGroupId() {
    return this.getNumberAttribute('collector_group_id');
  }
  public set collectorGroupId(value: number) {
    this._collectorGroupId = value;
  }
  public resetCollectorGroupId() {
    this._collectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupIdInput() {
    return this._collectorGroupId;
  }

  // collector_group_name - computed: false, optional: true, required: false
  private _collectorGroupName?: string; 
  public get collectorGroupName() {
    return this.getStringAttribute('collector_group_name');
  }
  public set collectorGroupName(value: string) {
    this._collectorGroupName = value;
  }
  public resetCollectorGroupName() {
    this._collectorGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupNameInput() {
    return this._collectorGroupName;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class WebsiteGroupTestLocationCollectorsList extends cdktf.ComplexList {
  public internalValue? : WebsiteGroupTestLocationCollectors[] | cdktf.IResolvable

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
  public get(index: number): WebsiteGroupTestLocationCollectorsOutputReference {
    return new WebsiteGroupTestLocationCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebsiteGroupTestLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#all WebsiteGroup#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#collector_ids WebsiteGroup#collector_ids}
  */
  readonly collectorIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#collectors WebsiteGroup#collectors}
  */
  readonly collectors?: WebsiteGroupTestLocationCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#smg_ids WebsiteGroup#smg_ids}
  */
  readonly smgIds?: number[];
}

export function websiteGroupTestLocationToTerraform(struct?: WebsiteGroupTestLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    collector_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.collectorIds),
    collectors: cdktf.listMapper(websiteGroupTestLocationCollectorsToTerraform, false)(struct!.collectors),
    smg_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.smgIds),
  }
}


export function websiteGroupTestLocationToHclTerraform(struct?: WebsiteGroupTestLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collector_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.collectorIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    collectors: {
      value: cdktf.listMapperHcl(websiteGroupTestLocationCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "WebsiteGroupTestLocationCollectorsList",
    },
    smg_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.smgIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebsiteGroupTestLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebsiteGroupTestLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._collectorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorIds = this._collectorIds;
    }
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._smgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.smgIds = this._smgIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebsiteGroupTestLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._collectorIds = undefined;
      this._collectors.internalValue = undefined;
      this._smgIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._collectorIds = value.collectorIds;
      this._collectors.internalValue = value.collectors;
      this._smgIds = value.smgIds;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // collector_ids - computed: false, optional: true, required: false
  private _collectorIds?: number[]; 
  public get collectorIds() {
    return this.getNumberListAttribute('collector_ids');
  }
  public set collectorIds(value: number[]) {
    this._collectorIds = value;
  }
  public resetCollectorIds() {
    this._collectorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdsInput() {
    return this._collectorIds;
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new WebsiteGroupTestLocationCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: WebsiteGroupTestLocationCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // smg_ids - computed: false, optional: true, required: false
  private _smgIds?: number[]; 
  public get smgIds() {
    return this.getNumberListAttribute('smg_ids');
  }
  public set smgIds(value: number[]) {
    this._smgIds = value;
  }
  public resetSmgIds() {
    this._smgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smgIdsInput() {
    return this._smgIds;
  }
}

export class WebsiteGroupTestLocationList extends cdktf.ComplexList {
  public internalValue? : WebsiteGroupTestLocation[] | cdktf.IResolvable

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
  public get(index: number): WebsiteGroupTestLocationOutputReference {
    return new WebsiteGroupTestLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group logicmonitor_website_group}
*/
export class WebsiteGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_website_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebsiteGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebsiteGroup to import
  * @param importFromId The id of the existing WebsiteGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebsiteGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_website_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/website_group logicmonitor_website_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebsiteGroupConfig
  */
  public constructor(scope: Construct, id: string, config: WebsiteGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_website_group',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25',
        providerVersionConstraint: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._disableAlerting = config.disableAlerting;
    this._name = config.name;
    this._parentId = config.parentId;
    this._properties.internalValue = config.properties;
    this._stopMonitoring = config.stopMonitoring;
    this._testLocation.internalValue = config.testLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disable_alerting - computed: false, optional: true, required: false
  private _disableAlerting?: boolean | cdktf.IResolvable; 
  public get disableAlerting() {
    return this.getBooleanAttribute('disable_alerting');
  }
  public set disableAlerting(value: boolean | cdktf.IResolvable) {
    this._disableAlerting = value;
  }
  public resetDisableAlerting() {
    this._disableAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAlertingInput() {
    return this._disableAlerting;
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }

  // has_websites_disabled - computed: true, optional: false, required: false
  public get hasWebsitesDisabled() {
    return this.getBooleanAttribute('has_websites_disabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // num_of_direct_sub_groups - computed: true, optional: false, required: false
  public get numOfDirectSubGroups() {
    return this.getNumberAttribute('num_of_direct_sub_groups');
  }

  // num_of_direct_websites - computed: true, optional: false, required: false
  public get numOfDirectWebsites() {
    return this.getNumberAttribute('num_of_direct_websites');
  }

  // num_of_websites - computed: true, optional: false, required: false
  public get numOfWebsites() {
    return this.getNumberAttribute('num_of_websites');
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new WebsiteGroupPropertiesList(this, "properties", true);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: WebsiteGroupProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // stop_monitoring - computed: false, optional: true, required: false
  private _stopMonitoring?: boolean | cdktf.IResolvable; 
  public get stopMonitoring() {
    return this.getBooleanAttribute('stop_monitoring');
  }
  public set stopMonitoring(value: boolean | cdktf.IResolvable) {
    this._stopMonitoring = value;
  }
  public resetStopMonitoring() {
    this._stopMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopMonitoringInput() {
    return this._stopMonitoring;
  }

  // test_location - computed: false, optional: true, required: false
  private _testLocation = new WebsiteGroupTestLocationList(this, "test_location", false);
  public get testLocation() {
    return this._testLocation;
  }
  public putTestLocation(value: WebsiteGroupTestLocation[] | cdktf.IResolvable) {
    this._testLocation.internalValue = value;
  }
  public resetTestLocation() {
    this._testLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testLocationInput() {
    return this._testLocation.internalValue;
  }

  // user_permission - computed: true, optional: false, required: false
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable_alerting: cdktf.booleanToTerraform(this._disableAlerting),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.numberToTerraform(this._parentId),
      properties: cdktf.listMapper(websiteGroupPropertiesToTerraform, false)(this._properties.internalValue),
      stop_monitoring: cdktf.booleanToTerraform(this._stopMonitoring),
      test_location: cdktf.listMapper(websiteGroupTestLocationToTerraform, false)(this._testLocation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_alerting: {
        value: cdktf.booleanToHclTerraform(this._disableAlerting),
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
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      properties: {
        value: cdktf.listMapperHcl(websiteGroupPropertiesToHclTerraform, false)(this._properties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebsiteGroupPropertiesList",
      },
      stop_monitoring: {
        value: cdktf.booleanToHclTerraform(this._stopMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_location: {
        value: cdktf.listMapperHcl(websiteGroupTestLocationToHclTerraform, false)(this._testLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebsiteGroupTestLocationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
