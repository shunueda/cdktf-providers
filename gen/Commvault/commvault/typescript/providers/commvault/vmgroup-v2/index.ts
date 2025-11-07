// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmgroupV2Config extends cdktf.TerraformMetaArguments {
  /**
  * True if file indexing needs to be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enablefileindexing VmgroupV2#enablefileindexing}
  */
  readonly enablefileindexing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * subclient name 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name: string;
  /**
  * accessnode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#accessnode VmgroupV2#accessnode}
  */
  readonly accessnode?: VmgroupV2Accessnode[] | cdktf.IResolvable;
  /**
  * activitycontrol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#activitycontrol VmgroupV2#activitycontrol}
  */
  readonly activitycontrol?: VmgroupV2Activitycontrol[] | cdktf.IResolvable;
  /**
  * applicationvalidation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#applicationvalidation VmgroupV2#applicationvalidation}
  */
  readonly applicationvalidation?: VmgroupV2Applicationvalidation[] | cdktf.IResolvable;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#content VmgroupV2#content}
  */
  readonly content: VmgroupV2Content[] | cdktf.IResolvable;
  /**
  * diskfilters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#diskfilters VmgroupV2#diskfilters}
  */
  readonly diskfilters?: VmgroupV2Diskfilters[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#filters VmgroupV2#filters}
  */
  readonly filters?: VmgroupV2Filters[] | cdktf.IResolvable;
  /**
  * hypervisor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#hypervisor VmgroupV2#hypervisor}
  */
  readonly hypervisor: VmgroupV2Hypervisor[] | cdktf.IResolvable;
  /**
  * meditech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#meditech VmgroupV2#meditech}
  */
  readonly meditech?: VmgroupV2Meditech[] | cdktf.IResolvable;
  /**
  * meditechsystems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#meditechsystems VmgroupV2#meditechsystems}
  */
  readonly meditechsystems?: VmgroupV2Meditechsystems[] | cdktf.IResolvable;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#plan VmgroupV2#plan}
  */
  readonly plan: VmgroupV2Plan[] | cdktf.IResolvable;
  /**
  * securityassociations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#securityassociations VmgroupV2#securityassociations}
  */
  readonly securityassociations?: VmgroupV2Securityassociations[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#settings VmgroupV2#settings}
  */
  readonly settings?: VmgroupV2Settings[] | cdktf.IResolvable;
  /**
  * snapshotmanagement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#snapshotmanagement VmgroupV2#snapshotmanagement}
  */
  readonly snapshotmanagement?: VmgroupV2Snapshotmanagement[] | cdktf.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#storage VmgroupV2#storage}
  */
  readonly storage?: VmgroupV2Storage[] | cdktf.IResolvable;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#timezone VmgroupV2#timezone}
  */
  readonly timezone?: VmgroupV2Timezone[] | cdktf.IResolvable;
}
export interface VmgroupV2Accessnode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function vmgroupV2AccessnodeToTerraform(struct?: VmgroupV2Accessnode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function vmgroupV2AccessnodeToHclTerraform(struct?: VmgroupV2Accessnode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2AccessnodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Accessnode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Accessnode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class VmgroupV2AccessnodeList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Accessnode[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2AccessnodeOutputReference {
    return new VmgroupV2AccessnodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToTerraform(struct?: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToHclTerraform(struct?: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference {
    return new VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime {
  /**
  * delay time in unix timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#time VmgroupV2#time}
  */
  readonly time?: number;
  /**
  * actual delay time value in string format according to the timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#value VmgroupV2#value}
  */
  readonly value?: string;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#timezone VmgroupV2#timezone}
  */
  readonly timezone?: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable;
}

export function vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeToTerraform(struct?: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    value: cdktf.stringToTerraform(struct!.value),
    timezone: cdktf.listMapper(vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeToHclTerraform(struct?: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.listMapperHcl(vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._timezone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._time = undefined;
      this._value = undefined;
      this._timezone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._time = value.time;
      this._value = value.value;
      this._timezone.internalValue = value.timezone;
    }
  }

  // time - computed: true, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone = new VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable) {
    this._timezone.internalValue = value;
  }
  public resetTimezone() {
    this._timezone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone.internalValue;
  }
}

export class VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference {
    return new VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ActivitycontrolBackupactivitycontroloptions {
  /**
  * denotes the activity type being considered [BACKUP, RESTORE, ONLINECI, ARCHIVEPRUNE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#activitytype VmgroupV2#activitytype}
  */
  readonly activitytype?: string;
  /**
  * True if the activity type is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enableactivitytype VmgroupV2#enableactivitytype}
  */
  readonly enableactivitytype?: string;
  /**
  * True if the activity will be enabled after a delay time interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enableafteradelay VmgroupV2#enableafteradelay}
  */
  readonly enableafteradelay?: string;
  /**
  * delaytime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#delaytime VmgroupV2#delaytime}
  */
  readonly delaytime?: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable;
}

export function vmgroupV2ActivitycontrolBackupactivitycontroloptionsToTerraform(struct?: VmgroupV2ActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activitytype: cdktf.stringToTerraform(struct!.activitytype),
    enableactivitytype: cdktf.stringToTerraform(struct!.enableactivitytype),
    enableafteradelay: cdktf.stringToTerraform(struct!.enableafteradelay),
    delaytime: cdktf.listMapper(vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeToTerraform, true)(struct!.delaytime),
  }
}


export function vmgroupV2ActivitycontrolBackupactivitycontroloptionsToHclTerraform(struct?: VmgroupV2ActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activitytype: {
      value: cdktf.stringToHclTerraform(struct!.activitytype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enableactivitytype: {
      value: cdktf.stringToHclTerraform(struct!.enableactivitytype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enableafteradelay: {
      value: cdktf.stringToHclTerraform(struct!.enableafteradelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delaytime: {
      value: cdktf.listMapperHcl(vmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeToHclTerraform, true)(struct!.delaytime),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ActivitycontrolBackupactivitycontroloptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activitytype !== undefined) {
      hasAnyValues = true;
      internalValueResult.activitytype = this._activitytype;
    }
    if (this._enableactivitytype !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableactivitytype = this._enableactivitytype;
    }
    if (this._enableafteradelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableafteradelay = this._enableafteradelay;
    }
    if (this._delaytime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delaytime = this._delaytime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activitytype = undefined;
      this._enableactivitytype = undefined;
      this._enableafteradelay = undefined;
      this._delaytime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activitytype = value.activitytype;
      this._enableactivitytype = value.enableactivitytype;
      this._enableafteradelay = value.enableafteradelay;
      this._delaytime.internalValue = value.delaytime;
    }
  }

  // activitytype - computed: true, optional: true, required: false
  private _activitytype?: string; 
  public get activitytype() {
    return this.getStringAttribute('activitytype');
  }
  public set activitytype(value: string) {
    this._activitytype = value;
  }
  public resetActivitytype() {
    this._activitytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitytypeInput() {
    return this._activitytype;
  }

  // enableactivitytype - computed: true, optional: true, required: false
  private _enableactivitytype?: string; 
  public get enableactivitytype() {
    return this.getStringAttribute('enableactivitytype');
  }
  public set enableactivitytype(value: string) {
    this._enableactivitytype = value;
  }
  public resetEnableactivitytype() {
    this._enableactivitytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableactivitytypeInput() {
    return this._enableactivitytype;
  }

  // enableafteradelay - computed: true, optional: true, required: false
  private _enableafteradelay?: string; 
  public get enableafteradelay() {
    return this.getStringAttribute('enableafteradelay');
  }
  public set enableafteradelay(value: string) {
    this._enableafteradelay = value;
  }
  public resetEnableafteradelay() {
    this._enableafteradelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableafteradelayInput() {
    return this._enableafteradelay;
  }

  // delaytime - computed: false, optional: true, required: false
  private _delaytime = new VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytimeList(this, "delaytime", false);
  public get delaytime() {
    return this._delaytime;
  }
  public putDelaytime(value: VmgroupV2ActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable) {
    this._delaytime.internalValue = value;
  }
  public resetDelaytime() {
    this._delaytime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaytimeInput() {
    return this._delaytime.internalValue;
  }
}

export class VmgroupV2ActivitycontrolBackupactivitycontroloptionsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ActivitycontrolBackupactivitycontroloptionsOutputReference {
    return new VmgroupV2ActivitycontrolBackupactivitycontroloptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToTerraform(struct?: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToHclTerraform(struct?: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference {
    return new VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime {
  /**
  * delay time in unix timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#time VmgroupV2#time}
  */
  readonly time?: number;
  /**
  * actual delay time value in string format according to the timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#value VmgroupV2#value}
  */
  readonly value?: string;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#timezone VmgroupV2#timezone}
  */
  readonly timezone?: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable;
}

export function vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeToTerraform(struct?: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    value: cdktf.stringToTerraform(struct!.value),
    timezone: cdktf.listMapper(vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeToHclTerraform(struct?: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.listMapperHcl(vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._timezone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._time = undefined;
      this._value = undefined;
      this._timezone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._time = value.time;
      this._value = value.value;
      this._timezone.internalValue = value.timezone;
    }
  }

  // time - computed: true, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone = new VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable) {
    this._timezone.internalValue = value;
  }
  public resetTimezone() {
    this._timezone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone.internalValue;
  }
}

export class VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference {
    return new VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ActivitycontrolRestoreactivitycontroloptions {
  /**
  * denotes the activity type being considered [BACKUP, RESTORE, ONLINECI, ARCHIVEPRUNE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#activitytype VmgroupV2#activitytype}
  */
  readonly activitytype?: string;
  /**
  * True if the activity type is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enableactivitytype VmgroupV2#enableactivitytype}
  */
  readonly enableactivitytype?: string;
  /**
  * True if the activity will be enabled after a delay time interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enableafteradelay VmgroupV2#enableafteradelay}
  */
  readonly enableafteradelay?: string;
  /**
  * delaytime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#delaytime VmgroupV2#delaytime}
  */
  readonly delaytime?: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable;
}

export function vmgroupV2ActivitycontrolRestoreactivitycontroloptionsToTerraform(struct?: VmgroupV2ActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activitytype: cdktf.stringToTerraform(struct!.activitytype),
    enableactivitytype: cdktf.stringToTerraform(struct!.enableactivitytype),
    enableafteradelay: cdktf.stringToTerraform(struct!.enableafteradelay),
    delaytime: cdktf.listMapper(vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeToTerraform, true)(struct!.delaytime),
  }
}


export function vmgroupV2ActivitycontrolRestoreactivitycontroloptionsToHclTerraform(struct?: VmgroupV2ActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activitytype: {
      value: cdktf.stringToHclTerraform(struct!.activitytype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enableactivitytype: {
      value: cdktf.stringToHclTerraform(struct!.enableactivitytype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enableafteradelay: {
      value: cdktf.stringToHclTerraform(struct!.enableafteradelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delaytime: {
      value: cdktf.listMapperHcl(vmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeToHclTerraform, true)(struct!.delaytime),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ActivitycontrolRestoreactivitycontroloptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activitytype !== undefined) {
      hasAnyValues = true;
      internalValueResult.activitytype = this._activitytype;
    }
    if (this._enableactivitytype !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableactivitytype = this._enableactivitytype;
    }
    if (this._enableafteradelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableafteradelay = this._enableafteradelay;
    }
    if (this._delaytime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delaytime = this._delaytime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activitytype = undefined;
      this._enableactivitytype = undefined;
      this._enableafteradelay = undefined;
      this._delaytime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activitytype = value.activitytype;
      this._enableactivitytype = value.enableactivitytype;
      this._enableafteradelay = value.enableafteradelay;
      this._delaytime.internalValue = value.delaytime;
    }
  }

  // activitytype - computed: true, optional: true, required: false
  private _activitytype?: string; 
  public get activitytype() {
    return this.getStringAttribute('activitytype');
  }
  public set activitytype(value: string) {
    this._activitytype = value;
  }
  public resetActivitytype() {
    this._activitytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitytypeInput() {
    return this._activitytype;
  }

  // enableactivitytype - computed: true, optional: true, required: false
  private _enableactivitytype?: string; 
  public get enableactivitytype() {
    return this.getStringAttribute('enableactivitytype');
  }
  public set enableactivitytype(value: string) {
    this._enableactivitytype = value;
  }
  public resetEnableactivitytype() {
    this._enableactivitytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableactivitytypeInput() {
    return this._enableactivitytype;
  }

  // enableafteradelay - computed: true, optional: true, required: false
  private _enableafteradelay?: string; 
  public get enableafteradelay() {
    return this.getStringAttribute('enableafteradelay');
  }
  public set enableafteradelay(value: string) {
    this._enableafteradelay = value;
  }
  public resetEnableafteradelay() {
    this._enableafteradelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableafteradelayInput() {
    return this._enableafteradelay;
  }

  // delaytime - computed: false, optional: true, required: false
  private _delaytime = new VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytimeList(this, "delaytime", false);
  public get delaytime() {
    return this._delaytime;
  }
  public putDelaytime(value: VmgroupV2ActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable) {
    this._delaytime.internalValue = value;
  }
  public resetDelaytime() {
    this._delaytime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaytimeInput() {
    return this._delaytime.internalValue;
  }
}

export class VmgroupV2ActivitycontrolRestoreactivitycontroloptionsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ActivitycontrolRestoreactivitycontroloptionsOutputReference {
    return new VmgroupV2ActivitycontrolRestoreactivitycontroloptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Activitycontrol {
  /**
  * true if Backup is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enablebackup VmgroupV2#enablebackup}
  */
  readonly enablebackup?: string;
  /**
  * true if Restore is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enablerestore VmgroupV2#enablerestore}
  */
  readonly enablerestore?: string;
  /**
  * backupactivitycontroloptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#backupactivitycontroloptions VmgroupV2#backupactivitycontroloptions}
  */
  readonly backupactivitycontroloptions?: VmgroupV2ActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable;
  /**
  * restoreactivitycontroloptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#restoreactivitycontroloptions VmgroupV2#restoreactivitycontroloptions}
  */
  readonly restoreactivitycontroloptions?: VmgroupV2ActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable;
}

export function vmgroupV2ActivitycontrolToTerraform(struct?: VmgroupV2Activitycontrol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enablebackup: cdktf.stringToTerraform(struct!.enablebackup),
    enablerestore: cdktf.stringToTerraform(struct!.enablerestore),
    backupactivitycontroloptions: cdktf.listMapper(vmgroupV2ActivitycontrolBackupactivitycontroloptionsToTerraform, true)(struct!.backupactivitycontroloptions),
    restoreactivitycontroloptions: cdktf.listMapper(vmgroupV2ActivitycontrolRestoreactivitycontroloptionsToTerraform, true)(struct!.restoreactivitycontroloptions),
  }
}


export function vmgroupV2ActivitycontrolToHclTerraform(struct?: VmgroupV2Activitycontrol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enablebackup: {
      value: cdktf.stringToHclTerraform(struct!.enablebackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enablerestore: {
      value: cdktf.stringToHclTerraform(struct!.enablerestore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backupactivitycontroloptions: {
      value: cdktf.listMapperHcl(vmgroupV2ActivitycontrolBackupactivitycontroloptionsToHclTerraform, true)(struct!.backupactivitycontroloptions),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ActivitycontrolBackupactivitycontroloptionsList",
    },
    restoreactivitycontroloptions: {
      value: cdktf.listMapperHcl(vmgroupV2ActivitycontrolRestoreactivitycontroloptionsToHclTerraform, true)(struct!.restoreactivitycontroloptions),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ActivitycontrolRestoreactivitycontroloptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ActivitycontrolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Activitycontrol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablebackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablebackup = this._enablebackup;
    }
    if (this._enablerestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablerestore = this._enablerestore;
    }
    if (this._backupactivitycontroloptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupactivitycontroloptions = this._backupactivitycontroloptions?.internalValue;
    }
    if (this._restoreactivitycontroloptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreactivitycontroloptions = this._restoreactivitycontroloptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Activitycontrol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablebackup = undefined;
      this._enablerestore = undefined;
      this._backupactivitycontroloptions.internalValue = undefined;
      this._restoreactivitycontroloptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablebackup = value.enablebackup;
      this._enablerestore = value.enablerestore;
      this._backupactivitycontroloptions.internalValue = value.backupactivitycontroloptions;
      this._restoreactivitycontroloptions.internalValue = value.restoreactivitycontroloptions;
    }
  }

  // enablebackup - computed: true, optional: true, required: false
  private _enablebackup?: string; 
  public get enablebackup() {
    return this.getStringAttribute('enablebackup');
  }
  public set enablebackup(value: string) {
    this._enablebackup = value;
  }
  public resetEnablebackup() {
    this._enablebackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablebackupInput() {
    return this._enablebackup;
  }

  // enablerestore - computed: true, optional: true, required: false
  private _enablerestore?: string; 
  public get enablerestore() {
    return this.getStringAttribute('enablerestore');
  }
  public set enablerestore(value: string) {
    this._enablerestore = value;
  }
  public resetEnablerestore() {
    this._enablerestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablerestoreInput() {
    return this._enablerestore;
  }

  // backupactivitycontroloptions - computed: false, optional: true, required: false
  private _backupactivitycontroloptions = new VmgroupV2ActivitycontrolBackupactivitycontroloptionsList(this, "backupactivitycontroloptions", false);
  public get backupactivitycontroloptions() {
    return this._backupactivitycontroloptions;
  }
  public putBackupactivitycontroloptions(value: VmgroupV2ActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable) {
    this._backupactivitycontroloptions.internalValue = value;
  }
  public resetBackupactivitycontroloptions() {
    this._backupactivitycontroloptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupactivitycontroloptionsInput() {
    return this._backupactivitycontroloptions.internalValue;
  }

  // restoreactivitycontroloptions - computed: false, optional: true, required: false
  private _restoreactivitycontroloptions = new VmgroupV2ActivitycontrolRestoreactivitycontroloptionsList(this, "restoreactivitycontroloptions", false);
  public get restoreactivitycontroloptions() {
    return this._restoreactivitycontroloptions;
  }
  public putRestoreactivitycontroloptions(value: VmgroupV2ActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable) {
    this._restoreactivitycontroloptions.internalValue = value;
  }
  public resetRestoreactivitycontroloptions() {
    this._restoreactivitycontroloptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreactivitycontroloptionsInput() {
    return this._restoreactivitycontroloptions.internalValue;
  }
}

export class VmgroupV2ActivitycontrolList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Activitycontrol[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ActivitycontrolOutputReference {
    return new VmgroupV2ActivitycontrolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCopyBackupdestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2ApplicationvalidationCopyBackupdestinationToTerraform(struct?: VmgroupV2ApplicationvalidationCopyBackupdestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2ApplicationvalidationCopyBackupdestinationToHclTerraform(struct?: VmgroupV2ApplicationvalidationCopyBackupdestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCopyBackupdestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCopyBackupdestination | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCopyBackupdestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2ApplicationvalidationCopyBackupdestinationList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCopyBackupdestination[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCopyBackupdestinationOutputReference {
    return new VmgroupV2ApplicationvalidationCopyBackupdestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCopy {
  /**
  * Order of backup destinaion copy created in storage policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#copyprecedence VmgroupV2#copyprecedence}
  */
  readonly copyprecedence?: number;
  /**
  * Id of the source copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Is this an active backup destination?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#isactive VmgroupV2#isactive}
  */
  readonly isactive?: string;
  /**
  * Is this a snap copy?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#issnapcopy VmgroupV2#issnapcopy}
  */
  readonly issnapcopy?: string;
  /**
  * Name of the source copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * backupdestination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#backupdestination VmgroupV2#backupdestination}
  */
  readonly backupdestination?: VmgroupV2ApplicationvalidationCopyBackupdestination[] | cdktf.IResolvable;
}

export function vmgroupV2ApplicationvalidationCopyToTerraform(struct?: VmgroupV2ApplicationvalidationCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copyprecedence: cdktf.numberToTerraform(struct!.copyprecedence),
    id: cdktf.numberToTerraform(struct!.id),
    isactive: cdktf.stringToTerraform(struct!.isactive),
    issnapcopy: cdktf.stringToTerraform(struct!.issnapcopy),
    name: cdktf.stringToTerraform(struct!.name),
    backupdestination: cdktf.listMapper(vmgroupV2ApplicationvalidationCopyBackupdestinationToTerraform, true)(struct!.backupdestination),
  }
}


export function vmgroupV2ApplicationvalidationCopyToHclTerraform(struct?: VmgroupV2ApplicationvalidationCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copyprecedence: {
      value: cdktf.numberToHclTerraform(struct!.copyprecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isactive: {
      value: cdktf.stringToHclTerraform(struct!.isactive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issnapcopy: {
      value: cdktf.stringToHclTerraform(struct!.issnapcopy),
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
    backupdestination: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCopyBackupdestinationToHclTerraform, true)(struct!.backupdestination),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCopyBackupdestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCopyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCopy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyprecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyprecedence = this._copyprecedence;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isactive = this._isactive;
    }
    if (this._issnapcopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.issnapcopy = this._issnapcopy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._backupdestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupdestination = this._backupdestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCopy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyprecedence = undefined;
      this._id = undefined;
      this._isactive = undefined;
      this._issnapcopy = undefined;
      this._name = undefined;
      this._backupdestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyprecedence = value.copyprecedence;
      this._id = value.id;
      this._isactive = value.isactive;
      this._issnapcopy = value.issnapcopy;
      this._name = value.name;
      this._backupdestination.internalValue = value.backupdestination;
    }
  }

  // copyprecedence - computed: true, optional: true, required: false
  private _copyprecedence?: number; 
  public get copyprecedence() {
    return this.getNumberAttribute('copyprecedence');
  }
  public set copyprecedence(value: number) {
    this._copyprecedence = value;
  }
  public resetCopyprecedence() {
    this._copyprecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyprecedenceInput() {
    return this._copyprecedence;
  }

  // id - computed: true, optional: true, required: false
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

  // isactive - computed: true, optional: true, required: false
  private _isactive?: string; 
  public get isactive() {
    return this.getStringAttribute('isactive');
  }
  public set isactive(value: string) {
    this._isactive = value;
  }
  public resetIsactive() {
    this._isactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isactiveInput() {
    return this._isactive;
  }

  // issnapcopy - computed: true, optional: true, required: false
  private _issnapcopy?: string; 
  public get issnapcopy() {
    return this.getStringAttribute('issnapcopy');
  }
  public set issnapcopy(value: string) {
    this._issnapcopy = value;
  }
  public resetIssnapcopy() {
    this._issnapcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issnapcopyInput() {
    return this._issnapcopy;
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

  // backupdestination - computed: false, optional: true, required: false
  private _backupdestination = new VmgroupV2ApplicationvalidationCopyBackupdestinationList(this, "backupdestination", false);
  public get backupdestination() {
    return this._backupdestination;
  }
  public putBackupdestination(value: VmgroupV2ApplicationvalidationCopyBackupdestination[] | cdktf.IResolvable) {
    this._backupdestination.internalValue = value;
  }
  public resetBackupdestination() {
    this._backupdestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupdestinationInput() {
    return this._backupdestination.internalValue;
  }
}

export class VmgroupV2ApplicationvalidationCopyList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCopy[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCopyOutputReference {
    return new VmgroupV2ApplicationvalidationCopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#password VmgroupV2#password}
  */
  readonly password?: string;
}

export function vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsToTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsToHclTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
    }
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsOutputReference {
    return new VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsToTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsToHclTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsOutputReference {
    return new VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCustomvalidationscriptUnix {
  /**
  * Arguments for the script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#arguments VmgroupV2#arguments}
  */
  readonly arguments?: string;
  /**
  * Is the script disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#isdisabled VmgroupV2#isdisabled}
  */
  readonly isdisabled?: string;
  /**
  * True if the script is local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#islocal VmgroupV2#islocal}
  */
  readonly islocal?: string;
  /**
  * Path for the validation script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#path VmgroupV2#path}
  */
  readonly path?: string;
  /**
  * unccredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#unccredentials VmgroupV2#unccredentials}
  */
  readonly unccredentials?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials[] | cdktf.IResolvable;
  /**
  * uncsavedcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#uncsavedcredentials VmgroupV2#uncsavedcredentials}
  */
  readonly uncsavedcredentials?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials[] | cdktf.IResolvable;
}

export function vmgroupV2ApplicationvalidationCustomvalidationscriptUnixToTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    isdisabled: cdktf.stringToTerraform(struct!.isdisabled),
    islocal: cdktf.stringToTerraform(struct!.islocal),
    path: cdktf.stringToTerraform(struct!.path),
    unccredentials: cdktf.listMapper(vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsToTerraform, true)(struct!.unccredentials),
    uncsavedcredentials: cdktf.listMapper(vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsToTerraform, true)(struct!.uncsavedcredentials),
  }
}


export function vmgroupV2ApplicationvalidationCustomvalidationscriptUnixToHclTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isdisabled: {
      value: cdktf.stringToHclTerraform(struct!.isdisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    islocal: {
      value: cdktf.stringToHclTerraform(struct!.islocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unccredentials: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsToHclTerraform, true)(struct!.unccredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsList",
    },
    uncsavedcredentials: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsToHclTerraform, true)(struct!.uncsavedcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptUnixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCustomvalidationscriptUnix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._isdisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isdisabled = this._isdisabled;
    }
    if (this._islocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.islocal = this._islocal;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._unccredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unccredentials = this._unccredentials?.internalValue;
    }
    if (this._uncsavedcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncsavedcredentials = this._uncsavedcredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCustomvalidationscriptUnix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._isdisabled = undefined;
      this._islocal = undefined;
      this._path = undefined;
      this._unccredentials.internalValue = undefined;
      this._uncsavedcredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._isdisabled = value.isdisabled;
      this._islocal = value.islocal;
      this._path = value.path;
      this._unccredentials.internalValue = value.unccredentials;
      this._uncsavedcredentials.internalValue = value.uncsavedcredentials;
    }
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // isdisabled - computed: true, optional: true, required: false
  private _isdisabled?: string; 
  public get isdisabled() {
    return this.getStringAttribute('isdisabled');
  }
  public set isdisabled(value: string) {
    this._isdisabled = value;
  }
  public resetIsdisabled() {
    this._isdisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isdisabledInput() {
    return this._isdisabled;
  }

  // islocal - computed: true, optional: true, required: false
  private _islocal?: string; 
  public get islocal() {
    return this.getStringAttribute('islocal');
  }
  public set islocal(value: string) {
    this._islocal = value;
  }
  public resetIslocal() {
    this._islocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islocalInput() {
    return this._islocal;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // unccredentials - computed: false, optional: true, required: false
  private _unccredentials = new VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentialsList(this, "unccredentials", false);
  public get unccredentials() {
    return this._unccredentials;
  }
  public putUnccredentials(value: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUnccredentials[] | cdktf.IResolvable) {
    this._unccredentials.internalValue = value;
  }
  public resetUnccredentials() {
    this._unccredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unccredentialsInput() {
    return this._unccredentials.internalValue;
  }

  // uncsavedcredentials - computed: false, optional: true, required: false
  private _uncsavedcredentials = new VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentialsList(this, "uncsavedcredentials", false);
  public get uncsavedcredentials() {
    return this._uncsavedcredentials;
  }
  public putUncsavedcredentials(value: VmgroupV2ApplicationvalidationCustomvalidationscriptUnixUncsavedcredentials[] | cdktf.IResolvable) {
    this._uncsavedcredentials.internalValue = value;
  }
  public resetUncsavedcredentials() {
    this._uncsavedcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncsavedcredentialsInput() {
    return this._uncsavedcredentials.internalValue;
  }
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptUnixList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCustomvalidationscriptUnix[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCustomvalidationscriptUnixOutputReference {
    return new VmgroupV2ApplicationvalidationCustomvalidationscriptUnixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#password VmgroupV2#password}
  */
  readonly password?: string;
}

export function vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsToTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsToHclTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
    }
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsOutputReference {
    return new VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsToTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsToHclTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsOutputReference {
    return new VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCustomvalidationscriptWindows {
  /**
  * Arguments for the script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#arguments VmgroupV2#arguments}
  */
  readonly arguments?: string;
  /**
  * Is the script disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#isdisabled VmgroupV2#isdisabled}
  */
  readonly isdisabled?: string;
  /**
  * True if the script is local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#islocal VmgroupV2#islocal}
  */
  readonly islocal?: string;
  /**
  * Path for the validation script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#path VmgroupV2#path}
  */
  readonly path?: string;
  /**
  * unccredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#unccredentials VmgroupV2#unccredentials}
  */
  readonly unccredentials?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials[] | cdktf.IResolvable;
  /**
  * uncsavedcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#uncsavedcredentials VmgroupV2#uncsavedcredentials}
  */
  readonly uncsavedcredentials?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials[] | cdktf.IResolvable;
}

export function vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsToTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    isdisabled: cdktf.stringToTerraform(struct!.isdisabled),
    islocal: cdktf.stringToTerraform(struct!.islocal),
    path: cdktf.stringToTerraform(struct!.path),
    unccredentials: cdktf.listMapper(vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsToTerraform, true)(struct!.unccredentials),
    uncsavedcredentials: cdktf.listMapper(vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsToTerraform, true)(struct!.uncsavedcredentials),
  }
}


export function vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsToHclTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isdisabled: {
      value: cdktf.stringToHclTerraform(struct!.isdisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    islocal: {
      value: cdktf.stringToHclTerraform(struct!.islocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unccredentials: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsToHclTerraform, true)(struct!.unccredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsList",
    },
    uncsavedcredentials: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsToHclTerraform, true)(struct!.uncsavedcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCustomvalidationscriptWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._isdisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isdisabled = this._isdisabled;
    }
    if (this._islocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.islocal = this._islocal;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._unccredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unccredentials = this._unccredentials?.internalValue;
    }
    if (this._uncsavedcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncsavedcredentials = this._uncsavedcredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCustomvalidationscriptWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._isdisabled = undefined;
      this._islocal = undefined;
      this._path = undefined;
      this._unccredentials.internalValue = undefined;
      this._uncsavedcredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._isdisabled = value.isdisabled;
      this._islocal = value.islocal;
      this._path = value.path;
      this._unccredentials.internalValue = value.unccredentials;
      this._uncsavedcredentials.internalValue = value.uncsavedcredentials;
    }
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // isdisabled - computed: true, optional: true, required: false
  private _isdisabled?: string; 
  public get isdisabled() {
    return this.getStringAttribute('isdisabled');
  }
  public set isdisabled(value: string) {
    this._isdisabled = value;
  }
  public resetIsdisabled() {
    this._isdisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isdisabledInput() {
    return this._isdisabled;
  }

  // islocal - computed: true, optional: true, required: false
  private _islocal?: string; 
  public get islocal() {
    return this.getStringAttribute('islocal');
  }
  public set islocal(value: string) {
    this._islocal = value;
  }
  public resetIslocal() {
    this._islocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islocalInput() {
    return this._islocal;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // unccredentials - computed: false, optional: true, required: false
  private _unccredentials = new VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentialsList(this, "unccredentials", false);
  public get unccredentials() {
    return this._unccredentials;
  }
  public putUnccredentials(value: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUnccredentials[] | cdktf.IResolvable) {
    this._unccredentials.internalValue = value;
  }
  public resetUnccredentials() {
    this._unccredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unccredentialsInput() {
    return this._unccredentials.internalValue;
  }

  // uncsavedcredentials - computed: false, optional: true, required: false
  private _uncsavedcredentials = new VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentialsList(this, "uncsavedcredentials", false);
  public get uncsavedcredentials() {
    return this._uncsavedcredentials;
  }
  public putUncsavedcredentials(value: VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsUncsavedcredentials[] | cdktf.IResolvable) {
    this._uncsavedcredentials.internalValue = value;
  }
  public resetUncsavedcredentials() {
    this._uncsavedcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncsavedcredentialsInput() {
    return this._uncsavedcredentials.internalValue;
  }
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCustomvalidationscriptWindows[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsOutputReference {
    return new VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationCustomvalidationscript {
  /**
  * unix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#unix VmgroupV2#unix}
  */
  readonly unix?: VmgroupV2ApplicationvalidationCustomvalidationscriptUnix[] | cdktf.IResolvable;
  /**
  * windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#windows VmgroupV2#windows}
  */
  readonly windows?: VmgroupV2ApplicationvalidationCustomvalidationscriptWindows[] | cdktf.IResolvable;
}

export function vmgroupV2ApplicationvalidationCustomvalidationscriptToTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unix: cdktf.listMapper(vmgroupV2ApplicationvalidationCustomvalidationscriptUnixToTerraform, true)(struct!.unix),
    windows: cdktf.listMapper(vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsToTerraform, true)(struct!.windows),
  }
}


export function vmgroupV2ApplicationvalidationCustomvalidationscriptToHclTerraform(struct?: VmgroupV2ApplicationvalidationCustomvalidationscript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unix: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCustomvalidationscriptUnixToHclTerraform, true)(struct!.unix),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCustomvalidationscriptUnixList",
    },
    windows: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCustomvalidationscriptWindowsToHclTerraform, true)(struct!.windows),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationCustomvalidationscript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unix = this._unix?.internalValue;
    }
    if (this._windows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationCustomvalidationscript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unix.internalValue = undefined;
      this._windows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unix.internalValue = value.unix;
      this._windows.internalValue = value.windows;
    }
  }

  // unix - computed: false, optional: true, required: false
  private _unix = new VmgroupV2ApplicationvalidationCustomvalidationscriptUnixList(this, "unix", false);
  public get unix() {
    return this._unix;
  }
  public putUnix(value: VmgroupV2ApplicationvalidationCustomvalidationscriptUnix[] | cdktf.IResolvable) {
    this._unix.internalValue = value;
  }
  public resetUnix() {
    this._unix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixInput() {
    return this._unix.internalValue;
  }

  // windows - computed: false, optional: true, required: false
  private _windows = new VmgroupV2ApplicationvalidationCustomvalidationscriptWindowsList(this, "windows", false);
  public get windows() {
    return this._windows;
  }
  public putWindows(value: VmgroupV2ApplicationvalidationCustomvalidationscriptWindows[] | cdktf.IResolvable) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }
}

export class VmgroupV2ApplicationvalidationCustomvalidationscriptList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationCustomvalidationscript[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationCustomvalidationscriptOutputReference {
    return new VmgroupV2ApplicationvalidationCustomvalidationscriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationGuestcredentialsCredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#password VmgroupV2#password}
  */
  readonly password?: string;
}

export function vmgroupV2ApplicationvalidationGuestcredentialsCredentialsToTerraform(struct?: VmgroupV2ApplicationvalidationGuestcredentialsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function vmgroupV2ApplicationvalidationGuestcredentialsCredentialsToHclTerraform(struct?: VmgroupV2ApplicationvalidationGuestcredentialsCredentials | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationGuestcredentialsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationGuestcredentialsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationGuestcredentialsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
    }
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class VmgroupV2ApplicationvalidationGuestcredentialsCredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationGuestcredentialsCredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationGuestcredentialsCredentialsOutputReference {
    return new VmgroupV2ApplicationvalidationGuestcredentialsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsToTerraform(struct?: VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsToHclTerraform(struct?: VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsOutputReference {
    return new VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationGuestcredentials {
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#credentials VmgroupV2#credentials}
  */
  readonly credentials?: VmgroupV2ApplicationvalidationGuestcredentialsCredentials[] | cdktf.IResolvable;
  /**
  * savedcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#savedcredentials VmgroupV2#savedcredentials}
  */
  readonly savedcredentials?: VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials[] | cdktf.IResolvable;
}

export function vmgroupV2ApplicationvalidationGuestcredentialsToTerraform(struct?: VmgroupV2ApplicationvalidationGuestcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.listMapper(vmgroupV2ApplicationvalidationGuestcredentialsCredentialsToTerraform, true)(struct!.credentials),
    savedcredentials: cdktf.listMapper(vmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsToTerraform, true)(struct!.savedcredentials),
  }
}


export function vmgroupV2ApplicationvalidationGuestcredentialsToHclTerraform(struct?: VmgroupV2ApplicationvalidationGuestcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationGuestcredentialsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationGuestcredentialsCredentialsList",
    },
    savedcredentials: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsToHclTerraform, true)(struct!.savedcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationGuestcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationGuestcredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._savedcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedcredentials = this._savedcredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationGuestcredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._savedcredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._savedcredentials.internalValue = value.savedcredentials;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new VmgroupV2ApplicationvalidationGuestcredentialsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: VmgroupV2ApplicationvalidationGuestcredentialsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // savedcredentials - computed: false, optional: true, required: false
  private _savedcredentials = new VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentialsList(this, "savedcredentials", false);
  public get savedcredentials() {
    return this._savedcredentials;
  }
  public putSavedcredentials(value: VmgroupV2ApplicationvalidationGuestcredentialsSavedcredentials[] | cdktf.IResolvable) {
    this._savedcredentials.internalValue = value;
  }
  public resetSavedcredentials() {
    this._savedcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedcredentialsInput() {
    return this._savedcredentials.internalValue;
  }
}

export class VmgroupV2ApplicationvalidationGuestcredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationGuestcredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationGuestcredentialsOutputReference {
    return new VmgroupV2ApplicationvalidationGuestcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationRecoverytarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2ApplicationvalidationRecoverytargetToTerraform(struct?: VmgroupV2ApplicationvalidationRecoverytarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2ApplicationvalidationRecoverytargetToHclTerraform(struct?: VmgroupV2ApplicationvalidationRecoverytarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationRecoverytargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationRecoverytarget | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationRecoverytarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2ApplicationvalidationRecoverytargetList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationRecoverytarget[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationRecoverytargetOutputReference {
    return new VmgroupV2ApplicationvalidationRecoverytargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ApplicationvalidationSchedule {
  /**
  * Description for validation schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#description VmgroupV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * True if application validation schedule is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#isscheduleenabled VmgroupV2#isscheduleenabled}
  */
  readonly isscheduleenabled?: string;
  /**
  * Job Id for the application validation task. 0 if schedule is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#taskid VmgroupV2#taskid}
  */
  readonly taskid?: number;
}

export function vmgroupV2ApplicationvalidationScheduleToTerraform(struct?: VmgroupV2ApplicationvalidationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    isscheduleenabled: cdktf.stringToTerraform(struct!.isscheduleenabled),
    taskid: cdktf.numberToTerraform(struct!.taskid),
  }
}


export function vmgroupV2ApplicationvalidationScheduleToHclTerraform(struct?: VmgroupV2ApplicationvalidationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    isscheduleenabled: {
      value: cdktf.stringToHclTerraform(struct!.isscheduleenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taskid: {
      value: cdktf.numberToHclTerraform(struct!.taskid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ApplicationvalidationSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isscheduleenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isscheduleenabled = this._isscheduleenabled;
    }
    if (this._taskid !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskid = this._taskid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ApplicationvalidationSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._isscheduleenabled = undefined;
      this._taskid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._isscheduleenabled = value.isscheduleenabled;
      this._taskid = value.taskid;
    }
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

  // id - computed: true, optional: true, required: false
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

  // isscheduleenabled - computed: true, optional: true, required: false
  private _isscheduleenabled?: string; 
  public get isscheduleenabled() {
    return this.getStringAttribute('isscheduleenabled');
  }
  public set isscheduleenabled(value: string) {
    this._isscheduleenabled = value;
  }
  public resetIsscheduleenabled() {
    this._isscheduleenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isscheduleenabledInput() {
    return this._isscheduleenabled;
  }

  // taskid - computed: true, optional: true, required: false
  private _taskid?: number; 
  public get taskid() {
    return this.getNumberAttribute('taskid');
  }
  public set taskid(value: number) {
    this._taskid = value;
  }
  public resetTaskid() {
    this._taskid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskidInput() {
    return this._taskid;
  }
}

export class VmgroupV2ApplicationvalidationScheduleList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ApplicationvalidationSchedule[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationScheduleOutputReference {
    return new VmgroupV2ApplicationvalidationScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Applicationvalidation {
  /**
  * If true then validated VMs will be available until expiration time set on the recovery target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#keepvalidatedvmsrunning VmgroupV2#keepvalidatedvmsrunning}
  */
  readonly keepvalidatedvmsrunning?: string;
  /**
  * Number of backup Validation Threads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#maximumnoofthreads VmgroupV2#maximumnoofthreads}
  */
  readonly maximumnoofthreads?: number;
  /**
  * Use Source VM ESX To Mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#usesourcevmesxtomount VmgroupV2#usesourcevmesxtomount}
  */
  readonly usesourcevmesxtomount?: string;
  /**
  * True if VM Backup validation is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#validatevmbackups VmgroupV2#validatevmbackups}
  */
  readonly validatevmbackups?: string;
  /**
  * copy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#copy VmgroupV2#copy}
  */
  readonly copy?: VmgroupV2ApplicationvalidationCopy[] | cdktf.IResolvable;
  /**
  * customvalidationscript block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#customvalidationscript VmgroupV2#customvalidationscript}
  */
  readonly customvalidationscript?: VmgroupV2ApplicationvalidationCustomvalidationscript[] | cdktf.IResolvable;
  /**
  * guestcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#guestcredentials VmgroupV2#guestcredentials}
  */
  readonly guestcredentials?: VmgroupV2ApplicationvalidationGuestcredentials[] | cdktf.IResolvable;
  /**
  * recoverytarget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#recoverytarget VmgroupV2#recoverytarget}
  */
  readonly recoverytarget?: VmgroupV2ApplicationvalidationRecoverytarget[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#schedule VmgroupV2#schedule}
  */
  readonly schedule?: VmgroupV2ApplicationvalidationSchedule[] | cdktf.IResolvable;
}

export function vmgroupV2ApplicationvalidationToTerraform(struct?: VmgroupV2Applicationvalidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keepvalidatedvmsrunning: cdktf.stringToTerraform(struct!.keepvalidatedvmsrunning),
    maximumnoofthreads: cdktf.numberToTerraform(struct!.maximumnoofthreads),
    usesourcevmesxtomount: cdktf.stringToTerraform(struct!.usesourcevmesxtomount),
    validatevmbackups: cdktf.stringToTerraform(struct!.validatevmbackups),
    copy: cdktf.listMapper(vmgroupV2ApplicationvalidationCopyToTerraform, true)(struct!.copy),
    customvalidationscript: cdktf.listMapper(vmgroupV2ApplicationvalidationCustomvalidationscriptToTerraform, true)(struct!.customvalidationscript),
    guestcredentials: cdktf.listMapper(vmgroupV2ApplicationvalidationGuestcredentialsToTerraform, true)(struct!.guestcredentials),
    recoverytarget: cdktf.listMapper(vmgroupV2ApplicationvalidationRecoverytargetToTerraform, true)(struct!.recoverytarget),
    schedule: cdktf.listMapper(vmgroupV2ApplicationvalidationScheduleToTerraform, true)(struct!.schedule),
  }
}


export function vmgroupV2ApplicationvalidationToHclTerraform(struct?: VmgroupV2Applicationvalidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keepvalidatedvmsrunning: {
      value: cdktf.stringToHclTerraform(struct!.keepvalidatedvmsrunning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximumnoofthreads: {
      value: cdktf.numberToHclTerraform(struct!.maximumnoofthreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usesourcevmesxtomount: {
      value: cdktf.stringToHclTerraform(struct!.usesourcevmesxtomount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validatevmbackups: {
      value: cdktf.stringToHclTerraform(struct!.validatevmbackups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCopyToHclTerraform, true)(struct!.copy),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCopyList",
    },
    customvalidationscript: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationCustomvalidationscriptToHclTerraform, true)(struct!.customvalidationscript),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationCustomvalidationscriptList",
    },
    guestcredentials: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationGuestcredentialsToHclTerraform, true)(struct!.guestcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationGuestcredentialsList",
    },
    recoverytarget: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationRecoverytargetToHclTerraform, true)(struct!.recoverytarget),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationRecoverytargetList",
    },
    schedule: {
      value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2ApplicationvalidationScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ApplicationvalidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Applicationvalidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepvalidatedvmsrunning !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepvalidatedvmsrunning = this._keepvalidatedvmsrunning;
    }
    if (this._maximumnoofthreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumnoofthreads = this._maximumnoofthreads;
    }
    if (this._usesourcevmesxtomount !== undefined) {
      hasAnyValues = true;
      internalValueResult.usesourcevmesxtomount = this._usesourcevmesxtomount;
    }
    if (this._validatevmbackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatevmbackups = this._validatevmbackups;
    }
    if (this._copy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copy = this._copy?.internalValue;
    }
    if (this._customvalidationscript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customvalidationscript = this._customvalidationscript?.internalValue;
    }
    if (this._guestcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestcredentials = this._guestcredentials?.internalValue;
    }
    if (this._recoverytarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverytarget = this._recoverytarget?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Applicationvalidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepvalidatedvmsrunning = undefined;
      this._maximumnoofthreads = undefined;
      this._usesourcevmesxtomount = undefined;
      this._validatevmbackups = undefined;
      this._copy.internalValue = undefined;
      this._customvalidationscript.internalValue = undefined;
      this._guestcredentials.internalValue = undefined;
      this._recoverytarget.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepvalidatedvmsrunning = value.keepvalidatedvmsrunning;
      this._maximumnoofthreads = value.maximumnoofthreads;
      this._usesourcevmesxtomount = value.usesourcevmesxtomount;
      this._validatevmbackups = value.validatevmbackups;
      this._copy.internalValue = value.copy;
      this._customvalidationscript.internalValue = value.customvalidationscript;
      this._guestcredentials.internalValue = value.guestcredentials;
      this._recoverytarget.internalValue = value.recoverytarget;
      this._schedule.internalValue = value.schedule;
    }
  }

  // keepvalidatedvmsrunning - computed: true, optional: true, required: false
  private _keepvalidatedvmsrunning?: string; 
  public get keepvalidatedvmsrunning() {
    return this.getStringAttribute('keepvalidatedvmsrunning');
  }
  public set keepvalidatedvmsrunning(value: string) {
    this._keepvalidatedvmsrunning = value;
  }
  public resetKeepvalidatedvmsrunning() {
    this._keepvalidatedvmsrunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepvalidatedvmsrunningInput() {
    return this._keepvalidatedvmsrunning;
  }

  // maximumnoofthreads - computed: true, optional: true, required: false
  private _maximumnoofthreads?: number; 
  public get maximumnoofthreads() {
    return this.getNumberAttribute('maximumnoofthreads');
  }
  public set maximumnoofthreads(value: number) {
    this._maximumnoofthreads = value;
  }
  public resetMaximumnoofthreads() {
    this._maximumnoofthreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumnoofthreadsInput() {
    return this._maximumnoofthreads;
  }

  // usesourcevmesxtomount - computed: true, optional: true, required: false
  private _usesourcevmesxtomount?: string; 
  public get usesourcevmesxtomount() {
    return this.getStringAttribute('usesourcevmesxtomount');
  }
  public set usesourcevmesxtomount(value: string) {
    this._usesourcevmesxtomount = value;
  }
  public resetUsesourcevmesxtomount() {
    this._usesourcevmesxtomount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usesourcevmesxtomountInput() {
    return this._usesourcevmesxtomount;
  }

  // validatevmbackups - computed: true, optional: true, required: false
  private _validatevmbackups?: string; 
  public get validatevmbackups() {
    return this.getStringAttribute('validatevmbackups');
  }
  public set validatevmbackups(value: string) {
    this._validatevmbackups = value;
  }
  public resetValidatevmbackups() {
    this._validatevmbackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatevmbackupsInput() {
    return this._validatevmbackups;
  }

  // copy - computed: false, optional: true, required: false
  private _copy = new VmgroupV2ApplicationvalidationCopyList(this, "copy", false);
  public get copy() {
    return this._copy;
  }
  public putCopy(value: VmgroupV2ApplicationvalidationCopy[] | cdktf.IResolvable) {
    this._copy.internalValue = value;
  }
  public resetCopy() {
    this._copy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy.internalValue;
  }

  // customvalidationscript - computed: false, optional: true, required: false
  private _customvalidationscript = new VmgroupV2ApplicationvalidationCustomvalidationscriptList(this, "customvalidationscript", false);
  public get customvalidationscript() {
    return this._customvalidationscript;
  }
  public putCustomvalidationscript(value: VmgroupV2ApplicationvalidationCustomvalidationscript[] | cdktf.IResolvable) {
    this._customvalidationscript.internalValue = value;
  }
  public resetCustomvalidationscript() {
    this._customvalidationscript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customvalidationscriptInput() {
    return this._customvalidationscript.internalValue;
  }

  // guestcredentials - computed: false, optional: true, required: false
  private _guestcredentials = new VmgroupV2ApplicationvalidationGuestcredentialsList(this, "guestcredentials", false);
  public get guestcredentials() {
    return this._guestcredentials;
  }
  public putGuestcredentials(value: VmgroupV2ApplicationvalidationGuestcredentials[] | cdktf.IResolvable) {
    this._guestcredentials.internalValue = value;
  }
  public resetGuestcredentials() {
    this._guestcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestcredentialsInput() {
    return this._guestcredentials.internalValue;
  }

  // recoverytarget - computed: false, optional: true, required: false
  private _recoverytarget = new VmgroupV2ApplicationvalidationRecoverytargetList(this, "recoverytarget", false);
  public get recoverytarget() {
    return this._recoverytarget;
  }
  public putRecoverytarget(value: VmgroupV2ApplicationvalidationRecoverytarget[] | cdktf.IResolvable) {
    this._recoverytarget.internalValue = value;
  }
  public resetRecoverytarget() {
    this._recoverytarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverytargetInput() {
    return this._recoverytarget.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new VmgroupV2ApplicationvalidationScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: VmgroupV2ApplicationvalidationSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class VmgroupV2ApplicationvalidationList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Applicationvalidation[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ApplicationvalidationOutputReference {
    return new VmgroupV2ApplicationvalidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ContentRulegroupsRules {
  /**
  * Operation type for VM rules/filters [CONTAINS, DOES_NOT_CONTAIN, DOES_NOT_EQUAL, ENDS_WITH, EQUALS, STARTS_WITH]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#condition VmgroupV2#condition}
  */
  readonly condition?: string;
  /**
  * name of the VM to be added as content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * [NONE, SERVER, RES_POOL, VAPP, DATACENTER, FOLDER, CLUSTER, DATASTORE, DATASTORE_CLUSTER, VM, VM_NAME, VM_GUEST_OS, VM_GUEST_HOST_NAME, CLUSTER_SHARED_VOLUMES, LOCAL_DISK, CLUSTER_DISK, UNPROTECTED_VMS, ROOT, FILE_SERVER, SMB_SHARE, TYPES_FOLDER, VM_FOLDER, SERVER_FOLDER, TEMPLATE_FOLDER, STORAGE_REPOSITORY_FOLDER, VAPPFOLDER, DATACENTER_FOLDER, CLUSTER_FOLDER, VM_POWER_STATE, VM_NOTES, VM_CUSTOM_ATTRIBUTE, NETWORK, USER, VM_TEMPLATE, TAG, TAG_CATEGORY, SUBCLIENT, CLIENT_GROUP, PROTECTION_DOMAIN, CONSISTENCY_GROUP, INSTANCE_SIZE, ORGANIZATION, IMAGES, STORAGE_POLICY, DATABASE, TABLE, PROJECT, SELECTOR, MANAGED_BY, REPLICATION_MODE, METADATATAG, CATALOG, VAPPTEMPLATE, VOLUME]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#type VmgroupV2#type}
  */
  readonly type?: string;
}

export function vmgroupV2ContentRulegroupsRulesToTerraform(struct?: VmgroupV2ContentRulegroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vmgroupV2ContentRulegroupsRulesToHclTerraform(struct?: VmgroupV2ContentRulegroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
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

export class VmgroupV2ContentRulegroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ContentRulegroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ContentRulegroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class VmgroupV2ContentRulegroupsRulesList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ContentRulegroupsRules[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ContentRulegroupsRulesOutputReference {
    return new VmgroupV2ContentRulegroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2ContentRulegroups {
  /**
  * Enum which specifies the whether to match all rules or any of the rules [ALL, ANY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#matchrule VmgroupV2#matchrule}
  */
  readonly matchrule?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#rules VmgroupV2#rules}
  */
  readonly rules?: VmgroupV2ContentRulegroupsRules[] | cdktf.IResolvable;
}

export function vmgroupV2ContentRulegroupsToTerraform(struct?: VmgroupV2ContentRulegroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matchrule: cdktf.stringToTerraform(struct!.matchrule),
    rules: cdktf.listMapper(vmgroupV2ContentRulegroupsRulesToTerraform, true)(struct!.rules),
  }
}


export function vmgroupV2ContentRulegroupsToHclTerraform(struct?: VmgroupV2ContentRulegroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matchrule: {
      value: cdktf.stringToHclTerraform(struct!.matchrule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(vmgroupV2ContentRulegroupsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "VmgroupV2ContentRulegroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ContentRulegroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2ContentRulegroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchrule = this._matchrule;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2ContentRulegroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchrule = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchrule = value.matchrule;
      this._rules.internalValue = value.rules;
    }
  }

  // matchrule - computed: false, optional: true, required: false
  private _matchrule?: string; 
  public get matchrule() {
    return this.getStringAttribute('matchrule');
  }
  public set matchrule(value: string) {
    this._matchrule = value;
  }
  public resetMatchrule() {
    this._matchrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchruleInput() {
    return this._matchrule;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new VmgroupV2ContentRulegroupsRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: VmgroupV2ContentRulegroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class VmgroupV2ContentRulegroupsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2ContentRulegroups[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ContentRulegroupsOutputReference {
    return new VmgroupV2ContentRulegroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Content {
  /**
  * True if content in vmgroup has to be overwritten, by default it will append the content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#overwrite VmgroupV2#overwrite}
  */
  readonly overwrite?: string;
  /**
  * rulegroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#rulegroups VmgroupV2#rulegroups}
  */
  readonly rulegroups?: VmgroupV2ContentRulegroups[] | cdktf.IResolvable;
}

export function vmgroupV2ContentToTerraform(struct?: VmgroupV2Content | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite: cdktf.stringToTerraform(struct!.overwrite),
    rulegroups: cdktf.listMapper(vmgroupV2ContentRulegroupsToTerraform, true)(struct!.rulegroups),
  }
}


export function vmgroupV2ContentToHclTerraform(struct?: VmgroupV2Content | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite: {
      value: cdktf.stringToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rulegroups: {
      value: cdktf.listMapperHcl(vmgroupV2ContentRulegroupsToHclTerraform, true)(struct!.rulegroups),
      isBlock: true,
      type: "set",
      storageClassType: "VmgroupV2ContentRulegroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2ContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Content | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._rulegroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulegroups = this._rulegroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Content | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overwrite = undefined;
      this._rulegroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overwrite = value.overwrite;
      this._rulegroups.internalValue = value.rulegroups;
    }
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: string; 
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
  public set overwrite(value: string) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // rulegroups - computed: false, optional: true, required: false
  private _rulegroups = new VmgroupV2ContentRulegroupsList(this, "rulegroups", true);
  public get rulegroups() {
    return this._rulegroups;
  }
  public putRulegroups(value: VmgroupV2ContentRulegroups[] | cdktf.IResolvable) {
    this._rulegroups.internalValue = value;
  }
  public resetRulegroups() {
    this._rulegroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulegroupsInput() {
    return this._rulegroups.internalValue;
  }
}

export class VmgroupV2ContentList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Content[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2ContentOutputReference {
    return new VmgroupV2ContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2DiskfiltersRules {
  /**
  * Operation type for VM rules/filters [CONTAINS, DOES_NOT_CONTAIN, DOES_NOT_EQUAL, ENDS_WITH, EQUALS, STARTS_WITH]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#condition VmgroupV2#condition}
  */
  readonly condition?: string;
  /**
  * [NONE, DISK_PATH, DISK_PATTERN, DISK_VIRTUAL_DEVICE_NODE, DISK_DATASTORE, DISK_LABEL, DISK_TYPE, DISK_ADDRESS, CONTAINER_PATTERN, DISK_TAG]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#filtertype VmgroupV2#filtertype}
  */
  readonly filtertype?: string;
  /**
  * The string to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * True if disk filter in vmgroup has to be overwritten, by default it will append the content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#overwrite VmgroupV2#overwrite}
  */
  readonly overwrite?: string;
  /**
  * The value string to be filtered, in case of disk tag , value of tag to be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#value VmgroupV2#value}
  */
  readonly value?: string;
  /**
  * VM Guid of the Virtual Machine whose disk has to be filtered . This is optional. if not given, all disks of name and type from all Vms added in content will be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#vmguid VmgroupV2#vmguid}
  */
  readonly vmguid?: string;
  /**
  * VM Name of the Virtual Machine whose disk has to be filtered . This is optional. if not given, all disks of name and type from all Vms added in content will be filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#vmname VmgroupV2#vmname}
  */
  readonly vmname?: string;
}

export function vmgroupV2DiskfiltersRulesToTerraform(struct?: VmgroupV2DiskfiltersRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    filtertype: cdktf.stringToTerraform(struct!.filtertype),
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.stringToTerraform(struct!.overwrite),
    value: cdktf.stringToTerraform(struct!.value),
    vmguid: cdktf.stringToTerraform(struct!.vmguid),
    vmname: cdktf.stringToTerraform(struct!.vmname),
  }
}


export function vmgroupV2DiskfiltersRulesToHclTerraform(struct?: VmgroupV2DiskfiltersRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filtertype: {
      value: cdktf.stringToHclTerraform(struct!.filtertype),
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
    overwrite: {
      value: cdktf.stringToHclTerraform(struct!.overwrite),
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
    vmguid: {
      value: cdktf.stringToHclTerraform(struct!.vmguid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmname: {
      value: cdktf.stringToHclTerraform(struct!.vmname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2DiskfiltersRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2DiskfiltersRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._filtertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtertype = this._filtertype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vmguid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmguid = this._vmguid;
    }
    if (this._vmname !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmname = this._vmname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2DiskfiltersRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._filtertype = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._value = undefined;
      this._vmguid = undefined;
      this._vmname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._filtertype = value.filtertype;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._value = value.value;
      this._vmguid = value.vmguid;
      this._vmname = value.vmname;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // filtertype - computed: true, optional: true, required: false
  private _filtertype?: string; 
  public get filtertype() {
    return this.getStringAttribute('filtertype');
  }
  public set filtertype(value: string) {
    this._filtertype = value;
  }
  public resetFiltertype() {
    this._filtertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtertypeInput() {
    return this._filtertype;
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

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: string; 
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
  public set overwrite(value: string) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
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

  // vmguid - computed: true, optional: true, required: false
  private _vmguid?: string; 
  public get vmguid() {
    return this.getStringAttribute('vmguid');
  }
  public set vmguid(value: string) {
    this._vmguid = value;
  }
  public resetVmguid() {
    this._vmguid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmguidInput() {
    return this._vmguid;
  }

  // vmname - computed: true, optional: true, required: false
  private _vmname?: string; 
  public get vmname() {
    return this.getStringAttribute('vmname');
  }
  public set vmname(value: string) {
    this._vmname = value;
  }
  public resetVmname() {
    this._vmname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmnameInput() {
    return this._vmname;
  }
}

export class VmgroupV2DiskfiltersRulesList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2DiskfiltersRules[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2DiskfiltersRulesOutputReference {
    return new VmgroupV2DiskfiltersRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Diskfilters {
  /**
  * True if content in vmgroup has to be overwritten, by default it will append the content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#overwrite VmgroupV2#overwrite}
  */
  readonly overwrite?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#rules VmgroupV2#rules}
  */
  readonly rules?: VmgroupV2DiskfiltersRules[] | cdktf.IResolvable;
}

export function vmgroupV2DiskfiltersToTerraform(struct?: VmgroupV2Diskfilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite: cdktf.stringToTerraform(struct!.overwrite),
    rules: cdktf.listMapper(vmgroupV2DiskfiltersRulesToTerraform, true)(struct!.rules),
  }
}


export function vmgroupV2DiskfiltersToHclTerraform(struct?: VmgroupV2Diskfilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite: {
      value: cdktf.stringToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(vmgroupV2DiskfiltersRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "VmgroupV2DiskfiltersRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2DiskfiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Diskfilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Diskfilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overwrite = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overwrite = value.overwrite;
      this._rules.internalValue = value.rules;
    }
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: string; 
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
  public set overwrite(value: string) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new VmgroupV2DiskfiltersRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: VmgroupV2DiskfiltersRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class VmgroupV2DiskfiltersList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Diskfilters[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2DiskfiltersOutputReference {
    return new VmgroupV2DiskfiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2FiltersRulegroupsRules {
  /**
  * Operation type for VM rules/filters [CONTAINS, DOES_NOT_CONTAIN, DOES_NOT_EQUAL, ENDS_WITH, EQUALS, STARTS_WITH]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#condition VmgroupV2#condition}
  */
  readonly condition?: string;
  /**
  * name of the VM to be added as content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * [NONE, SERVER, RES_POOL, VAPP, DATACENTER, FOLDER, CLUSTER, DATASTORE, DATASTORE_CLUSTER, VM, VM_NAME, VM_GUEST_OS, VM_GUEST_HOST_NAME, CLUSTER_SHARED_VOLUMES, LOCAL_DISK, CLUSTER_DISK, UNPROTECTED_VMS, ROOT, FILE_SERVER, SMB_SHARE, TYPES_FOLDER, VM_FOLDER, SERVER_FOLDER, TEMPLATE_FOLDER, STORAGE_REPOSITORY_FOLDER, VAPPFOLDER, DATACENTER_FOLDER, CLUSTER_FOLDER, VM_POWER_STATE, VM_NOTES, VM_CUSTOM_ATTRIBUTE, NETWORK, USER, VM_TEMPLATE, TAG, TAG_CATEGORY, SUBCLIENT, CLIENT_GROUP, PROTECTION_DOMAIN, CONSISTENCY_GROUP, INSTANCE_SIZE, ORGANIZATION, IMAGES, STORAGE_POLICY, DATABASE, TABLE, PROJECT, SELECTOR, MANAGED_BY, REPLICATION_MODE, METADATATAG, CATALOG, VAPPTEMPLATE, VOLUME]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#type VmgroupV2#type}
  */
  readonly type?: string;
}

export function vmgroupV2FiltersRulegroupsRulesToTerraform(struct?: VmgroupV2FiltersRulegroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vmgroupV2FiltersRulegroupsRulesToHclTerraform(struct?: VmgroupV2FiltersRulegroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
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

export class VmgroupV2FiltersRulegroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2FiltersRulegroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2FiltersRulegroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class VmgroupV2FiltersRulegroupsRulesList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2FiltersRulegroupsRules[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2FiltersRulegroupsRulesOutputReference {
    return new VmgroupV2FiltersRulegroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2FiltersRulegroups {
  /**
  * Enum which specifies the whether to match all rules or any of the rules [ALL, ANY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#matchrule VmgroupV2#matchrule}
  */
  readonly matchrule?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#rules VmgroupV2#rules}
  */
  readonly rules?: VmgroupV2FiltersRulegroupsRules[] | cdktf.IResolvable;
}

export function vmgroupV2FiltersRulegroupsToTerraform(struct?: VmgroupV2FiltersRulegroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matchrule: cdktf.stringToTerraform(struct!.matchrule),
    rules: cdktf.listMapper(vmgroupV2FiltersRulegroupsRulesToTerraform, true)(struct!.rules),
  }
}


export function vmgroupV2FiltersRulegroupsToHclTerraform(struct?: VmgroupV2FiltersRulegroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matchrule: {
      value: cdktf.stringToHclTerraform(struct!.matchrule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(vmgroupV2FiltersRulegroupsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "VmgroupV2FiltersRulegroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2FiltersRulegroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2FiltersRulegroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchrule !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchrule = this._matchrule;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2FiltersRulegroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchrule = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchrule = value.matchrule;
      this._rules.internalValue = value.rules;
    }
  }

  // matchrule - computed: false, optional: true, required: false
  private _matchrule?: string; 
  public get matchrule() {
    return this.getStringAttribute('matchrule');
  }
  public set matchrule(value: string) {
    this._matchrule = value;
  }
  public resetMatchrule() {
    this._matchrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchruleInput() {
    return this._matchrule;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new VmgroupV2FiltersRulegroupsRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: VmgroupV2FiltersRulegroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class VmgroupV2FiltersRulegroupsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2FiltersRulegroups[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2FiltersRulegroupsOutputReference {
    return new VmgroupV2FiltersRulegroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Filters {
  /**
  * True if content in vmgroup has to be overwritten, by default it will append the content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#overwrite VmgroupV2#overwrite}
  */
  readonly overwrite?: string;
  /**
  * rulegroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#rulegroups VmgroupV2#rulegroups}
  */
  readonly rulegroups?: VmgroupV2FiltersRulegroups[] | cdktf.IResolvable;
}

export function vmgroupV2FiltersToTerraform(struct?: VmgroupV2Filters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite: cdktf.stringToTerraform(struct!.overwrite),
    rulegroups: cdktf.listMapper(vmgroupV2FiltersRulegroupsToTerraform, true)(struct!.rulegroups),
  }
}


export function vmgroupV2FiltersToHclTerraform(struct?: VmgroupV2Filters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite: {
      value: cdktf.stringToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rulegroups: {
      value: cdktf.listMapperHcl(vmgroupV2FiltersRulegroupsToHclTerraform, true)(struct!.rulegroups),
      isBlock: true,
      type: "set",
      storageClassType: "VmgroupV2FiltersRulegroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2FiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Filters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._rulegroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulegroups = this._rulegroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Filters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overwrite = undefined;
      this._rulegroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overwrite = value.overwrite;
      this._rulegroups.internalValue = value.rulegroups;
    }
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: string; 
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
  public set overwrite(value: string) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // rulegroups - computed: false, optional: true, required: false
  private _rulegroups = new VmgroupV2FiltersRulegroupsList(this, "rulegroups", true);
  public get rulegroups() {
    return this._rulegroups;
  }
  public putRulegroups(value: VmgroupV2FiltersRulegroups[] | cdktf.IResolvable) {
    this._rulegroups.internalValue = value;
  }
  public resetRulegroups() {
    this._rulegroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulegroupsInput() {
    return this._rulegroups.internalValue;
  }
}

export class VmgroupV2FiltersList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Filters[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2FiltersOutputReference {
    return new VmgroupV2FiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Hypervisor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2HypervisorToTerraform(struct?: VmgroupV2Hypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2HypervisorToHclTerraform(struct?: VmgroupV2Hypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2HypervisorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Hypervisor | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Hypervisor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2HypervisorList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Hypervisor[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2HypervisorOutputReference {
    return new VmgroupV2HypervisorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2MeditechUseraccount {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#password VmgroupV2#password}
  */
  readonly password?: string;
}

export function vmgroupV2MeditechUseraccountToTerraform(struct?: VmgroupV2MeditechUseraccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function vmgroupV2MeditechUseraccountToHclTerraform(struct?: VmgroupV2MeditechUseraccount | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2MeditechUseraccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2MeditechUseraccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2MeditechUseraccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
    }
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class VmgroupV2MeditechUseraccountList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2MeditechUseraccount[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2MeditechUseraccountOutputReference {
    return new VmgroupV2MeditechUseraccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Meditech {
  /**
  * Meditech Listener IP of FQDN name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#listenerip VmgroupV2#listenerip}
  */
  readonly listenerip?: string;
  /**
  * Meditech Listener Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#listenerport VmgroupV2#listenerport}
  */
  readonly listenerport?: number;
  /**
  * MBF timeout (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#mbftimeout VmgroupV2#mbftimeout}
  */
  readonly mbftimeout?: number;
  /**
  * Meditech system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#systemname VmgroupV2#systemname}
  */
  readonly systemname?: string;
  /**
  * useraccount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#useraccount VmgroupV2#useraccount}
  */
  readonly useraccount?: VmgroupV2MeditechUseraccount[] | cdktf.IResolvable;
}

export function vmgroupV2MeditechToTerraform(struct?: VmgroupV2Meditech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listenerip: cdktf.stringToTerraform(struct!.listenerip),
    listenerport: cdktf.numberToTerraform(struct!.listenerport),
    mbftimeout: cdktf.numberToTerraform(struct!.mbftimeout),
    systemname: cdktf.stringToTerraform(struct!.systemname),
    useraccount: cdktf.listMapper(vmgroupV2MeditechUseraccountToTerraform, true)(struct!.useraccount),
  }
}


export function vmgroupV2MeditechToHclTerraform(struct?: VmgroupV2Meditech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listenerip: {
      value: cdktf.stringToHclTerraform(struct!.listenerip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listenerport: {
      value: cdktf.numberToHclTerraform(struct!.listenerport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbftimeout: {
      value: cdktf.numberToHclTerraform(struct!.mbftimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    systemname: {
      value: cdktf.stringToHclTerraform(struct!.systemname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    useraccount: {
      value: cdktf.listMapperHcl(vmgroupV2MeditechUseraccountToHclTerraform, true)(struct!.useraccount),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2MeditechUseraccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2MeditechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Meditech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerip !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerip = this._listenerip;
    }
    if (this._listenerport !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerport = this._listenerport;
    }
    if (this._mbftimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbftimeout = this._mbftimeout;
    }
    if (this._systemname !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemname = this._systemname;
    }
    if (this._useraccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useraccount = this._useraccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Meditech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerip = undefined;
      this._listenerport = undefined;
      this._mbftimeout = undefined;
      this._systemname = undefined;
      this._useraccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerip = value.listenerip;
      this._listenerport = value.listenerport;
      this._mbftimeout = value.mbftimeout;
      this._systemname = value.systemname;
      this._useraccount.internalValue = value.useraccount;
    }
  }

  // listenerip - computed: true, optional: true, required: false
  private _listenerip?: string; 
  public get listenerip() {
    return this.getStringAttribute('listenerip');
  }
  public set listenerip(value: string) {
    this._listenerip = value;
  }
  public resetListenerip() {
    this._listenerip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeneripInput() {
    return this._listenerip;
  }

  // listenerport - computed: true, optional: true, required: false
  private _listenerport?: number; 
  public get listenerport() {
    return this.getNumberAttribute('listenerport');
  }
  public set listenerport(value: number) {
    this._listenerport = value;
  }
  public resetListenerport() {
    this._listenerport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerportInput() {
    return this._listenerport;
  }

  // mbftimeout - computed: true, optional: true, required: false
  private _mbftimeout?: number; 
  public get mbftimeout() {
    return this.getNumberAttribute('mbftimeout');
  }
  public set mbftimeout(value: number) {
    this._mbftimeout = value;
  }
  public resetMbftimeout() {
    this._mbftimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbftimeoutInput() {
    return this._mbftimeout;
  }

  // systemname - computed: true, optional: true, required: false
  private _systemname?: string; 
  public get systemname() {
    return this.getStringAttribute('systemname');
  }
  public set systemname(value: string) {
    this._systemname = value;
  }
  public resetSystemname() {
    this._systemname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemnameInput() {
    return this._systemname;
  }

  // useraccount - computed: false, optional: true, required: false
  private _useraccount = new VmgroupV2MeditechUseraccountList(this, "useraccount", false);
  public get useraccount() {
    return this._useraccount;
  }
  public putUseraccount(value: VmgroupV2MeditechUseraccount[] | cdktf.IResolvable) {
    this._useraccount.internalValue = value;
  }
  public resetUseraccount() {
    this._useraccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useraccountInput() {
    return this._useraccount.internalValue;
  }
}

export class VmgroupV2MeditechList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Meditech[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2MeditechOutputReference {
    return new VmgroupV2MeditechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2MeditechsystemsUseraccount {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#password VmgroupV2#password}
  */
  readonly password?: string;
}

export function vmgroupV2MeditechsystemsUseraccountToTerraform(struct?: VmgroupV2MeditechsystemsUseraccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function vmgroupV2MeditechsystemsUseraccountToHclTerraform(struct?: VmgroupV2MeditechsystemsUseraccount | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2MeditechsystemsUseraccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2MeditechsystemsUseraccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2MeditechsystemsUseraccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
    }
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class VmgroupV2MeditechsystemsUseraccountList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2MeditechsystemsUseraccount[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2MeditechsystemsUseraccountOutputReference {
    return new VmgroupV2MeditechsystemsUseraccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Meditechsystems {
  /**
  * Meditech Listener IP of FQDN name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#listenerip VmgroupV2#listenerip}
  */
  readonly listenerip?: string;
  /**
  * Meditech Listener Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#listenerport VmgroupV2#listenerport}
  */
  readonly listenerport?: number;
  /**
  * MBF timeout (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#mbftimeout VmgroupV2#mbftimeout}
  */
  readonly mbftimeout?: number;
  /**
  * Meditech system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#systemname VmgroupV2#systemname}
  */
  readonly systemname?: string;
  /**
  * useraccount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#useraccount VmgroupV2#useraccount}
  */
  readonly useraccount?: VmgroupV2MeditechsystemsUseraccount[] | cdktf.IResolvable;
}

export function vmgroupV2MeditechsystemsToTerraform(struct?: VmgroupV2Meditechsystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listenerip: cdktf.stringToTerraform(struct!.listenerip),
    listenerport: cdktf.numberToTerraform(struct!.listenerport),
    mbftimeout: cdktf.numberToTerraform(struct!.mbftimeout),
    systemname: cdktf.stringToTerraform(struct!.systemname),
    useraccount: cdktf.listMapper(vmgroupV2MeditechsystemsUseraccountToTerraform, true)(struct!.useraccount),
  }
}


export function vmgroupV2MeditechsystemsToHclTerraform(struct?: VmgroupV2Meditechsystems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listenerip: {
      value: cdktf.stringToHclTerraform(struct!.listenerip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listenerport: {
      value: cdktf.numberToHclTerraform(struct!.listenerport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mbftimeout: {
      value: cdktf.numberToHclTerraform(struct!.mbftimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    systemname: {
      value: cdktf.stringToHclTerraform(struct!.systemname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    useraccount: {
      value: cdktf.listMapperHcl(vmgroupV2MeditechsystemsUseraccountToHclTerraform, true)(struct!.useraccount),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2MeditechsystemsUseraccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2MeditechsystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Meditechsystems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerip !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerip = this._listenerip;
    }
    if (this._listenerport !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerport = this._listenerport;
    }
    if (this._mbftimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbftimeout = this._mbftimeout;
    }
    if (this._systemname !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemname = this._systemname;
    }
    if (this._useraccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useraccount = this._useraccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Meditechsystems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerip = undefined;
      this._listenerport = undefined;
      this._mbftimeout = undefined;
      this._systemname = undefined;
      this._useraccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerip = value.listenerip;
      this._listenerport = value.listenerport;
      this._mbftimeout = value.mbftimeout;
      this._systemname = value.systemname;
      this._useraccount.internalValue = value.useraccount;
    }
  }

  // listenerip - computed: true, optional: true, required: false
  private _listenerip?: string; 
  public get listenerip() {
    return this.getStringAttribute('listenerip');
  }
  public set listenerip(value: string) {
    this._listenerip = value;
  }
  public resetListenerip() {
    this._listenerip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeneripInput() {
    return this._listenerip;
  }

  // listenerport - computed: true, optional: true, required: false
  private _listenerport?: number; 
  public get listenerport() {
    return this.getNumberAttribute('listenerport');
  }
  public set listenerport(value: number) {
    this._listenerport = value;
  }
  public resetListenerport() {
    this._listenerport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerportInput() {
    return this._listenerport;
  }

  // mbftimeout - computed: true, optional: true, required: false
  private _mbftimeout?: number; 
  public get mbftimeout() {
    return this.getNumberAttribute('mbftimeout');
  }
  public set mbftimeout(value: number) {
    this._mbftimeout = value;
  }
  public resetMbftimeout() {
    this._mbftimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbftimeoutInput() {
    return this._mbftimeout;
  }

  // systemname - computed: true, optional: true, required: false
  private _systemname?: string; 
  public get systemname() {
    return this.getStringAttribute('systemname');
  }
  public set systemname(value: string) {
    this._systemname = value;
  }
  public resetSystemname() {
    this._systemname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemnameInput() {
    return this._systemname;
  }

  // useraccount - computed: false, optional: true, required: false
  private _useraccount = new VmgroupV2MeditechsystemsUseraccountList(this, "useraccount", false);
  public get useraccount() {
    return this._useraccount;
  }
  public putUseraccount(value: VmgroupV2MeditechsystemsUseraccount[] | cdktf.IResolvable) {
    this._useraccount.internalValue = value;
  }
  public resetUseraccount() {
    this._useraccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useraccountInput() {
    return this._useraccount.internalValue;
  }
}

export class VmgroupV2MeditechsystemsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Meditechsystems[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2MeditechsystemsOutputReference {
    return new VmgroupV2MeditechsystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Plan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2PlanToTerraform(struct?: VmgroupV2Plan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2PlanToHclTerraform(struct?: VmgroupV2Plan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2PlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Plan | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Plan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2PlanList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Plan[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2PlanOutputReference {
    return new VmgroupV2PlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SecurityassociationsExternalusergroup {
  /**
  * User Group Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * External Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * Provider id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#providerid VmgroupV2#providerid}
  */
  readonly providerid?: number;
  /**
  * Provider Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#providername VmgroupV2#providername}
  */
  readonly providername?: string;
}

export function vmgroupV2SecurityassociationsExternalusergroupToTerraform(struct?: VmgroupV2SecurityassociationsExternalusergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    providerid: cdktf.numberToTerraform(struct!.providerid),
    providername: cdktf.stringToTerraform(struct!.providername),
  }
}


export function vmgroupV2SecurityassociationsExternalusergroupToHclTerraform(struct?: VmgroupV2SecurityassociationsExternalusergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    providerid: {
      value: cdktf.numberToHclTerraform(struct!.providerid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    providername: {
      value: cdktf.stringToHclTerraform(struct!.providername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SecurityassociationsExternalusergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SecurityassociationsExternalusergroup | cdktf.IResolvable | undefined {
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
    if (this._providerid !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerid = this._providerid;
    }
    if (this._providername !== undefined) {
      hasAnyValues = true;
      internalValueResult.providername = this._providername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SecurityassociationsExternalusergroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._providerid = undefined;
      this._providername = undefined;
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
      this._providerid = value.providerid;
      this._providername = value.providername;
    }
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

  // providerid - computed: false, optional: true, required: false
  private _providerid?: number; 
  public get providerid() {
    return this.getNumberAttribute('providerid');
  }
  public set providerid(value: number) {
    this._providerid = value;
  }
  public resetProviderid() {
    this._providerid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provideridInput() {
    return this._providerid;
  }

  // providername - computed: false, optional: true, required: false
  private _providername?: string; 
  public get providername() {
    return this.getStringAttribute('providername');
  }
  public set providername(value: string) {
    this._providername = value;
  }
  public resetProvidername() {
    this._providername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providernameInput() {
    return this._providername;
  }
}

export class VmgroupV2SecurityassociationsExternalusergroupList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SecurityassociationsExternalusergroup[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SecurityassociationsExternalusergroupOutputReference {
    return new VmgroupV2SecurityassociationsExternalusergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SecurityassociationsPermissionlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#categoryid VmgroupV2#categoryid}
  */
  readonly categoryid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#categoryname VmgroupV2#categoryname}
  */
  readonly categoryname?: string;
  /**
  * Flag to specify if this is included permission or excluded permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#exclude VmgroupV2#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#permissionid VmgroupV2#permissionid}
  */
  readonly permissionid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#permissionname VmgroupV2#permissionname}
  */
  readonly permissionname?: string;
  /**
  * Returns the type of association. [ALL_CATEGORIES, CATEGORY_ENTITY, PERMISSION_ENTITY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#type VmgroupV2#type}
  */
  readonly type?: string;
}

export function vmgroupV2SecurityassociationsPermissionlistStructToTerraform(struct?: VmgroupV2SecurityassociationsPermissionlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categoryid: cdktf.numberToTerraform(struct!.categoryid),
    categoryname: cdktf.stringToTerraform(struct!.categoryname),
    exclude: cdktf.stringToTerraform(struct!.exclude),
    permissionid: cdktf.numberToTerraform(struct!.permissionid),
    permissionname: cdktf.stringToTerraform(struct!.permissionname),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vmgroupV2SecurityassociationsPermissionlistStructToHclTerraform(struct?: VmgroupV2SecurityassociationsPermissionlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categoryid: {
      value: cdktf.numberToHclTerraform(struct!.categoryid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    categoryname: {
      value: cdktf.stringToHclTerraform(struct!.categoryname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissionid: {
      value: cdktf.numberToHclTerraform(struct!.permissionid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permissionname: {
      value: cdktf.stringToHclTerraform(struct!.permissionname),
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

export class VmgroupV2SecurityassociationsPermissionlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SecurityassociationsPermissionlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryid !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryid = this._categoryid;
    }
    if (this._categoryname !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryname = this._categoryname;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._permissionid !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionid = this._permissionid;
    }
    if (this._permissionname !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionname = this._permissionname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SecurityassociationsPermissionlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryid = undefined;
      this._categoryname = undefined;
      this._exclude = undefined;
      this._permissionid = undefined;
      this._permissionname = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryid = value.categoryid;
      this._categoryname = value.categoryname;
      this._exclude = value.exclude;
      this._permissionid = value.permissionid;
      this._permissionname = value.permissionname;
      this._type = value.type;
    }
  }

  // categoryid - computed: false, optional: true, required: false
  private _categoryid?: number; 
  public get categoryid() {
    return this.getNumberAttribute('categoryid');
  }
  public set categoryid(value: number) {
    this._categoryid = value;
  }
  public resetCategoryid() {
    this._categoryid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryidInput() {
    return this._categoryid;
  }

  // categoryname - computed: false, optional: true, required: false
  private _categoryname?: string; 
  public get categoryname() {
    return this.getStringAttribute('categoryname');
  }
  public set categoryname(value: string) {
    this._categoryname = value;
  }
  public resetCategoryname() {
    this._categoryname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorynameInput() {
    return this._categoryname;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // permissionid - computed: false, optional: true, required: false
  private _permissionid?: number; 
  public get permissionid() {
    return this.getNumberAttribute('permissionid');
  }
  public set permissionid(value: number) {
    this._permissionid = value;
  }
  public resetPermissionid() {
    this._permissionid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionidInput() {
    return this._permissionid;
  }

  // permissionname - computed: false, optional: true, required: false
  private _permissionname?: string; 
  public get permissionname() {
    return this.getStringAttribute('permissionname');
  }
  public set permissionname(value: string) {
    this._permissionname = value;
  }
  public resetPermissionname() {
    this._permissionname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionnameInput() {
    return this._permissionname;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class VmgroupV2SecurityassociationsPermissionlistStructList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SecurityassociationsPermissionlistStruct[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SecurityassociationsPermissionlistStructOutputReference {
    return new VmgroupV2SecurityassociationsPermissionlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SecurityassociationsRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2SecurityassociationsRoleToTerraform(struct?: VmgroupV2SecurityassociationsRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2SecurityassociationsRoleToHclTerraform(struct?: VmgroupV2SecurityassociationsRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SecurityassociationsRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SecurityassociationsRole | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SecurityassociationsRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
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
}

export class VmgroupV2SecurityassociationsRoleList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SecurityassociationsRole[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SecurityassociationsRoleOutputReference {
    return new VmgroupV2SecurityassociationsRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SecurityassociationsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2SecurityassociationsUserToTerraform(struct?: VmgroupV2SecurityassociationsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2SecurityassociationsUserToHclTerraform(struct?: VmgroupV2SecurityassociationsUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SecurityassociationsUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SecurityassociationsUser | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SecurityassociationsUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
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
}

export class VmgroupV2SecurityassociationsUserList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SecurityassociationsUser[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SecurityassociationsUserOutputReference {
    return new VmgroupV2SecurityassociationsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SecurityassociationsUsergroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2SecurityassociationsUsergroupToTerraform(struct?: VmgroupV2SecurityassociationsUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2SecurityassociationsUsergroupToHclTerraform(struct?: VmgroupV2SecurityassociationsUsergroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SecurityassociationsUsergroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SecurityassociationsUsergroup | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SecurityassociationsUsergroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
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
}

export class VmgroupV2SecurityassociationsUsergroupList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SecurityassociationsUsergroup[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SecurityassociationsUsergroupOutputReference {
    return new VmgroupV2SecurityassociationsUsergroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Securityassociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#iscreatorassociation VmgroupV2#iscreatorassociation}
  */
  readonly iscreatorassociation?: string;
  /**
  * externalusergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#externalusergroup VmgroupV2#externalusergroup}
  */
  readonly externalusergroup?: VmgroupV2SecurityassociationsExternalusergroup[] | cdktf.IResolvable;
  /**
  * permissionlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#permissionlist VmgroupV2#permissionlist}
  */
  readonly permissionlist?: VmgroupV2SecurityassociationsPermissionlistStruct[] | cdktf.IResolvable;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#role VmgroupV2#role}
  */
  readonly role?: VmgroupV2SecurityassociationsRole[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#user VmgroupV2#user}
  */
  readonly user?: VmgroupV2SecurityassociationsUser[] | cdktf.IResolvable;
  /**
  * usergroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#usergroup VmgroupV2#usergroup}
  */
  readonly usergroup?: VmgroupV2SecurityassociationsUsergroup[] | cdktf.IResolvable;
}

export function vmgroupV2SecurityassociationsToTerraform(struct?: VmgroupV2Securityassociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iscreatorassociation: cdktf.stringToTerraform(struct!.iscreatorassociation),
    externalusergroup: cdktf.listMapper(vmgroupV2SecurityassociationsExternalusergroupToTerraform, true)(struct!.externalusergroup),
    permissionlist: cdktf.listMapper(vmgroupV2SecurityassociationsPermissionlistStructToTerraform, true)(struct!.permissionlist),
    role: cdktf.listMapper(vmgroupV2SecurityassociationsRoleToTerraform, true)(struct!.role),
    user: cdktf.listMapper(vmgroupV2SecurityassociationsUserToTerraform, true)(struct!.user),
    usergroup: cdktf.listMapper(vmgroupV2SecurityassociationsUsergroupToTerraform, true)(struct!.usergroup),
  }
}


export function vmgroupV2SecurityassociationsToHclTerraform(struct?: VmgroupV2Securityassociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iscreatorassociation: {
      value: cdktf.stringToHclTerraform(struct!.iscreatorassociation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    externalusergroup: {
      value: cdktf.listMapperHcl(vmgroupV2SecurityassociationsExternalusergroupToHclTerraform, true)(struct!.externalusergroup),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SecurityassociationsExternalusergroupList",
    },
    permissionlist: {
      value: cdktf.listMapperHcl(vmgroupV2SecurityassociationsPermissionlistStructToHclTerraform, true)(struct!.permissionlist),
      isBlock: true,
      type: "set",
      storageClassType: "VmgroupV2SecurityassociationsPermissionlistStructList",
    },
    role: {
      value: cdktf.listMapperHcl(vmgroupV2SecurityassociationsRoleToHclTerraform, true)(struct!.role),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SecurityassociationsRoleList",
    },
    user: {
      value: cdktf.listMapperHcl(vmgroupV2SecurityassociationsUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SecurityassociationsUserList",
    },
    usergroup: {
      value: cdktf.listMapperHcl(vmgroupV2SecurityassociationsUsergroupToHclTerraform, true)(struct!.usergroup),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SecurityassociationsUsergroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SecurityassociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Securityassociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iscreatorassociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscreatorassociation = this._iscreatorassociation;
    }
    if (this._externalusergroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalusergroup = this._externalusergroup?.internalValue;
    }
    if (this._permissionlist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionlist = this._permissionlist?.internalValue;
    }
    if (this._role?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    if (this._usergroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usergroup = this._usergroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Securityassociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iscreatorassociation = undefined;
      this._externalusergroup.internalValue = undefined;
      this._permissionlist.internalValue = undefined;
      this._role.internalValue = undefined;
      this._user.internalValue = undefined;
      this._usergroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iscreatorassociation = value.iscreatorassociation;
      this._externalusergroup.internalValue = value.externalusergroup;
      this._permissionlist.internalValue = value.permissionlist;
      this._role.internalValue = value.role;
      this._user.internalValue = value.user;
      this._usergroup.internalValue = value.usergroup;
    }
  }

  // iscreatorassociation - computed: false, optional: true, required: false
  private _iscreatorassociation?: string; 
  public get iscreatorassociation() {
    return this.getStringAttribute('iscreatorassociation');
  }
  public set iscreatorassociation(value: string) {
    this._iscreatorassociation = value;
  }
  public resetIscreatorassociation() {
    this._iscreatorassociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscreatorassociationInput() {
    return this._iscreatorassociation;
  }

  // externalusergroup - computed: false, optional: true, required: false
  private _externalusergroup = new VmgroupV2SecurityassociationsExternalusergroupList(this, "externalusergroup", false);
  public get externalusergroup() {
    return this._externalusergroup;
  }
  public putExternalusergroup(value: VmgroupV2SecurityassociationsExternalusergroup[] | cdktf.IResolvable) {
    this._externalusergroup.internalValue = value;
  }
  public resetExternalusergroup() {
    this._externalusergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalusergroupInput() {
    return this._externalusergroup.internalValue;
  }

  // permissionlist - computed: false, optional: true, required: false
  private _permissionlist = new VmgroupV2SecurityassociationsPermissionlistStructList(this, "permissionlist", true);
  public get permissionlist() {
    return this._permissionlist;
  }
  public putPermissionlist(value: VmgroupV2SecurityassociationsPermissionlistStruct[] | cdktf.IResolvable) {
    this._permissionlist.internalValue = value;
  }
  public resetPermissionlist() {
    this._permissionlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionlistInput() {
    return this._permissionlist.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role = new VmgroupV2SecurityassociationsRoleList(this, "role", false);
  public get role() {
    return this._role;
  }
  public putRole(value: VmgroupV2SecurityassociationsRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new VmgroupV2SecurityassociationsUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: VmgroupV2SecurityassociationsUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // usergroup - computed: false, optional: true, required: false
  private _usergroup = new VmgroupV2SecurityassociationsUsergroupList(this, "usergroup", false);
  public get usergroup() {
    return this._usergroup;
  }
  public putUsergroup(value: VmgroupV2SecurityassociationsUsergroup[] | cdktf.IResolvable) {
    this._usergroup.internalValue = value;
  }
  public resetUsergroup() {
    this._usergroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupInput() {
    return this._usergroup.internalValue;
  }
}

export class VmgroupV2SecurityassociationsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Securityassociations[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SecurityassociationsOutputReference {
    return new VmgroupV2SecurityassociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SettingsCrossaccountDestinationaccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2SettingsCrossaccountDestinationaccountToTerraform(struct?: VmgroupV2SettingsCrossaccountDestinationaccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2SettingsCrossaccountDestinationaccountToHclTerraform(struct?: VmgroupV2SettingsCrossaccountDestinationaccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SettingsCrossaccountDestinationaccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SettingsCrossaccountDestinationaccount | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SettingsCrossaccountDestinationaccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
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
}

export class VmgroupV2SettingsCrossaccountDestinationaccountList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SettingsCrossaccountDestinationaccount[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SettingsCrossaccountDestinationaccountOutputReference {
    return new VmgroupV2SettingsCrossaccountDestinationaccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SettingsCrossaccount {
  /**
  * True if full copy of amazon snapshot to different amazon account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#fullcopy VmgroupV2#fullcopy}
  */
  readonly fullcopy?: string;
  /**
  * True if replicate and copy or sharing of amazon snapshot to different amazon account in same or different geographic location is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#shareonly VmgroupV2#shareonly}
  */
  readonly shareonly?: string;
  /**
  * destinationaccount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#destinationaccount VmgroupV2#destinationaccount}
  */
  readonly destinationaccount?: VmgroupV2SettingsCrossaccountDestinationaccount[] | cdktf.IResolvable;
}

export function vmgroupV2SettingsCrossaccountToTerraform(struct?: VmgroupV2SettingsCrossaccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fullcopy: cdktf.stringToTerraform(struct!.fullcopy),
    shareonly: cdktf.stringToTerraform(struct!.shareonly),
    destinationaccount: cdktf.listMapper(vmgroupV2SettingsCrossaccountDestinationaccountToTerraform, true)(struct!.destinationaccount),
  }
}


export function vmgroupV2SettingsCrossaccountToHclTerraform(struct?: VmgroupV2SettingsCrossaccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fullcopy: {
      value: cdktf.stringToHclTerraform(struct!.fullcopy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shareonly: {
      value: cdktf.stringToHclTerraform(struct!.shareonly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinationaccount: {
      value: cdktf.listMapperHcl(vmgroupV2SettingsCrossaccountDestinationaccountToHclTerraform, true)(struct!.destinationaccount),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SettingsCrossaccountDestinationaccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SettingsCrossaccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SettingsCrossaccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullcopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullcopy = this._fullcopy;
    }
    if (this._shareonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareonly = this._shareonly;
    }
    if (this._destinationaccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationaccount = this._destinationaccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SettingsCrossaccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullcopy = undefined;
      this._shareonly = undefined;
      this._destinationaccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullcopy = value.fullcopy;
      this._shareonly = value.shareonly;
      this._destinationaccount.internalValue = value.destinationaccount;
    }
  }

  // fullcopy - computed: false, optional: true, required: false
  private _fullcopy?: string; 
  public get fullcopy() {
    return this.getStringAttribute('fullcopy');
  }
  public set fullcopy(value: string) {
    this._fullcopy = value;
  }
  public resetFullcopy() {
    this._fullcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullcopyInput() {
    return this._fullcopy;
  }

  // shareonly - computed: false, optional: true, required: false
  private _shareonly?: string; 
  public get shareonly() {
    return this.getStringAttribute('shareonly');
  }
  public set shareonly(value: string) {
    this._shareonly = value;
  }
  public resetShareonly() {
    this._shareonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareonlyInput() {
    return this._shareonly;
  }

  // destinationaccount - computed: false, optional: true, required: false
  private _destinationaccount = new VmgroupV2SettingsCrossaccountDestinationaccountList(this, "destinationaccount", false);
  public get destinationaccount() {
    return this._destinationaccount;
  }
  public putDestinationaccount(value: VmgroupV2SettingsCrossaccountDestinationaccount[] | cdktf.IResolvable) {
    this._destinationaccount.internalValue = value;
  }
  public resetDestinationaccount() {
    this._destinationaccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationaccountInput() {
    return this._destinationaccount.internalValue;
  }
}

export class VmgroupV2SettingsCrossaccountList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SettingsCrossaccount[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SettingsCrossaccountOutputReference {
    return new VmgroupV2SettingsCrossaccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SettingsCustomsnapshottags {
  /**
  * represents name of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * represents value of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#value VmgroupV2#value}
  */
  readonly value?: string;
}

export function vmgroupV2SettingsCustomsnapshottagsToTerraform(struct?: VmgroupV2SettingsCustomsnapshottags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmgroupV2SettingsCustomsnapshottagsToHclTerraform(struct?: VmgroupV2SettingsCustomsnapshottags | cdktf.IResolvable): any {
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

export class VmgroupV2SettingsCustomsnapshottagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SettingsCustomsnapshottags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmgroupV2SettingsCustomsnapshottags | cdktf.IResolvable | undefined) {
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

export class VmgroupV2SettingsCustomsnapshottagsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SettingsCustomsnapshottags[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SettingsCustomsnapshottagsOutputReference {
    return new VmgroupV2SettingsCustomsnapshottagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SettingsGuestcredentialsCredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#password VmgroupV2#password}
  */
  readonly password?: string;
}

export function vmgroupV2SettingsGuestcredentialsCredentialsToTerraform(struct?: VmgroupV2SettingsGuestcredentialsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function vmgroupV2SettingsGuestcredentialsCredentialsToHclTerraform(struct?: VmgroupV2SettingsGuestcredentialsCredentials | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SettingsGuestcredentialsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SettingsGuestcredentialsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SettingsGuestcredentialsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}

export class VmgroupV2SettingsGuestcredentialsCredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SettingsGuestcredentialsCredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SettingsGuestcredentialsCredentialsOutputReference {
    return new VmgroupV2SettingsGuestcredentialsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SettingsGuestcredentialsSavedcredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2SettingsGuestcredentialsSavedcredentialsToTerraform(struct?: VmgroupV2SettingsGuestcredentialsSavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2SettingsGuestcredentialsSavedcredentialsToHclTerraform(struct?: VmgroupV2SettingsGuestcredentialsSavedcredentials | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SettingsGuestcredentialsSavedcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SettingsGuestcredentialsSavedcredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SettingsGuestcredentialsSavedcredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class VmgroupV2SettingsGuestcredentialsSavedcredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SettingsGuestcredentialsSavedcredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SettingsGuestcredentialsSavedcredentialsOutputReference {
    return new VmgroupV2SettingsGuestcredentialsSavedcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SettingsGuestcredentials {
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#credentials VmgroupV2#credentials}
  */
  readonly credentials?: VmgroupV2SettingsGuestcredentialsCredentials[] | cdktf.IResolvable;
  /**
  * savedcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#savedcredentials VmgroupV2#savedcredentials}
  */
  readonly savedcredentials?: VmgroupV2SettingsGuestcredentialsSavedcredentials[] | cdktf.IResolvable;
}

export function vmgroupV2SettingsGuestcredentialsToTerraform(struct?: VmgroupV2SettingsGuestcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.listMapper(vmgroupV2SettingsGuestcredentialsCredentialsToTerraform, true)(struct!.credentials),
    savedcredentials: cdktf.listMapper(vmgroupV2SettingsGuestcredentialsSavedcredentialsToTerraform, true)(struct!.savedcredentials),
  }
}


export function vmgroupV2SettingsGuestcredentialsToHclTerraform(struct?: VmgroupV2SettingsGuestcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.listMapperHcl(vmgroupV2SettingsGuestcredentialsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SettingsGuestcredentialsCredentialsList",
    },
    savedcredentials: {
      value: cdktf.listMapperHcl(vmgroupV2SettingsGuestcredentialsSavedcredentialsToHclTerraform, true)(struct!.savedcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SettingsGuestcredentialsSavedcredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SettingsGuestcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SettingsGuestcredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._savedcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedcredentials = this._savedcredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SettingsGuestcredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._savedcredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._savedcredentials.internalValue = value.savedcredentials;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new VmgroupV2SettingsGuestcredentialsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: VmgroupV2SettingsGuestcredentialsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // savedcredentials - computed: false, optional: true, required: false
  private _savedcredentials = new VmgroupV2SettingsGuestcredentialsSavedcredentialsList(this, "savedcredentials", false);
  public get savedcredentials() {
    return this._savedcredentials;
  }
  public putSavedcredentials(value: VmgroupV2SettingsGuestcredentialsSavedcredentials[] | cdktf.IResolvable) {
    this._savedcredentials.internalValue = value;
  }
  public resetSavedcredentials() {
    this._savedcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedcredentialsInput() {
    return this._savedcredentials.internalValue;
  }
}

export class VmgroupV2SettingsGuestcredentialsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SettingsGuestcredentials[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SettingsGuestcredentialsOutputReference {
    return new VmgroupV2SettingsGuestcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Settings {
  /**
  * True if empty subclient is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#allowemptysubclient VmgroupV2#allowemptysubclient}
  */
  readonly allowemptysubclient?: string;
  /**
  * True if auto detect VM Owner enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#autodetectvmowner VmgroupV2#autodetectvmowner}
  */
  readonly autodetectvmowner?: string;
  /**
  * True if metadata collection is enabled. Only applicable for Indexing v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#collectfiledetailsforgranularrecovery VmgroupV2#collectfiledetailsforgranularrecovery}
  */
  readonly collectfiledetailsforgranularrecovery?: string;
  /**
  * True if metadata collection is enabled for intellisnap jobs. Only applicable for Indexing v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#collectfiledetailsfromsnapshotcopy VmgroupV2#collectfiledetailsfromsnapshotcopy}
  */
  readonly collectfiledetailsfromsnapshotcopy?: string;
  /**
  * Custom snapshot resource group name for Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#customsnapshotresourcegroup VmgroupV2#customsnapshotresourcegroup}
  */
  readonly customsnapshotresourcegroup?: string;
  /**
  * True if Datastore Free space check is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#datastorefreespacecheck VmgroupV2#datastorefreespacecheck}
  */
  readonly datastorefreespacecheck?: string;
  /**
  * precentage of datastore free space check value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#datastorefreespacerequired VmgroupV2#datastorefreespacerequired}
  */
  readonly datastorefreespacerequired?: number;
  /**
  * Is the VM App Aware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#isapplicationaware VmgroupV2#isapplicationaware}
  */
  readonly isapplicationaware?: string;
  /**
  * Is VM group disk filters included in VM instance disk filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#isvmgroupdiskfiltersincluded VmgroupV2#isvmgroupdiskfiltersincluded}
  */
  readonly isvmgroupdiskfiltersincluded?: string;
  /**
  * Start Time for the VM Group Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#jobstarttime VmgroupV2#jobstarttime}
  */
  readonly jobstarttime?: number;
  /**
  * Number of readers for backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#noofreaders VmgroupV2#noofreaders}
  */
  readonly noofreaders?: number;
  /**
  * True when snapshot storage location is regional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#regionalsnapshot VmgroupV2#regionalsnapshot}
  */
  readonly regionalsnapshot?: string;
  /**
  * transport mode based on environment. Values are case sensitive [AUTO, SAN, HOT_ADD, NAS, NBD_SSL, NBD]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#transportmode VmgroupV2#transportmode}
  */
  readonly transportmode?: string;
  /**
  * True if Changed Block Tracking is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#usechangedblocktrackingonvm VmgroupV2#usechangedblocktrackingonvm}
  */
  readonly usechangedblocktrackingonvm?: string;
  /**
  * True if use VM CheckPoint setting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#usevmcheckpointsetting VmgroupV2#usevmcheckpointsetting}
  */
  readonly usevmcheckpointsetting?: string;
  /**
  * [APPLICATION_AWARE, FILE_SYSTEM_AND_APPLICATION_CONSISTENT, CRASH_CONSISTENT, APP_BASED_BACKUP, INHERITED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#vmbackuptype VmgroupV2#vmbackuptype}
  */
  readonly vmbackuptype?: string;
  /**
  * crossaccount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#crossaccount VmgroupV2#crossaccount}
  */
  readonly crossaccount?: VmgroupV2SettingsCrossaccount[] | cdktf.IResolvable;
  /**
  * customsnapshottags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#customsnapshottags VmgroupV2#customsnapshottags}
  */
  readonly customsnapshottags?: VmgroupV2SettingsCustomsnapshottags[] | cdktf.IResolvable;
  /**
  * guestcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#guestcredentials VmgroupV2#guestcredentials}
  */
  readonly guestcredentials?: VmgroupV2SettingsGuestcredentials[] | cdktf.IResolvable;
}

export function vmgroupV2SettingsToTerraform(struct?: VmgroupV2Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowemptysubclient: cdktf.stringToTerraform(struct!.allowemptysubclient),
    autodetectvmowner: cdktf.stringToTerraform(struct!.autodetectvmowner),
    collectfiledetailsforgranularrecovery: cdktf.stringToTerraform(struct!.collectfiledetailsforgranularrecovery),
    collectfiledetailsfromsnapshotcopy: cdktf.stringToTerraform(struct!.collectfiledetailsfromsnapshotcopy),
    customsnapshotresourcegroup: cdktf.stringToTerraform(struct!.customsnapshotresourcegroup),
    datastorefreespacecheck: cdktf.stringToTerraform(struct!.datastorefreespacecheck),
    datastorefreespacerequired: cdktf.numberToTerraform(struct!.datastorefreespacerequired),
    isapplicationaware: cdktf.stringToTerraform(struct!.isapplicationaware),
    isvmgroupdiskfiltersincluded: cdktf.stringToTerraform(struct!.isvmgroupdiskfiltersincluded),
    jobstarttime: cdktf.numberToTerraform(struct!.jobstarttime),
    noofreaders: cdktf.numberToTerraform(struct!.noofreaders),
    regionalsnapshot: cdktf.stringToTerraform(struct!.regionalsnapshot),
    transportmode: cdktf.stringToTerraform(struct!.transportmode),
    usechangedblocktrackingonvm: cdktf.stringToTerraform(struct!.usechangedblocktrackingonvm),
    usevmcheckpointsetting: cdktf.stringToTerraform(struct!.usevmcheckpointsetting),
    vmbackuptype: cdktf.stringToTerraform(struct!.vmbackuptype),
    crossaccount: cdktf.listMapper(vmgroupV2SettingsCrossaccountToTerraform, true)(struct!.crossaccount),
    customsnapshottags: cdktf.listMapper(vmgroupV2SettingsCustomsnapshottagsToTerraform, true)(struct!.customsnapshottags),
    guestcredentials: cdktf.listMapper(vmgroupV2SettingsGuestcredentialsToTerraform, true)(struct!.guestcredentials),
  }
}


export function vmgroupV2SettingsToHclTerraform(struct?: VmgroupV2Settings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowemptysubclient: {
      value: cdktf.stringToHclTerraform(struct!.allowemptysubclient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autodetectvmowner: {
      value: cdktf.stringToHclTerraform(struct!.autodetectvmowner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collectfiledetailsforgranularrecovery: {
      value: cdktf.stringToHclTerraform(struct!.collectfiledetailsforgranularrecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collectfiledetailsfromsnapshotcopy: {
      value: cdktf.stringToHclTerraform(struct!.collectfiledetailsfromsnapshotcopy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customsnapshotresourcegroup: {
      value: cdktf.stringToHclTerraform(struct!.customsnapshotresourcegroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastorefreespacecheck: {
      value: cdktf.stringToHclTerraform(struct!.datastorefreespacecheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastorefreespacerequired: {
      value: cdktf.numberToHclTerraform(struct!.datastorefreespacerequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isapplicationaware: {
      value: cdktf.stringToHclTerraform(struct!.isapplicationaware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isvmgroupdiskfiltersincluded: {
      value: cdktf.stringToHclTerraform(struct!.isvmgroupdiskfiltersincluded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobstarttime: {
      value: cdktf.numberToHclTerraform(struct!.jobstarttime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noofreaders: {
      value: cdktf.numberToHclTerraform(struct!.noofreaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regionalsnapshot: {
      value: cdktf.stringToHclTerraform(struct!.regionalsnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transportmode: {
      value: cdktf.stringToHclTerraform(struct!.transportmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usechangedblocktrackingonvm: {
      value: cdktf.stringToHclTerraform(struct!.usechangedblocktrackingonvm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usevmcheckpointsetting: {
      value: cdktf.stringToHclTerraform(struct!.usevmcheckpointsetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmbackuptype: {
      value: cdktf.stringToHclTerraform(struct!.vmbackuptype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crossaccount: {
      value: cdktf.listMapperHcl(vmgroupV2SettingsCrossaccountToHclTerraform, true)(struct!.crossaccount),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SettingsCrossaccountList",
    },
    customsnapshottags: {
      value: cdktf.listMapperHcl(vmgroupV2SettingsCustomsnapshottagsToHclTerraform, true)(struct!.customsnapshottags),
      isBlock: true,
      type: "set",
      storageClassType: "VmgroupV2SettingsCustomsnapshottagsList",
    },
    guestcredentials: {
      value: cdktf.listMapperHcl(vmgroupV2SettingsGuestcredentialsToHclTerraform, true)(struct!.guestcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SettingsGuestcredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Settings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowemptysubclient !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowemptysubclient = this._allowemptysubclient;
    }
    if (this._autodetectvmowner !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodetectvmowner = this._autodetectvmowner;
    }
    if (this._collectfiledetailsforgranularrecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectfiledetailsforgranularrecovery = this._collectfiledetailsforgranularrecovery;
    }
    if (this._collectfiledetailsfromsnapshotcopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectfiledetailsfromsnapshotcopy = this._collectfiledetailsfromsnapshotcopy;
    }
    if (this._customsnapshotresourcegroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.customsnapshotresourcegroup = this._customsnapshotresourcegroup;
    }
    if (this._datastorefreespacecheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastorefreespacecheck = this._datastorefreespacecheck;
    }
    if (this._datastorefreespacerequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastorefreespacerequired = this._datastorefreespacerequired;
    }
    if (this._isapplicationaware !== undefined) {
      hasAnyValues = true;
      internalValueResult.isapplicationaware = this._isapplicationaware;
    }
    if (this._isvmgroupdiskfiltersincluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isvmgroupdiskfiltersincluded = this._isvmgroupdiskfiltersincluded;
    }
    if (this._jobstarttime !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobstarttime = this._jobstarttime;
    }
    if (this._noofreaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.noofreaders = this._noofreaders;
    }
    if (this._regionalsnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalsnapshot = this._regionalsnapshot;
    }
    if (this._transportmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportmode = this._transportmode;
    }
    if (this._usechangedblocktrackingonvm !== undefined) {
      hasAnyValues = true;
      internalValueResult.usechangedblocktrackingonvm = this._usechangedblocktrackingonvm;
    }
    if (this._usevmcheckpointsetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.usevmcheckpointsetting = this._usevmcheckpointsetting;
    }
    if (this._vmbackuptype !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmbackuptype = this._vmbackuptype;
    }
    if (this._crossaccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossaccount = this._crossaccount?.internalValue;
    }
    if (this._customsnapshottags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customsnapshottags = this._customsnapshottags?.internalValue;
    }
    if (this._guestcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestcredentials = this._guestcredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Settings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowemptysubclient = undefined;
      this._autodetectvmowner = undefined;
      this._collectfiledetailsforgranularrecovery = undefined;
      this._collectfiledetailsfromsnapshotcopy = undefined;
      this._customsnapshotresourcegroup = undefined;
      this._datastorefreespacecheck = undefined;
      this._datastorefreespacerequired = undefined;
      this._isapplicationaware = undefined;
      this._isvmgroupdiskfiltersincluded = undefined;
      this._jobstarttime = undefined;
      this._noofreaders = undefined;
      this._regionalsnapshot = undefined;
      this._transportmode = undefined;
      this._usechangedblocktrackingonvm = undefined;
      this._usevmcheckpointsetting = undefined;
      this._vmbackuptype = undefined;
      this._crossaccount.internalValue = undefined;
      this._customsnapshottags.internalValue = undefined;
      this._guestcredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowemptysubclient = value.allowemptysubclient;
      this._autodetectvmowner = value.autodetectvmowner;
      this._collectfiledetailsforgranularrecovery = value.collectfiledetailsforgranularrecovery;
      this._collectfiledetailsfromsnapshotcopy = value.collectfiledetailsfromsnapshotcopy;
      this._customsnapshotresourcegroup = value.customsnapshotresourcegroup;
      this._datastorefreespacecheck = value.datastorefreespacecheck;
      this._datastorefreespacerequired = value.datastorefreespacerequired;
      this._isapplicationaware = value.isapplicationaware;
      this._isvmgroupdiskfiltersincluded = value.isvmgroupdiskfiltersincluded;
      this._jobstarttime = value.jobstarttime;
      this._noofreaders = value.noofreaders;
      this._regionalsnapshot = value.regionalsnapshot;
      this._transportmode = value.transportmode;
      this._usechangedblocktrackingonvm = value.usechangedblocktrackingonvm;
      this._usevmcheckpointsetting = value.usevmcheckpointsetting;
      this._vmbackuptype = value.vmbackuptype;
      this._crossaccount.internalValue = value.crossaccount;
      this._customsnapshottags.internalValue = value.customsnapshottags;
      this._guestcredentials.internalValue = value.guestcredentials;
    }
  }

  // allowemptysubclient - computed: false, optional: true, required: false
  private _allowemptysubclient?: string; 
  public get allowemptysubclient() {
    return this.getStringAttribute('allowemptysubclient');
  }
  public set allowemptysubclient(value: string) {
    this._allowemptysubclient = value;
  }
  public resetAllowemptysubclient() {
    this._allowemptysubclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowemptysubclientInput() {
    return this._allowemptysubclient;
  }

  // autodetectvmowner - computed: false, optional: true, required: false
  private _autodetectvmowner?: string; 
  public get autodetectvmowner() {
    return this.getStringAttribute('autodetectvmowner');
  }
  public set autodetectvmowner(value: string) {
    this._autodetectvmowner = value;
  }
  public resetAutodetectvmowner() {
    this._autodetectvmowner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectvmownerInput() {
    return this._autodetectvmowner;
  }

  // collectfiledetailsforgranularrecovery - computed: false, optional: true, required: false
  private _collectfiledetailsforgranularrecovery?: string; 
  public get collectfiledetailsforgranularrecovery() {
    return this.getStringAttribute('collectfiledetailsforgranularrecovery');
  }
  public set collectfiledetailsforgranularrecovery(value: string) {
    this._collectfiledetailsforgranularrecovery = value;
  }
  public resetCollectfiledetailsforgranularrecovery() {
    this._collectfiledetailsforgranularrecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectfiledetailsforgranularrecoveryInput() {
    return this._collectfiledetailsforgranularrecovery;
  }

  // collectfiledetailsfromsnapshotcopy - computed: false, optional: true, required: false
  private _collectfiledetailsfromsnapshotcopy?: string; 
  public get collectfiledetailsfromsnapshotcopy() {
    return this.getStringAttribute('collectfiledetailsfromsnapshotcopy');
  }
  public set collectfiledetailsfromsnapshotcopy(value: string) {
    this._collectfiledetailsfromsnapshotcopy = value;
  }
  public resetCollectfiledetailsfromsnapshotcopy() {
    this._collectfiledetailsfromsnapshotcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectfiledetailsfromsnapshotcopyInput() {
    return this._collectfiledetailsfromsnapshotcopy;
  }

  // customsnapshotresourcegroup - computed: false, optional: true, required: false
  private _customsnapshotresourcegroup?: string; 
  public get customsnapshotresourcegroup() {
    return this.getStringAttribute('customsnapshotresourcegroup');
  }
  public set customsnapshotresourcegroup(value: string) {
    this._customsnapshotresourcegroup = value;
  }
  public resetCustomsnapshotresourcegroup() {
    this._customsnapshotresourcegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customsnapshotresourcegroupInput() {
    return this._customsnapshotresourcegroup;
  }

  // datastorefreespacecheck - computed: false, optional: true, required: false
  private _datastorefreespacecheck?: string; 
  public get datastorefreespacecheck() {
    return this.getStringAttribute('datastorefreespacecheck');
  }
  public set datastorefreespacecheck(value: string) {
    this._datastorefreespacecheck = value;
  }
  public resetDatastorefreespacecheck() {
    this._datastorefreespacecheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastorefreespacecheckInput() {
    return this._datastorefreespacecheck;
  }

  // datastorefreespacerequired - computed: false, optional: true, required: false
  private _datastorefreespacerequired?: number; 
  public get datastorefreespacerequired() {
    return this.getNumberAttribute('datastorefreespacerequired');
  }
  public set datastorefreespacerequired(value: number) {
    this._datastorefreespacerequired = value;
  }
  public resetDatastorefreespacerequired() {
    this._datastorefreespacerequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastorefreespacerequiredInput() {
    return this._datastorefreespacerequired;
  }

  // isapplicationaware - computed: false, optional: true, required: false
  private _isapplicationaware?: string; 
  public get isapplicationaware() {
    return this.getStringAttribute('isapplicationaware');
  }
  public set isapplicationaware(value: string) {
    this._isapplicationaware = value;
  }
  public resetIsapplicationaware() {
    this._isapplicationaware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isapplicationawareInput() {
    return this._isapplicationaware;
  }

  // isvmgroupdiskfiltersincluded - computed: false, optional: true, required: false
  private _isvmgroupdiskfiltersincluded?: string; 
  public get isvmgroupdiskfiltersincluded() {
    return this.getStringAttribute('isvmgroupdiskfiltersincluded');
  }
  public set isvmgroupdiskfiltersincluded(value: string) {
    this._isvmgroupdiskfiltersincluded = value;
  }
  public resetIsvmgroupdiskfiltersincluded() {
    this._isvmgroupdiskfiltersincluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isvmgroupdiskfiltersincludedInput() {
    return this._isvmgroupdiskfiltersincluded;
  }

  // jobstarttime - computed: false, optional: true, required: false
  private _jobstarttime?: number; 
  public get jobstarttime() {
    return this.getNumberAttribute('jobstarttime');
  }
  public set jobstarttime(value: number) {
    this._jobstarttime = value;
  }
  public resetJobstarttime() {
    this._jobstarttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobstarttimeInput() {
    return this._jobstarttime;
  }

  // noofreaders - computed: false, optional: true, required: false
  private _noofreaders?: number; 
  public get noofreaders() {
    return this.getNumberAttribute('noofreaders');
  }
  public set noofreaders(value: number) {
    this._noofreaders = value;
  }
  public resetNoofreaders() {
    this._noofreaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noofreadersInput() {
    return this._noofreaders;
  }

  // regionalsnapshot - computed: false, optional: true, required: false
  private _regionalsnapshot?: string; 
  public get regionalsnapshot() {
    return this.getStringAttribute('regionalsnapshot');
  }
  public set regionalsnapshot(value: string) {
    this._regionalsnapshot = value;
  }
  public resetRegionalsnapshot() {
    this._regionalsnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalsnapshotInput() {
    return this._regionalsnapshot;
  }

  // transportmode - computed: false, optional: true, required: false
  private _transportmode?: string; 
  public get transportmode() {
    return this.getStringAttribute('transportmode');
  }
  public set transportmode(value: string) {
    this._transportmode = value;
  }
  public resetTransportmode() {
    this._transportmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportmodeInput() {
    return this._transportmode;
  }

  // usechangedblocktrackingonvm - computed: false, optional: true, required: false
  private _usechangedblocktrackingonvm?: string; 
  public get usechangedblocktrackingonvm() {
    return this.getStringAttribute('usechangedblocktrackingonvm');
  }
  public set usechangedblocktrackingonvm(value: string) {
    this._usechangedblocktrackingonvm = value;
  }
  public resetUsechangedblocktrackingonvm() {
    this._usechangedblocktrackingonvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usechangedblocktrackingonvmInput() {
    return this._usechangedblocktrackingonvm;
  }

  // usevmcheckpointsetting - computed: false, optional: true, required: false
  private _usevmcheckpointsetting?: string; 
  public get usevmcheckpointsetting() {
    return this.getStringAttribute('usevmcheckpointsetting');
  }
  public set usevmcheckpointsetting(value: string) {
    this._usevmcheckpointsetting = value;
  }
  public resetUsevmcheckpointsetting() {
    this._usevmcheckpointsetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usevmcheckpointsettingInput() {
    return this._usevmcheckpointsetting;
  }

  // vmbackuptype - computed: false, optional: true, required: false
  private _vmbackuptype?: string; 
  public get vmbackuptype() {
    return this.getStringAttribute('vmbackuptype');
  }
  public set vmbackuptype(value: string) {
    this._vmbackuptype = value;
  }
  public resetVmbackuptype() {
    this._vmbackuptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmbackuptypeInput() {
    return this._vmbackuptype;
  }

  // crossaccount - computed: false, optional: true, required: false
  private _crossaccount = new VmgroupV2SettingsCrossaccountList(this, "crossaccount", false);
  public get crossaccount() {
    return this._crossaccount;
  }
  public putCrossaccount(value: VmgroupV2SettingsCrossaccount[] | cdktf.IResolvable) {
    this._crossaccount.internalValue = value;
  }
  public resetCrossaccount() {
    this._crossaccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossaccountInput() {
    return this._crossaccount.internalValue;
  }

  // customsnapshottags - computed: false, optional: true, required: false
  private _customsnapshottags = new VmgroupV2SettingsCustomsnapshottagsList(this, "customsnapshottags", true);
  public get customsnapshottags() {
    return this._customsnapshottags;
  }
  public putCustomsnapshottags(value: VmgroupV2SettingsCustomsnapshottags[] | cdktf.IResolvable) {
    this._customsnapshottags.internalValue = value;
  }
  public resetCustomsnapshottags() {
    this._customsnapshottags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customsnapshottagsInput() {
    return this._customsnapshottags.internalValue;
  }

  // guestcredentials - computed: false, optional: true, required: false
  private _guestcredentials = new VmgroupV2SettingsGuestcredentialsList(this, "guestcredentials", false);
  public get guestcredentials() {
    return this._guestcredentials;
  }
  public putGuestcredentials(value: VmgroupV2SettingsGuestcredentials[] | cdktf.IResolvable) {
    this._guestcredentials.internalValue = value;
  }
  public resetGuestcredentials() {
    this._guestcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestcredentialsInput() {
    return this._guestcredentials.internalValue;
  }
}

export class VmgroupV2SettingsList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Settings[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SettingsOutputReference {
    return new VmgroupV2SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SnapshotmanagementSnapengine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2SnapshotmanagementSnapengineToTerraform(struct?: VmgroupV2SnapshotmanagementSnapengine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2SnapshotmanagementSnapengineToHclTerraform(struct?: VmgroupV2SnapshotmanagementSnapengine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SnapshotmanagementSnapengineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SnapshotmanagementSnapengine | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SnapshotmanagementSnapengine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2SnapshotmanagementSnapengineList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SnapshotmanagementSnapengine[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SnapshotmanagementSnapengineOutputReference {
    return new VmgroupV2SnapshotmanagementSnapengineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2SnapshotmanagementSnapmountproxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2SnapshotmanagementSnapmountproxyToTerraform(struct?: VmgroupV2SnapshotmanagementSnapmountproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2SnapshotmanagementSnapmountproxyToHclTerraform(struct?: VmgroupV2SnapshotmanagementSnapmountproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SnapshotmanagementSnapmountproxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2SnapshotmanagementSnapmountproxy | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2SnapshotmanagementSnapmountproxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2SnapshotmanagementSnapmountproxyList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2SnapshotmanagementSnapmountproxy[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SnapshotmanagementSnapmountproxyOutputReference {
    return new VmgroupV2SnapshotmanagementSnapmountproxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Snapshotmanagement {
  /**
  * [FILE_SYSTEM, RMAN, VOLUME_COPY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#backupcopyinterface VmgroupV2#backupcopyinterface}
  */
  readonly backupcopyinterface?: string;
  /**
  * True if hardware snapshot is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#enablehardwaresnapshot VmgroupV2#enablehardwaresnapshot}
  */
  readonly enablehardwaresnapshot?: string;
  /**
  * True if independent disk option is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#isindependentdisksenabled VmgroupV2#isindependentdisksenabled}
  */
  readonly isindependentdisksenabled?: string;
  /**
  * True if raw device maps option is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#israwdevicemapsenabled VmgroupV2#israwdevicemapsenabled}
  */
  readonly israwdevicemapsenabled?: string;
  /**
  * Name of ESX Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#snapmountesxhost VmgroupV2#snapmountesxhost}
  */
  readonly snapmountesxhost?: string;
  /**
  * True if separate proxy client is used for snap to tape
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#useseparateproxyforsnaptotape VmgroupV2#useseparateproxyforsnaptotape}
  */
  readonly useseparateproxyforsnaptotape?: string;
  /**
  * Virtual machine application user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#vmapplicationusername VmgroupV2#vmapplicationusername}
  */
  readonly vmapplicationusername?: string;
  /**
  * snapengine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#snapengine VmgroupV2#snapengine}
  */
  readonly snapengine?: VmgroupV2SnapshotmanagementSnapengine[] | cdktf.IResolvable;
  /**
  * snapmountproxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#snapmountproxy VmgroupV2#snapmountproxy}
  */
  readonly snapmountproxy?: VmgroupV2SnapshotmanagementSnapmountproxy[] | cdktf.IResolvable;
}

export function vmgroupV2SnapshotmanagementToTerraform(struct?: VmgroupV2Snapshotmanagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupcopyinterface: cdktf.stringToTerraform(struct!.backupcopyinterface),
    enablehardwaresnapshot: cdktf.stringToTerraform(struct!.enablehardwaresnapshot),
    isindependentdisksenabled: cdktf.stringToTerraform(struct!.isindependentdisksenabled),
    israwdevicemapsenabled: cdktf.stringToTerraform(struct!.israwdevicemapsenabled),
    snapmountesxhost: cdktf.stringToTerraform(struct!.snapmountesxhost),
    useseparateproxyforsnaptotape: cdktf.stringToTerraform(struct!.useseparateproxyforsnaptotape),
    vmapplicationusername: cdktf.stringToTerraform(struct!.vmapplicationusername),
    snapengine: cdktf.listMapper(vmgroupV2SnapshotmanagementSnapengineToTerraform, true)(struct!.snapengine),
    snapmountproxy: cdktf.listMapper(vmgroupV2SnapshotmanagementSnapmountproxyToTerraform, true)(struct!.snapmountproxy),
  }
}


export function vmgroupV2SnapshotmanagementToHclTerraform(struct?: VmgroupV2Snapshotmanagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupcopyinterface: {
      value: cdktf.stringToHclTerraform(struct!.backupcopyinterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enablehardwaresnapshot: {
      value: cdktf.stringToHclTerraform(struct!.enablehardwaresnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isindependentdisksenabled: {
      value: cdktf.stringToHclTerraform(struct!.isindependentdisksenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    israwdevicemapsenabled: {
      value: cdktf.stringToHclTerraform(struct!.israwdevicemapsenabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapmountesxhost: {
      value: cdktf.stringToHclTerraform(struct!.snapmountesxhost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    useseparateproxyforsnaptotape: {
      value: cdktf.stringToHclTerraform(struct!.useseparateproxyforsnaptotape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmapplicationusername: {
      value: cdktf.stringToHclTerraform(struct!.vmapplicationusername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapengine: {
      value: cdktf.listMapperHcl(vmgroupV2SnapshotmanagementSnapengineToHclTerraform, true)(struct!.snapengine),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SnapshotmanagementSnapengineList",
    },
    snapmountproxy: {
      value: cdktf.listMapperHcl(vmgroupV2SnapshotmanagementSnapmountproxyToHclTerraform, true)(struct!.snapmountproxy),
      isBlock: true,
      type: "list",
      storageClassType: "VmgroupV2SnapshotmanagementSnapmountproxyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2SnapshotmanagementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Snapshotmanagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupcopyinterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupcopyinterface = this._backupcopyinterface;
    }
    if (this._enablehardwaresnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablehardwaresnapshot = this._enablehardwaresnapshot;
    }
    if (this._isindependentdisksenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isindependentdisksenabled = this._isindependentdisksenabled;
    }
    if (this._israwdevicemapsenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.israwdevicemapsenabled = this._israwdevicemapsenabled;
    }
    if (this._snapmountesxhost !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapmountesxhost = this._snapmountesxhost;
    }
    if (this._useseparateproxyforsnaptotape !== undefined) {
      hasAnyValues = true;
      internalValueResult.useseparateproxyforsnaptotape = this._useseparateproxyforsnaptotape;
    }
    if (this._vmapplicationusername !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmapplicationusername = this._vmapplicationusername;
    }
    if (this._snapengine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapengine = this._snapengine?.internalValue;
    }
    if (this._snapmountproxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapmountproxy = this._snapmountproxy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Snapshotmanagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupcopyinterface = undefined;
      this._enablehardwaresnapshot = undefined;
      this._isindependentdisksenabled = undefined;
      this._israwdevicemapsenabled = undefined;
      this._snapmountesxhost = undefined;
      this._useseparateproxyforsnaptotape = undefined;
      this._vmapplicationusername = undefined;
      this._snapengine.internalValue = undefined;
      this._snapmountproxy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupcopyinterface = value.backupcopyinterface;
      this._enablehardwaresnapshot = value.enablehardwaresnapshot;
      this._isindependentdisksenabled = value.isindependentdisksenabled;
      this._israwdevicemapsenabled = value.israwdevicemapsenabled;
      this._snapmountesxhost = value.snapmountesxhost;
      this._useseparateproxyforsnaptotape = value.useseparateproxyforsnaptotape;
      this._vmapplicationusername = value.vmapplicationusername;
      this._snapengine.internalValue = value.snapengine;
      this._snapmountproxy.internalValue = value.snapmountproxy;
    }
  }

  // backupcopyinterface - computed: true, optional: true, required: false
  private _backupcopyinterface?: string; 
  public get backupcopyinterface() {
    return this.getStringAttribute('backupcopyinterface');
  }
  public set backupcopyinterface(value: string) {
    this._backupcopyinterface = value;
  }
  public resetBackupcopyinterface() {
    this._backupcopyinterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupcopyinterfaceInput() {
    return this._backupcopyinterface;
  }

  // enablehardwaresnapshot - computed: true, optional: true, required: false
  private _enablehardwaresnapshot?: string; 
  public get enablehardwaresnapshot() {
    return this.getStringAttribute('enablehardwaresnapshot');
  }
  public set enablehardwaresnapshot(value: string) {
    this._enablehardwaresnapshot = value;
  }
  public resetEnablehardwaresnapshot() {
    this._enablehardwaresnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablehardwaresnapshotInput() {
    return this._enablehardwaresnapshot;
  }

  // isindependentdisksenabled - computed: true, optional: true, required: false
  private _isindependentdisksenabled?: string; 
  public get isindependentdisksenabled() {
    return this.getStringAttribute('isindependentdisksenabled');
  }
  public set isindependentdisksenabled(value: string) {
    this._isindependentdisksenabled = value;
  }
  public resetIsindependentdisksenabled() {
    this._isindependentdisksenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isindependentdisksenabledInput() {
    return this._isindependentdisksenabled;
  }

  // israwdevicemapsenabled - computed: true, optional: true, required: false
  private _israwdevicemapsenabled?: string; 
  public get israwdevicemapsenabled() {
    return this.getStringAttribute('israwdevicemapsenabled');
  }
  public set israwdevicemapsenabled(value: string) {
    this._israwdevicemapsenabled = value;
  }
  public resetIsrawdevicemapsenabled() {
    this._israwdevicemapsenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get israwdevicemapsenabledInput() {
    return this._israwdevicemapsenabled;
  }

  // snapmountesxhost - computed: true, optional: true, required: false
  private _snapmountesxhost?: string; 
  public get snapmountesxhost() {
    return this.getStringAttribute('snapmountesxhost');
  }
  public set snapmountesxhost(value: string) {
    this._snapmountesxhost = value;
  }
  public resetSnapmountesxhost() {
    this._snapmountesxhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapmountesxhostInput() {
    return this._snapmountesxhost;
  }

  // useseparateproxyforsnaptotape - computed: true, optional: true, required: false
  private _useseparateproxyforsnaptotape?: string; 
  public get useseparateproxyforsnaptotape() {
    return this.getStringAttribute('useseparateproxyforsnaptotape');
  }
  public set useseparateproxyforsnaptotape(value: string) {
    this._useseparateproxyforsnaptotape = value;
  }
  public resetUseseparateproxyforsnaptotape() {
    this._useseparateproxyforsnaptotape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useseparateproxyforsnaptotapeInput() {
    return this._useseparateproxyforsnaptotape;
  }

  // vmapplicationusername - computed: true, optional: true, required: false
  private _vmapplicationusername?: string; 
  public get vmapplicationusername() {
    return this.getStringAttribute('vmapplicationusername');
  }
  public set vmapplicationusername(value: string) {
    this._vmapplicationusername = value;
  }
  public resetVmapplicationusername() {
    this._vmapplicationusername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmapplicationusernameInput() {
    return this._vmapplicationusername;
  }

  // snapengine - computed: false, optional: true, required: false
  private _snapengine = new VmgroupV2SnapshotmanagementSnapengineList(this, "snapengine", false);
  public get snapengine() {
    return this._snapengine;
  }
  public putSnapengine(value: VmgroupV2SnapshotmanagementSnapengine[] | cdktf.IResolvable) {
    this._snapengine.internalValue = value;
  }
  public resetSnapengine() {
    this._snapengine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapengineInput() {
    return this._snapengine.internalValue;
  }

  // snapmountproxy - computed: false, optional: true, required: false
  private _snapmountproxy = new VmgroupV2SnapshotmanagementSnapmountproxyList(this, "snapmountproxy", false);
  public get snapmountproxy() {
    return this._snapmountproxy;
  }
  public putSnapmountproxy(value: VmgroupV2SnapshotmanagementSnapmountproxy[] | cdktf.IResolvable) {
    this._snapmountproxy.internalValue = value;
  }
  public resetSnapmountproxy() {
    this._snapmountproxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapmountproxyInput() {
    return this._snapmountproxy.internalValue;
  }
}

export class VmgroupV2SnapshotmanagementList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Snapshotmanagement[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2SnapshotmanagementOutputReference {
    return new VmgroupV2SnapshotmanagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Storage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2StorageToTerraform(struct?: VmgroupV2Storage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2StorageToHclTerraform(struct?: VmgroupV2Storage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2StorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Storage | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Storage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2StorageList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Storage[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2StorageOutputReference {
    return new VmgroupV2StorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmgroupV2Timezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#id VmgroupV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#name VmgroupV2#name}
  */
  readonly name?: string;
}

export function vmgroupV2TimezoneToTerraform(struct?: VmgroupV2Timezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vmgroupV2TimezoneToHclTerraform(struct?: VmgroupV2Timezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmgroupV2TimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmgroupV2Timezone | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmgroupV2Timezone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
  }

  // id - computed: true, optional: true, required: false
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
}

export class VmgroupV2TimezoneList extends cdktf.ComplexList {
  public internalValue? : VmgroupV2Timezone[] | cdktf.IResolvable

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
  public get(index: number): VmgroupV2TimezoneOutputReference {
    return new VmgroupV2TimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2 commvault_vmgroup_v2}
*/
export class VmgroupV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_vmgroup_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmgroupV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmgroupV2 to import
  * @param importFromId The id of the existing VmgroupV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmgroupV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_vmgroup_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vmgroup_v2 commvault_vmgroup_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmgroupV2Config
  */
  public constructor(scope: Construct, id: string, config: VmgroupV2Config) {
    super(scope, id, {
      terraformResourceType: 'commvault_vmgroup_v2',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablefileindexing = config.enablefileindexing;
    this._id = config.id;
    this._name = config.name;
    this._accessnode.internalValue = config.accessnode;
    this._activitycontrol.internalValue = config.activitycontrol;
    this._applicationvalidation.internalValue = config.applicationvalidation;
    this._content.internalValue = config.content;
    this._diskfilters.internalValue = config.diskfilters;
    this._filters.internalValue = config.filters;
    this._hypervisor.internalValue = config.hypervisor;
    this._meditech.internalValue = config.meditech;
    this._meditechsystems.internalValue = config.meditechsystems;
    this._plan.internalValue = config.plan;
    this._securityassociations.internalValue = config.securityassociations;
    this._settings.internalValue = config.settings;
    this._snapshotmanagement.internalValue = config.snapshotmanagement;
    this._storage.internalValue = config.storage;
    this._timezone.internalValue = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enablefileindexing - computed: true, optional: true, required: false
  private _enablefileindexing?: string; 
  public get enablefileindexing() {
    return this.getStringAttribute('enablefileindexing');
  }
  public set enablefileindexing(value: string) {
    this._enablefileindexing = value;
  }
  public resetEnablefileindexing() {
    this._enablefileindexing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablefileindexingInput() {
    return this._enablefileindexing;
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

  // accessnode - computed: false, optional: true, required: false
  private _accessnode = new VmgroupV2AccessnodeList(this, "accessnode", true);
  public get accessnode() {
    return this._accessnode;
  }
  public putAccessnode(value: VmgroupV2Accessnode[] | cdktf.IResolvable) {
    this._accessnode.internalValue = value;
  }
  public resetAccessnode() {
    this._accessnode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessnodeInput() {
    return this._accessnode.internalValue;
  }

  // activitycontrol - computed: false, optional: true, required: false
  private _activitycontrol = new VmgroupV2ActivitycontrolList(this, "activitycontrol", false);
  public get activitycontrol() {
    return this._activitycontrol;
  }
  public putActivitycontrol(value: VmgroupV2Activitycontrol[] | cdktf.IResolvable) {
    this._activitycontrol.internalValue = value;
  }
  public resetActivitycontrol() {
    this._activitycontrol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitycontrolInput() {
    return this._activitycontrol.internalValue;
  }

  // applicationvalidation - computed: false, optional: true, required: false
  private _applicationvalidation = new VmgroupV2ApplicationvalidationList(this, "applicationvalidation", false);
  public get applicationvalidation() {
    return this._applicationvalidation;
  }
  public putApplicationvalidation(value: VmgroupV2Applicationvalidation[] | cdktf.IResolvable) {
    this._applicationvalidation.internalValue = value;
  }
  public resetApplicationvalidation() {
    this._applicationvalidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationvalidationInput() {
    return this._applicationvalidation.internalValue;
  }

  // content - computed: false, optional: false, required: true
  private _content = new VmgroupV2ContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: VmgroupV2Content[] | cdktf.IResolvable) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // diskfilters - computed: false, optional: true, required: false
  private _diskfilters = new VmgroupV2DiskfiltersList(this, "diskfilters", false);
  public get diskfilters() {
    return this._diskfilters;
  }
  public putDiskfilters(value: VmgroupV2Diskfilters[] | cdktf.IResolvable) {
    this._diskfilters.internalValue = value;
  }
  public resetDiskfilters() {
    this._diskfilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskfiltersInput() {
    return this._diskfilters.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new VmgroupV2FiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: VmgroupV2Filters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // hypervisor - computed: false, optional: false, required: true
  private _hypervisor = new VmgroupV2HypervisorList(this, "hypervisor", false);
  public get hypervisor() {
    return this._hypervisor;
  }
  public putHypervisor(value: VmgroupV2Hypervisor[] | cdktf.IResolvable) {
    this._hypervisor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor.internalValue;
  }

  // meditech - computed: false, optional: true, required: false
  private _meditech = new VmgroupV2MeditechList(this, "meditech", false);
  public get meditech() {
    return this._meditech;
  }
  public putMeditech(value: VmgroupV2Meditech[] | cdktf.IResolvable) {
    this._meditech.internalValue = value;
  }
  public resetMeditech() {
    this._meditech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meditechInput() {
    return this._meditech.internalValue;
  }

  // meditechsystems - computed: false, optional: true, required: false
  private _meditechsystems = new VmgroupV2MeditechsystemsList(this, "meditechsystems", false);
  public get meditechsystems() {
    return this._meditechsystems;
  }
  public putMeditechsystems(value: VmgroupV2Meditechsystems[] | cdktf.IResolvable) {
    this._meditechsystems.internalValue = value;
  }
  public resetMeditechsystems() {
    this._meditechsystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meditechsystemsInput() {
    return this._meditechsystems.internalValue;
  }

  // plan - computed: false, optional: false, required: true
  private _plan = new VmgroupV2PlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: VmgroupV2Plan[] | cdktf.IResolvable) {
    this._plan.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // securityassociations - computed: false, optional: true, required: false
  private _securityassociations = new VmgroupV2SecurityassociationsList(this, "securityassociations", true);
  public get securityassociations() {
    return this._securityassociations;
  }
  public putSecurityassociations(value: VmgroupV2Securityassociations[] | cdktf.IResolvable) {
    this._securityassociations.internalValue = value;
  }
  public resetSecurityassociations() {
    this._securityassociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityassociationsInput() {
    return this._securityassociations.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new VmgroupV2SettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: VmgroupV2Settings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // snapshotmanagement - computed: false, optional: true, required: false
  private _snapshotmanagement = new VmgroupV2SnapshotmanagementList(this, "snapshotmanagement", false);
  public get snapshotmanagement() {
    return this._snapshotmanagement;
  }
  public putSnapshotmanagement(value: VmgroupV2Snapshotmanagement[] | cdktf.IResolvable) {
    this._snapshotmanagement.internalValue = value;
  }
  public resetSnapshotmanagement() {
    this._snapshotmanagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotmanagementInput() {
    return this._snapshotmanagement.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new VmgroupV2StorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: VmgroupV2Storage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone = new VmgroupV2TimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: VmgroupV2Timezone[] | cdktf.IResolvable) {
    this._timezone.internalValue = value;
  }
  public resetTimezone() {
    this._timezone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enablefileindexing: cdktf.stringToTerraform(this._enablefileindexing),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      accessnode: cdktf.listMapper(vmgroupV2AccessnodeToTerraform, true)(this._accessnode.internalValue),
      activitycontrol: cdktf.listMapper(vmgroupV2ActivitycontrolToTerraform, true)(this._activitycontrol.internalValue),
      applicationvalidation: cdktf.listMapper(vmgroupV2ApplicationvalidationToTerraform, true)(this._applicationvalidation.internalValue),
      content: cdktf.listMapper(vmgroupV2ContentToTerraform, true)(this._content.internalValue),
      diskfilters: cdktf.listMapper(vmgroupV2DiskfiltersToTerraform, true)(this._diskfilters.internalValue),
      filters: cdktf.listMapper(vmgroupV2FiltersToTerraform, true)(this._filters.internalValue),
      hypervisor: cdktf.listMapper(vmgroupV2HypervisorToTerraform, true)(this._hypervisor.internalValue),
      meditech: cdktf.listMapper(vmgroupV2MeditechToTerraform, true)(this._meditech.internalValue),
      meditechsystems: cdktf.listMapper(vmgroupV2MeditechsystemsToTerraform, true)(this._meditechsystems.internalValue),
      plan: cdktf.listMapper(vmgroupV2PlanToTerraform, true)(this._plan.internalValue),
      securityassociations: cdktf.listMapper(vmgroupV2SecurityassociationsToTerraform, true)(this._securityassociations.internalValue),
      settings: cdktf.listMapper(vmgroupV2SettingsToTerraform, true)(this._settings.internalValue),
      snapshotmanagement: cdktf.listMapper(vmgroupV2SnapshotmanagementToTerraform, true)(this._snapshotmanagement.internalValue),
      storage: cdktf.listMapper(vmgroupV2StorageToTerraform, true)(this._storage.internalValue),
      timezone: cdktf.listMapper(vmgroupV2TimezoneToTerraform, true)(this._timezone.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enablefileindexing: {
        value: cdktf.stringToHclTerraform(this._enablefileindexing),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessnode: {
        value: cdktf.listMapperHcl(vmgroupV2AccessnodeToHclTerraform, true)(this._accessnode.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmgroupV2AccessnodeList",
      },
      activitycontrol: {
        value: cdktf.listMapperHcl(vmgroupV2ActivitycontrolToHclTerraform, true)(this._activitycontrol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2ActivitycontrolList",
      },
      applicationvalidation: {
        value: cdktf.listMapperHcl(vmgroupV2ApplicationvalidationToHclTerraform, true)(this._applicationvalidation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2ApplicationvalidationList",
      },
      content: {
        value: cdktf.listMapperHcl(vmgroupV2ContentToHclTerraform, true)(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2ContentList",
      },
      diskfilters: {
        value: cdktf.listMapperHcl(vmgroupV2DiskfiltersToHclTerraform, true)(this._diskfilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2DiskfiltersList",
      },
      filters: {
        value: cdktf.listMapperHcl(vmgroupV2FiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2FiltersList",
      },
      hypervisor: {
        value: cdktf.listMapperHcl(vmgroupV2HypervisorToHclTerraform, true)(this._hypervisor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2HypervisorList",
      },
      meditech: {
        value: cdktf.listMapperHcl(vmgroupV2MeditechToHclTerraform, true)(this._meditech.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2MeditechList",
      },
      meditechsystems: {
        value: cdktf.listMapperHcl(vmgroupV2MeditechsystemsToHclTerraform, true)(this._meditechsystems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2MeditechsystemsList",
      },
      plan: {
        value: cdktf.listMapperHcl(vmgroupV2PlanToHclTerraform, true)(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2PlanList",
      },
      securityassociations: {
        value: cdktf.listMapperHcl(vmgroupV2SecurityassociationsToHclTerraform, true)(this._securityassociations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmgroupV2SecurityassociationsList",
      },
      settings: {
        value: cdktf.listMapperHcl(vmgroupV2SettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2SettingsList",
      },
      snapshotmanagement: {
        value: cdktf.listMapperHcl(vmgroupV2SnapshotmanagementToHclTerraform, true)(this._snapshotmanagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2SnapshotmanagementList",
      },
      storage: {
        value: cdktf.listMapperHcl(vmgroupV2StorageToHclTerraform, true)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2StorageList",
      },
      timezone: {
        value: cdktf.listMapperHcl(vmgroupV2TimezoneToHclTerraform, true)(this._timezone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmgroupV2TimezoneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
