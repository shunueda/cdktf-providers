// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HypervisorAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Key of Amazon login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#accesskey HypervisorAws#accesskey}
  */
  readonly accesskey: string;
  /**
  * The name of the hypervisor that has to be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#displayname HypervisorAws#displayname}
  */
  readonly displayname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enableawsadminaccount HypervisorAws#enableawsadminaccount}
  */
  readonly enableawsadminaccount?: string;
  /**
  * [Amazon]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#hypervisortype HypervisorAws#hypervisortype}
  */
  readonly hypervisortype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the hypervisor group being created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name: string;
  /**
  * AWS region if Iam role is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#region HypervisorAws#region}
  */
  readonly region?: string;
  /**
  * Role ARN for STS assume role with IAM policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#rolearn HypervisorAws#rolearn}
  */
  readonly rolearn?: string;
  /**
  * secret Key of Amazon login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#secretkey HypervisorAws#secretkey}
  */
  readonly secretkey: string;
  /**
  * if credential validation has to be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#skipcredentialvalidation HypervisorAws#skipcredentialvalidation}
  */
  readonly skipcredentialvalidation?: string;
  /**
  * if Iam Role is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#useiamrole HypervisorAws#useiamrole}
  */
  readonly useiamrole: string;
  /**
  * Clientname to be used as Admin Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#useserviceaccount HypervisorAws#useserviceaccount}
  */
  readonly useserviceaccount?: string;
  /**
  * accessnodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#accessnodes HypervisorAws#accessnodes}
  */
  readonly accessnodes?: HypervisorAwsAccessnodes[] | cdktf.IResolvable;
  /**
  * activitycontrol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#activitycontrol HypervisorAws#activitycontrol}
  */
  readonly activitycontrol?: HypervisorAwsActivitycontrol[] | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#credentials HypervisorAws#credentials}
  */
  readonly credentials?: HypervisorAwsCredentials[] | cdktf.IResolvable;
  /**
  * etcdprotection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#etcdprotection HypervisorAws#etcdprotection}
  */
  readonly etcdprotection?: HypervisorAwsEtcdprotection[] | cdktf.IResolvable;
  /**
  * fbrunixmediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#fbrunixmediaagent HypervisorAws#fbrunixmediaagent}
  */
  readonly fbrunixmediaagent?: HypervisorAwsFbrunixmediaagent[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#security HypervisorAws#security}
  */
  readonly security?: HypervisorAwsSecurity[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#settings HypervisorAws#settings}
  */
  readonly settings?: HypervisorAwsSettings[] | cdktf.IResolvable;
}
export interface HypervisorAwsAccessnodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Type of access node , Ex: 3 - access Node , 28 - Access Node Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#type HypervisorAws#type}
  */
  readonly type?: number;
}

export function hypervisorAwsAccessnodesToTerraform(struct?: HypervisorAwsAccessnodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function hypervisorAwsAccessnodesToHclTerraform(struct?: HypervisorAwsAccessnodes | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsAccessnodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsAccessnodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HypervisorAwsAccessnodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
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

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
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

export class HypervisorAwsAccessnodesList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsAccessnodes[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsAccessnodesOutputReference {
    return new HypervisorAwsAccessnodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToTerraform(struct?: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToHclTerraform(struct?: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
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

export class HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference {
    return new HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime {
  /**
  * delay time in unix timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#time HypervisorAws#time}
  */
  readonly time?: number;
  /**
  * actual delay time value in string format according to the timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#value HypervisorAws#value}
  */
  readonly value?: string;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#timezone HypervisorAws#timezone}
  */
  readonly timezone?: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable;
}

export function hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeToTerraform(struct?: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    value: cdktf.stringToTerraform(struct!.value),
    timezone: cdktf.listMapper(hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeToHclTerraform(struct?: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined) {
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
  private _timezone = new HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable) {
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

export class HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference {
    return new HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsActivitycontrolBackupactivitycontroloptions {
  /**
  * denotes the activity type being considered [BACKUP, RESTORE, ONLINECI, ARCHIVEPRUNE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#activitytype HypervisorAws#activitytype}
  */
  readonly activitytype?: string;
  /**
  * True if the activity type is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enableactivitytype HypervisorAws#enableactivitytype}
  */
  readonly enableactivitytype?: string;
  /**
  * True if the activity will be enabled after a delay time interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enableafteradelay HypervisorAws#enableafteradelay}
  */
  readonly enableafteradelay?: string;
  /**
  * delaytime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#delaytime HypervisorAws#delaytime}
  */
  readonly delaytime?: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable;
}

export function hypervisorAwsActivitycontrolBackupactivitycontroloptionsToTerraform(struct?: HypervisorAwsActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activitytype: cdktf.stringToTerraform(struct!.activitytype),
    enableactivitytype: cdktf.stringToTerraform(struct!.enableactivitytype),
    enableafteradelay: cdktf.stringToTerraform(struct!.enableafteradelay),
    delaytime: cdktf.listMapper(hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeToTerraform, true)(struct!.delaytime),
  }
}


export function hypervisorAwsActivitycontrolBackupactivitycontroloptionsToHclTerraform(struct?: HypervisorAwsActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeToHclTerraform, true)(struct!.delaytime),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsActivitycontrolBackupactivitycontroloptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable | undefined) {
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
  private _delaytime = new HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytimeList(this, "delaytime", false);
  public get delaytime() {
    return this._delaytime;
  }
  public putDelaytime(value: HypervisorAwsActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable) {
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

export class HypervisorAwsActivitycontrolBackupactivitycontroloptionsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsActivitycontrolBackupactivitycontroloptionsOutputReference {
    return new HypervisorAwsActivitycontrolBackupactivitycontroloptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToTerraform(struct?: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToHclTerraform(struct?: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
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

export class HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference {
    return new HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime {
  /**
  * delay time in unix timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#time HypervisorAws#time}
  */
  readonly time?: number;
  /**
  * actual delay time value in string format according to the timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#value HypervisorAws#value}
  */
  readonly value?: string;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#timezone HypervisorAws#timezone}
  */
  readonly timezone?: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable;
}

export function hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeToTerraform(struct?: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    value: cdktf.stringToTerraform(struct!.value),
    timezone: cdktf.listMapper(hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeToHclTerraform(struct?: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined) {
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
  private _timezone = new HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable) {
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

export class HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference {
    return new HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsActivitycontrolRestoreactivitycontroloptions {
  /**
  * denotes the activity type being considered [BACKUP, RESTORE, ONLINECI, ARCHIVEPRUNE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#activitytype HypervisorAws#activitytype}
  */
  readonly activitytype?: string;
  /**
  * True if the activity type is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enableactivitytype HypervisorAws#enableactivitytype}
  */
  readonly enableactivitytype?: string;
  /**
  * True if the activity will be enabled after a delay time interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enableafteradelay HypervisorAws#enableafteradelay}
  */
  readonly enableafteradelay?: string;
  /**
  * delaytime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#delaytime HypervisorAws#delaytime}
  */
  readonly delaytime?: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable;
}

export function hypervisorAwsActivitycontrolRestoreactivitycontroloptionsToTerraform(struct?: HypervisorAwsActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activitytype: cdktf.stringToTerraform(struct!.activitytype),
    enableactivitytype: cdktf.stringToTerraform(struct!.enableactivitytype),
    enableafteradelay: cdktf.stringToTerraform(struct!.enableafteradelay),
    delaytime: cdktf.listMapper(hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeToTerraform, true)(struct!.delaytime),
  }
}


export function hypervisorAwsActivitycontrolRestoreactivitycontroloptionsToHclTerraform(struct?: HypervisorAwsActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeToHclTerraform, true)(struct!.delaytime),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsActivitycontrolRestoreactivitycontroloptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable | undefined) {
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
  private _delaytime = new HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytimeList(this, "delaytime", false);
  public get delaytime() {
    return this._delaytime;
  }
  public putDelaytime(value: HypervisorAwsActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable) {
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

export class HypervisorAwsActivitycontrolRestoreactivitycontroloptionsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsActivitycontrolRestoreactivitycontroloptionsOutputReference {
    return new HypervisorAwsActivitycontrolRestoreactivitycontroloptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsActivitycontrol {
  /**
  * true if Backup is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enablebackup HypervisorAws#enablebackup}
  */
  readonly enablebackup?: string;
  /**
  * true if Restore is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enablerestore HypervisorAws#enablerestore}
  */
  readonly enablerestore?: string;
  /**
  * backupactivitycontroloptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#backupactivitycontroloptions HypervisorAws#backupactivitycontroloptions}
  */
  readonly backupactivitycontroloptions?: HypervisorAwsActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable;
  /**
  * restoreactivitycontroloptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#restoreactivitycontroloptions HypervisorAws#restoreactivitycontroloptions}
  */
  readonly restoreactivitycontroloptions?: HypervisorAwsActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable;
}

export function hypervisorAwsActivitycontrolToTerraform(struct?: HypervisorAwsActivitycontrol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enablebackup: cdktf.stringToTerraform(struct!.enablebackup),
    enablerestore: cdktf.stringToTerraform(struct!.enablerestore),
    backupactivitycontroloptions: cdktf.listMapper(hypervisorAwsActivitycontrolBackupactivitycontroloptionsToTerraform, true)(struct!.backupactivitycontroloptions),
    restoreactivitycontroloptions: cdktf.listMapper(hypervisorAwsActivitycontrolRestoreactivitycontroloptionsToTerraform, true)(struct!.restoreactivitycontroloptions),
  }
}


export function hypervisorAwsActivitycontrolToHclTerraform(struct?: HypervisorAwsActivitycontrol | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAwsActivitycontrolBackupactivitycontroloptionsToHclTerraform, true)(struct!.backupactivitycontroloptions),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsActivitycontrolBackupactivitycontroloptionsList",
    },
    restoreactivitycontroloptions: {
      value: cdktf.listMapperHcl(hypervisorAwsActivitycontrolRestoreactivitycontroloptionsToHclTerraform, true)(struct!.restoreactivitycontroloptions),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsActivitycontrolRestoreactivitycontroloptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsActivitycontrolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsActivitycontrol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsActivitycontrol | cdktf.IResolvable | undefined) {
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
  private _backupactivitycontroloptions = new HypervisorAwsActivitycontrolBackupactivitycontroloptionsList(this, "backupactivitycontroloptions", false);
  public get backupactivitycontroloptions() {
    return this._backupactivitycontroloptions;
  }
  public putBackupactivitycontroloptions(value: HypervisorAwsActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable) {
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
  private _restoreactivitycontroloptions = new HypervisorAwsActivitycontrolRestoreactivitycontroloptionsList(this, "restoreactivitycontroloptions", false);
  public get restoreactivitycontroloptions() {
    return this._restoreactivitycontroloptions;
  }
  public putRestoreactivitycontroloptions(value: HypervisorAwsActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable) {
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

export class HypervisorAwsActivitycontrolList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsActivitycontrol[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsActivitycontrolOutputReference {
    return new HypervisorAwsActivitycontrolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsCredentialsToTerraform(struct?: HypervisorAwsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsCredentialsToHclTerraform(struct?: HypervisorAwsCredentials | cdktf.IResolvable): any {
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

export class HypervisorAwsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsCredentials | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsCredentialsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsCredentials[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsCredentialsOutputReference {
    return new HypervisorAwsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsEtcdprotectionPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsEtcdprotectionPlanToTerraform(struct?: HypervisorAwsEtcdprotectionPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsEtcdprotectionPlanToHclTerraform(struct?: HypervisorAwsEtcdprotectionPlan | cdktf.IResolvable): any {
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

export class HypervisorAwsEtcdprotectionPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsEtcdprotectionPlan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsEtcdprotectionPlan | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsEtcdprotectionPlanList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsEtcdprotectionPlan[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsEtcdprotectionPlanOutputReference {
    return new HypervisorAwsEtcdprotectionPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsEtcdprotection {
  /**
  * Denote if etcd protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#enabled HypervisorAws#enabled}
  */
  readonly enabled?: string;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#plan HypervisorAws#plan}
  */
  readonly plan?: HypervisorAwsEtcdprotectionPlan[] | cdktf.IResolvable;
}

export function hypervisorAwsEtcdprotectionToTerraform(struct?: HypervisorAwsEtcdprotection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    plan: cdktf.listMapper(hypervisorAwsEtcdprotectionPlanToTerraform, true)(struct!.plan),
  }
}


export function hypervisorAwsEtcdprotectionToHclTerraform(struct?: HypervisorAwsEtcdprotection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan: {
      value: cdktf.listMapperHcl(hypervisorAwsEtcdprotectionPlanToHclTerraform, true)(struct!.plan),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsEtcdprotectionPlanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsEtcdprotectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsEtcdprotection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._plan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HypervisorAwsEtcdprotection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._plan.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._plan.internalValue = value.plan;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new HypervisorAwsEtcdprotectionPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: HypervisorAwsEtcdprotectionPlan[] | cdktf.IResolvable) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }
}

export class HypervisorAwsEtcdprotectionList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsEtcdprotection[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsEtcdprotectionOutputReference {
    return new HypervisorAwsEtcdprotectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsFbrunixmediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsFbrunixmediaagentToTerraform(struct?: HypervisorAwsFbrunixmediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsFbrunixmediaagentToHclTerraform(struct?: HypervisorAwsFbrunixmediaagent | cdktf.IResolvable): any {
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

export class HypervisorAwsFbrunixmediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsFbrunixmediaagent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsFbrunixmediaagent | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsFbrunixmediaagentList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsFbrunixmediaagent[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsFbrunixmediaagentOutputReference {
    return new HypervisorAwsFbrunixmediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSecurityAssociatedusergroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function hypervisorAwsSecurityAssociatedusergroupsToTerraform(struct?: HypervisorAwsSecurityAssociatedusergroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function hypervisorAwsSecurityAssociatedusergroupsToHclTerraform(struct?: HypervisorAwsSecurityAssociatedusergroups | cdktf.IResolvable): any {
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

export class HypervisorAwsSecurityAssociatedusergroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSecurityAssociatedusergroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsSecurityAssociatedusergroups | cdktf.IResolvable | undefined) {
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
}

export class HypervisorAwsSecurityAssociatedusergroupsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSecurityAssociatedusergroups[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSecurityAssociatedusergroupsOutputReference {
    return new HypervisorAwsSecurityAssociatedusergroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSecurity {
  /**
  * Client owners for the Hypervisor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#clientowners HypervisorAws#clientowners}
  */
  readonly clientowners?: string;
  /**
  * associatedusergroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#associatedusergroups HypervisorAws#associatedusergroups}
  */
  readonly associatedusergroups?: HypervisorAwsSecurityAssociatedusergroups[] | cdktf.IResolvable;
}

export function hypervisorAwsSecurityToTerraform(struct?: HypervisorAwsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clientowners: cdktf.stringToTerraform(struct!.clientowners),
    associatedusergroups: cdktf.listMapper(hypervisorAwsSecurityAssociatedusergroupsToTerraform, true)(struct!.associatedusergroups),
  }
}


export function hypervisorAwsSecurityToHclTerraform(struct?: HypervisorAwsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clientowners: {
      value: cdktf.stringToHclTerraform(struct!.clientowners),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    associatedusergroups: {
      value: cdktf.listMapperHcl(hypervisorAwsSecurityAssociatedusergroupsToHclTerraform, true)(struct!.associatedusergroups),
      isBlock: true,
      type: "set",
      storageClassType: "HypervisorAwsSecurityAssociatedusergroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientowners !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientowners = this._clientowners;
    }
    if (this._associatedusergroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedusergroups = this._associatedusergroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HypervisorAwsSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientowners = undefined;
      this._associatedusergroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientowners = value.clientowners;
      this._associatedusergroups.internalValue = value.associatedusergroups;
    }
  }

  // clientowners - computed: true, optional: true, required: false
  private _clientowners?: string; 
  public get clientowners() {
    return this.getStringAttribute('clientowners');
  }
  public set clientowners(value: string) {
    this._clientowners = value;
  }
  public resetClientowners() {
    this._clientowners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientownersInput() {
    return this._clientowners;
  }

  // associatedusergroups - computed: false, optional: true, required: false
  private _associatedusergroups = new HypervisorAwsSecurityAssociatedusergroupsList(this, "associatedusergroups", true);
  public get associatedusergroups() {
    return this._associatedusergroups;
  }
  public putAssociatedusergroups(value: HypervisorAwsSecurityAssociatedusergroups[] | cdktf.IResolvable) {
    this._associatedusergroups.internalValue = value;
  }
  public resetAssociatedusergroups() {
    this._associatedusergroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedusergroupsInput() {
    return this._associatedusergroups.internalValue;
  }
}

export class HypervisorAwsSecurityList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSecurity[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSecurityOutputReference {
    return new HypervisorAwsSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettingsApplicationcredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#password HypervisorAws#password}
  */
  readonly password?: string;
}

export function hypervisorAwsSettingsApplicationcredentialsToTerraform(struct?: HypervisorAwsSettingsApplicationcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function hypervisorAwsSettingsApplicationcredentialsToHclTerraform(struct?: HypervisorAwsSettingsApplicationcredentials | cdktf.IResolvable): any {
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

export class HypervisorAwsSettingsApplicationcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettingsApplicationcredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsSettingsApplicationcredentials | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsSettingsApplicationcredentialsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettingsApplicationcredentials[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsApplicationcredentialsOutputReference {
    return new HypervisorAwsSettingsApplicationcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettingsCustomattributes {
  /**
  * client custom attribute type . Ex- 3 - For client 8- For clientGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#type HypervisorAws#type}
  */
  readonly type?: number;
  /**
  * client/Client Group custom attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#value HypervisorAws#value}
  */
  readonly value?: string;
}

export function hypervisorAwsSettingsCustomattributesToTerraform(struct?: HypervisorAwsSettingsCustomattributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.numberToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hypervisorAwsSettingsCustomattributesToHclTerraform(struct?: HypervisorAwsSettingsCustomattributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsSettingsCustomattributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettingsCustomattributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HypervisorAwsSettingsCustomattributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class HypervisorAwsSettingsCustomattributesList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettingsCustomattributes[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsCustomattributesOutputReference {
    return new HypervisorAwsSettingsCustomattributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettingsGuestcredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#password HypervisorAws#password}
  */
  readonly password?: string;
}

export function hypervisorAwsSettingsGuestcredentialsToTerraform(struct?: HypervisorAwsSettingsGuestcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function hypervisorAwsSettingsGuestcredentialsToHclTerraform(struct?: HypervisorAwsSettingsGuestcredentials | cdktf.IResolvable): any {
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

export class HypervisorAwsSettingsGuestcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettingsGuestcredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsSettingsGuestcredentials | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsSettingsGuestcredentialsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettingsGuestcredentials[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsGuestcredentialsOutputReference {
    return new HypervisorAwsSettingsGuestcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettingsMetricsmonitoringpolicy {
  /**
  * Metrics Moitoring PolicyId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * True if Metrics Monioring policy is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#isenabled HypervisorAws#isenabled}
  */
  readonly isenabled?: string;
  /**
  * Metrics Moitoring Policy Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsSettingsMetricsmonitoringpolicyToTerraform(struct?: HypervisorAwsSettingsMetricsmonitoringpolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    isenabled: cdktf.stringToTerraform(struct!.isenabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsSettingsMetricsmonitoringpolicyToHclTerraform(struct?: HypervisorAwsSettingsMetricsmonitoringpolicy | cdktf.IResolvable): any {
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
    isenabled: {
      value: cdktf.stringToHclTerraform(struct!.isenabled),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsSettingsMetricsmonitoringpolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettingsMetricsmonitoringpolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isenabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isenabled = this._isenabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HypervisorAwsSettingsMetricsmonitoringpolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._isenabled = undefined;
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
      this._isenabled = value.isenabled;
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

  // isenabled - computed: true, optional: true, required: false
  private _isenabled?: string; 
  public get isenabled() {
    return this.getStringAttribute('isenabled');
  }
  public set isenabled(value: string) {
    this._isenabled = value;
  }
  public resetIsenabled() {
    this._isenabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isenabledInput() {
    return this._isenabled;
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

export class HypervisorAwsSettingsMetricsmonitoringpolicyList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettingsMetricsmonitoringpolicy[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsMetricsmonitoringpolicyOutputReference {
    return new HypervisorAwsSettingsMetricsmonitoringpolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettingsMountaccessnode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsSettingsMountaccessnodeToTerraform(struct?: HypervisorAwsSettingsMountaccessnode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsSettingsMountaccessnodeToHclTerraform(struct?: HypervisorAwsSettingsMountaccessnode | cdktf.IResolvable): any {
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

export class HypervisorAwsSettingsMountaccessnodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettingsMountaccessnode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsSettingsMountaccessnode | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsSettingsMountaccessnodeList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettingsMountaccessnode[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsMountaccessnodeOutputReference {
    return new HypervisorAwsSettingsMountaccessnodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettingsRegioninfo {
  /**
  * Display Name of Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#displayname HypervisorAws#displayname}
  */
  readonly displayname?: string;
  /**
  * Region Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Geolocation Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#latitude HypervisorAws#latitude}
  */
  readonly latitude?: string;
  /**
  * Geolocation Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#longitude HypervisorAws#longitude}
  */
  readonly longitude?: string;
  /**
  * Region Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsSettingsRegioninfoToTerraform(struct?: HypervisorAwsSettingsRegioninfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    displayname: cdktf.stringToTerraform(struct!.displayname),
    id: cdktf.numberToTerraform(struct!.id),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsSettingsRegioninfoToHclTerraform(struct?: HypervisorAwsSettingsRegioninfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    displayname: {
      value: cdktf.stringToHclTerraform(struct!.displayname),
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
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsSettingsRegioninfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettingsRegioninfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayname !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayname = this._displayname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HypervisorAwsSettingsRegioninfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayname = undefined;
      this._id = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayname = value.displayname;
      this._id = value.id;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._name = value.name;
    }
  }

  // displayname - computed: true, optional: true, required: false
  private _displayname?: string; 
  public get displayname() {
    return this.getStringAttribute('displayname');
  }
  public set displayname(value: string) {
    this._displayname = value;
  }
  public resetDisplayname() {
    this._displayname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaynameInput() {
    return this._displayname;
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

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
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

export class HypervisorAwsSettingsRegioninfoList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettingsRegioninfo[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsRegioninfoOutputReference {
    return new HypervisorAwsSettingsRegioninfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettingsTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#id HypervisorAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#name HypervisorAws#name}
  */
  readonly name?: string;
}

export function hypervisorAwsSettingsTimezoneToTerraform(struct?: HypervisorAwsSettingsTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAwsSettingsTimezoneToHclTerraform(struct?: HypervisorAwsSettingsTimezone | cdktf.IResolvable): any {
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

export class HypervisorAwsSettingsTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettingsTimezone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAwsSettingsTimezone | cdktf.IResolvable | undefined) {
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

export class HypervisorAwsSettingsTimezoneList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettingsTimezone[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsTimezoneOutputReference {
    return new HypervisorAwsSettingsTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAwsSettings {
  /**
  * applicationcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#applicationcredentials HypervisorAws#applicationcredentials}
  */
  readonly applicationcredentials?: HypervisorAwsSettingsApplicationcredentials[] | cdktf.IResolvable;
  /**
  * customattributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#customattributes HypervisorAws#customattributes}
  */
  readonly customattributes?: HypervisorAwsSettingsCustomattributes[] | cdktf.IResolvable;
  /**
  * guestcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#guestcredentials HypervisorAws#guestcredentials}
  */
  readonly guestcredentials?: HypervisorAwsSettingsGuestcredentials[] | cdktf.IResolvable;
  /**
  * metricsmonitoringpolicy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#metricsmonitoringpolicy HypervisorAws#metricsmonitoringpolicy}
  */
  readonly metricsmonitoringpolicy?: HypervisorAwsSettingsMetricsmonitoringpolicy[] | cdktf.IResolvable;
  /**
  * mountaccessnode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#mountaccessnode HypervisorAws#mountaccessnode}
  */
  readonly mountaccessnode?: HypervisorAwsSettingsMountaccessnode[] | cdktf.IResolvable;
  /**
  * regioninfo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#regioninfo HypervisorAws#regioninfo}
  */
  readonly regioninfo?: HypervisorAwsSettingsRegioninfo[] | cdktf.IResolvable;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#timezone HypervisorAws#timezone}
  */
  readonly timezone?: HypervisorAwsSettingsTimezone[] | cdktf.IResolvable;
}

export function hypervisorAwsSettingsToTerraform(struct?: HypervisorAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applicationcredentials: cdktf.listMapper(hypervisorAwsSettingsApplicationcredentialsToTerraform, true)(struct!.applicationcredentials),
    customattributes: cdktf.listMapper(hypervisorAwsSettingsCustomattributesToTerraform, true)(struct!.customattributes),
    guestcredentials: cdktf.listMapper(hypervisorAwsSettingsGuestcredentialsToTerraform, true)(struct!.guestcredentials),
    metricsmonitoringpolicy: cdktf.listMapper(hypervisorAwsSettingsMetricsmonitoringpolicyToTerraform, true)(struct!.metricsmonitoringpolicy),
    mountaccessnode: cdktf.listMapper(hypervisorAwsSettingsMountaccessnodeToTerraform, true)(struct!.mountaccessnode),
    regioninfo: cdktf.listMapper(hypervisorAwsSettingsRegioninfoToTerraform, true)(struct!.regioninfo),
    timezone: cdktf.listMapper(hypervisorAwsSettingsTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function hypervisorAwsSettingsToHclTerraform(struct?: HypervisorAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applicationcredentials: {
      value: cdktf.listMapperHcl(hypervisorAwsSettingsApplicationcredentialsToHclTerraform, true)(struct!.applicationcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsSettingsApplicationcredentialsList",
    },
    customattributes: {
      value: cdktf.listMapperHcl(hypervisorAwsSettingsCustomattributesToHclTerraform, true)(struct!.customattributes),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsSettingsCustomattributesList",
    },
    guestcredentials: {
      value: cdktf.listMapperHcl(hypervisorAwsSettingsGuestcredentialsToHclTerraform, true)(struct!.guestcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsSettingsGuestcredentialsList",
    },
    metricsmonitoringpolicy: {
      value: cdktf.listMapperHcl(hypervisorAwsSettingsMetricsmonitoringpolicyToHclTerraform, true)(struct!.metricsmonitoringpolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsSettingsMetricsmonitoringpolicyList",
    },
    mountaccessnode: {
      value: cdktf.listMapperHcl(hypervisorAwsSettingsMountaccessnodeToHclTerraform, true)(struct!.mountaccessnode),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsSettingsMountaccessnodeList",
    },
    regioninfo: {
      value: cdktf.listMapperHcl(hypervisorAwsSettingsRegioninfoToHclTerraform, true)(struct!.regioninfo),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsSettingsRegioninfoList",
    },
    timezone: {
      value: cdktf.listMapperHcl(hypervisorAwsSettingsTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAwsSettingsTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAwsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationcredentials = this._applicationcredentials?.internalValue;
    }
    if (this._customattributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customattributes = this._customattributes?.internalValue;
    }
    if (this._guestcredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestcredentials = this._guestcredentials?.internalValue;
    }
    if (this._metricsmonitoringpolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsmonitoringpolicy = this._metricsmonitoringpolicy?.internalValue;
    }
    if (this._mountaccessnode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountaccessnode = this._mountaccessnode?.internalValue;
    }
    if (this._regioninfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regioninfo = this._regioninfo?.internalValue;
    }
    if (this._timezone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HypervisorAwsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationcredentials.internalValue = undefined;
      this._customattributes.internalValue = undefined;
      this._guestcredentials.internalValue = undefined;
      this._metricsmonitoringpolicy.internalValue = undefined;
      this._mountaccessnode.internalValue = undefined;
      this._regioninfo.internalValue = undefined;
      this._timezone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationcredentials.internalValue = value.applicationcredentials;
      this._customattributes.internalValue = value.customattributes;
      this._guestcredentials.internalValue = value.guestcredentials;
      this._metricsmonitoringpolicy.internalValue = value.metricsmonitoringpolicy;
      this._mountaccessnode.internalValue = value.mountaccessnode;
      this._regioninfo.internalValue = value.regioninfo;
      this._timezone.internalValue = value.timezone;
    }
  }

  // applicationcredentials - computed: false, optional: true, required: false
  private _applicationcredentials = new HypervisorAwsSettingsApplicationcredentialsList(this, "applicationcredentials", false);
  public get applicationcredentials() {
    return this._applicationcredentials;
  }
  public putApplicationcredentials(value: HypervisorAwsSettingsApplicationcredentials[] | cdktf.IResolvable) {
    this._applicationcredentials.internalValue = value;
  }
  public resetApplicationcredentials() {
    this._applicationcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationcredentialsInput() {
    return this._applicationcredentials.internalValue;
  }

  // customattributes - computed: false, optional: true, required: false
  private _customattributes = new HypervisorAwsSettingsCustomattributesList(this, "customattributes", false);
  public get customattributes() {
    return this._customattributes;
  }
  public putCustomattributes(value: HypervisorAwsSettingsCustomattributes[] | cdktf.IResolvable) {
    this._customattributes.internalValue = value;
  }
  public resetCustomattributes() {
    this._customattributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customattributesInput() {
    return this._customattributes.internalValue;
  }

  // guestcredentials - computed: false, optional: true, required: false
  private _guestcredentials = new HypervisorAwsSettingsGuestcredentialsList(this, "guestcredentials", false);
  public get guestcredentials() {
    return this._guestcredentials;
  }
  public putGuestcredentials(value: HypervisorAwsSettingsGuestcredentials[] | cdktf.IResolvable) {
    this._guestcredentials.internalValue = value;
  }
  public resetGuestcredentials() {
    this._guestcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestcredentialsInput() {
    return this._guestcredentials.internalValue;
  }

  // metricsmonitoringpolicy - computed: false, optional: true, required: false
  private _metricsmonitoringpolicy = new HypervisorAwsSettingsMetricsmonitoringpolicyList(this, "metricsmonitoringpolicy", false);
  public get metricsmonitoringpolicy() {
    return this._metricsmonitoringpolicy;
  }
  public putMetricsmonitoringpolicy(value: HypervisorAwsSettingsMetricsmonitoringpolicy[] | cdktf.IResolvable) {
    this._metricsmonitoringpolicy.internalValue = value;
  }
  public resetMetricsmonitoringpolicy() {
    this._metricsmonitoringpolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsmonitoringpolicyInput() {
    return this._metricsmonitoringpolicy.internalValue;
  }

  // mountaccessnode - computed: false, optional: true, required: false
  private _mountaccessnode = new HypervisorAwsSettingsMountaccessnodeList(this, "mountaccessnode", false);
  public get mountaccessnode() {
    return this._mountaccessnode;
  }
  public putMountaccessnode(value: HypervisorAwsSettingsMountaccessnode[] | cdktf.IResolvable) {
    this._mountaccessnode.internalValue = value;
  }
  public resetMountaccessnode() {
    this._mountaccessnode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountaccessnodeInput() {
    return this._mountaccessnode.internalValue;
  }

  // regioninfo - computed: false, optional: true, required: false
  private _regioninfo = new HypervisorAwsSettingsRegioninfoList(this, "regioninfo", false);
  public get regioninfo() {
    return this._regioninfo;
  }
  public putRegioninfo(value: HypervisorAwsSettingsRegioninfo[] | cdktf.IResolvable) {
    this._regioninfo.internalValue = value;
  }
  public resetRegioninfo() {
    this._regioninfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regioninfoInput() {
    return this._regioninfo.internalValue;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone = new HypervisorAwsSettingsTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: HypervisorAwsSettingsTimezone[] | cdktf.IResolvable) {
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

export class HypervisorAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAwsSettingsOutputReference {
    return new HypervisorAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws commvault_hypervisor_aws}
*/
export class HypervisorAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_hypervisor_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HypervisorAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HypervisorAws to import
  * @param importFromId The id of the existing HypervisorAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HypervisorAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_hypervisor_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_aws commvault_hypervisor_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HypervisorAwsConfig
  */
  public constructor(scope: Construct, id: string, config: HypervisorAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_hypervisor_aws',
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
    this._accesskey = config.accesskey;
    this._displayname = config.displayname;
    this._enableawsadminaccount = config.enableawsadminaccount;
    this._hypervisortype = config.hypervisortype;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._rolearn = config.rolearn;
    this._secretkey = config.secretkey;
    this._skipcredentialvalidation = config.skipcredentialvalidation;
    this._useiamrole = config.useiamrole;
    this._useserviceaccount = config.useserviceaccount;
    this._accessnodes.internalValue = config.accessnodes;
    this._activitycontrol.internalValue = config.activitycontrol;
    this._credentials.internalValue = config.credentials;
    this._etcdprotection.internalValue = config.etcdprotection;
    this._fbrunixmediaagent.internalValue = config.fbrunixmediaagent;
    this._security.internalValue = config.security;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accesskey - computed: false, optional: false, required: true
  private _accesskey?: string; 
  public get accesskey() {
    return this.getStringAttribute('accesskey');
  }
  public set accesskey(value: string) {
    this._accesskey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accesskeyInput() {
    return this._accesskey;
  }

  // displayname - computed: true, optional: true, required: false
  private _displayname?: string; 
  public get displayname() {
    return this.getStringAttribute('displayname');
  }
  public set displayname(value: string) {
    this._displayname = value;
  }
  public resetDisplayname() {
    this._displayname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaynameInput() {
    return this._displayname;
  }

  // enableawsadminaccount - computed: true, optional: true, required: false
  private _enableawsadminaccount?: string; 
  public get enableawsadminaccount() {
    return this.getStringAttribute('enableawsadminaccount');
  }
  public set enableawsadminaccount(value: string) {
    this._enableawsadminaccount = value;
  }
  public resetEnableawsadminaccount() {
    this._enableawsadminaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableawsadminaccountInput() {
    return this._enableawsadminaccount;
  }

  // hypervisortype - computed: true, optional: true, required: false
  private _hypervisortype?: string; 
  public get hypervisortype() {
    return this.getStringAttribute('hypervisortype');
  }
  public set hypervisortype(value: string) {
    this._hypervisortype = value;
  }
  public resetHypervisortype() {
    this._hypervisortype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisortypeInput() {
    return this._hypervisortype;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rolearn - computed: true, optional: true, required: false
  private _rolearn?: string; 
  public get rolearn() {
    return this.getStringAttribute('rolearn');
  }
  public set rolearn(value: string) {
    this._rolearn = value;
  }
  public resetRolearn() {
    this._rolearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolearnInput() {
    return this._rolearn;
  }

  // secretkey - computed: false, optional: false, required: true
  private _secretkey?: string; 
  public get secretkey() {
    return this.getStringAttribute('secretkey');
  }
  public set secretkey(value: string) {
    this._secretkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretkeyInput() {
    return this._secretkey;
  }

  // skipcredentialvalidation - computed: true, optional: true, required: false
  private _skipcredentialvalidation?: string; 
  public get skipcredentialvalidation() {
    return this.getStringAttribute('skipcredentialvalidation');
  }
  public set skipcredentialvalidation(value: string) {
    this._skipcredentialvalidation = value;
  }
  public resetSkipcredentialvalidation() {
    this._skipcredentialvalidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipcredentialvalidationInput() {
    return this._skipcredentialvalidation;
  }

  // useiamrole - computed: false, optional: false, required: true
  private _useiamrole?: string; 
  public get useiamrole() {
    return this.getStringAttribute('useiamrole');
  }
  public set useiamrole(value: string) {
    this._useiamrole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useiamroleInput() {
    return this._useiamrole;
  }

  // useserviceaccount - computed: true, optional: true, required: false
  private _useserviceaccount?: string; 
  public get useserviceaccount() {
    return this.getStringAttribute('useserviceaccount');
  }
  public set useserviceaccount(value: string) {
    this._useserviceaccount = value;
  }
  public resetUseserviceaccount() {
    this._useserviceaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useserviceaccountInput() {
    return this._useserviceaccount;
  }

  // accessnodes - computed: false, optional: true, required: false
  private _accessnodes = new HypervisorAwsAccessnodesList(this, "accessnodes", true);
  public get accessnodes() {
    return this._accessnodes;
  }
  public putAccessnodes(value: HypervisorAwsAccessnodes[] | cdktf.IResolvable) {
    this._accessnodes.internalValue = value;
  }
  public resetAccessnodes() {
    this._accessnodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessnodesInput() {
    return this._accessnodes.internalValue;
  }

  // activitycontrol - computed: false, optional: true, required: false
  private _activitycontrol = new HypervisorAwsActivitycontrolList(this, "activitycontrol", false);
  public get activitycontrol() {
    return this._activitycontrol;
  }
  public putActivitycontrol(value: HypervisorAwsActivitycontrol[] | cdktf.IResolvable) {
    this._activitycontrol.internalValue = value;
  }
  public resetActivitycontrol() {
    this._activitycontrol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitycontrolInput() {
    return this._activitycontrol.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new HypervisorAwsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: HypervisorAwsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // etcdprotection - computed: false, optional: true, required: false
  private _etcdprotection = new HypervisorAwsEtcdprotectionList(this, "etcdprotection", false);
  public get etcdprotection() {
    return this._etcdprotection;
  }
  public putEtcdprotection(value: HypervisorAwsEtcdprotection[] | cdktf.IResolvable) {
    this._etcdprotection.internalValue = value;
  }
  public resetEtcdprotection() {
    this._etcdprotection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdprotectionInput() {
    return this._etcdprotection.internalValue;
  }

  // fbrunixmediaagent - computed: false, optional: true, required: false
  private _fbrunixmediaagent = new HypervisorAwsFbrunixmediaagentList(this, "fbrunixmediaagent", false);
  public get fbrunixmediaagent() {
    return this._fbrunixmediaagent;
  }
  public putFbrunixmediaagent(value: HypervisorAwsFbrunixmediaagent[] | cdktf.IResolvable) {
    this._fbrunixmediaagent.internalValue = value;
  }
  public resetFbrunixmediaagent() {
    this._fbrunixmediaagent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fbrunixmediaagentInput() {
    return this._fbrunixmediaagent.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new HypervisorAwsSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: HypervisorAwsSecurity[] | cdktf.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new HypervisorAwsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: HypervisorAwsSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accesskey: cdktf.stringToTerraform(this._accesskey),
      displayname: cdktf.stringToTerraform(this._displayname),
      enableawsadminaccount: cdktf.stringToTerraform(this._enableawsadminaccount),
      hypervisortype: cdktf.stringToTerraform(this._hypervisortype),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      rolearn: cdktf.stringToTerraform(this._rolearn),
      secretkey: cdktf.stringToTerraform(this._secretkey),
      skipcredentialvalidation: cdktf.stringToTerraform(this._skipcredentialvalidation),
      useiamrole: cdktf.stringToTerraform(this._useiamrole),
      useserviceaccount: cdktf.stringToTerraform(this._useserviceaccount),
      accessnodes: cdktf.listMapper(hypervisorAwsAccessnodesToTerraform, true)(this._accessnodes.internalValue),
      activitycontrol: cdktf.listMapper(hypervisorAwsActivitycontrolToTerraform, true)(this._activitycontrol.internalValue),
      credentials: cdktf.listMapper(hypervisorAwsCredentialsToTerraform, true)(this._credentials.internalValue),
      etcdprotection: cdktf.listMapper(hypervisorAwsEtcdprotectionToTerraform, true)(this._etcdprotection.internalValue),
      fbrunixmediaagent: cdktf.listMapper(hypervisorAwsFbrunixmediaagentToTerraform, true)(this._fbrunixmediaagent.internalValue),
      security: cdktf.listMapper(hypervisorAwsSecurityToTerraform, true)(this._security.internalValue),
      settings: cdktf.listMapper(hypervisorAwsSettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accesskey: {
        value: cdktf.stringToHclTerraform(this._accesskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      displayname: {
        value: cdktf.stringToHclTerraform(this._displayname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enableawsadminaccount: {
        value: cdktf.stringToHclTerraform(this._enableawsadminaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisortype: {
        value: cdktf.stringToHclTerraform(this._hypervisortype),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolearn: {
        value: cdktf.stringToHclTerraform(this._rolearn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secretkey: {
        value: cdktf.stringToHclTerraform(this._secretkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skipcredentialvalidation: {
        value: cdktf.stringToHclTerraform(this._skipcredentialvalidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useiamrole: {
        value: cdktf.stringToHclTerraform(this._useiamrole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useserviceaccount: {
        value: cdktf.stringToHclTerraform(this._useserviceaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessnodes: {
        value: cdktf.listMapperHcl(hypervisorAwsAccessnodesToHclTerraform, true)(this._accessnodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HypervisorAwsAccessnodesList",
      },
      activitycontrol: {
        value: cdktf.listMapperHcl(hypervisorAwsActivitycontrolToHclTerraform, true)(this._activitycontrol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAwsActivitycontrolList",
      },
      credentials: {
        value: cdktf.listMapperHcl(hypervisorAwsCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAwsCredentialsList",
      },
      etcdprotection: {
        value: cdktf.listMapperHcl(hypervisorAwsEtcdprotectionToHclTerraform, true)(this._etcdprotection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAwsEtcdprotectionList",
      },
      fbrunixmediaagent: {
        value: cdktf.listMapperHcl(hypervisorAwsFbrunixmediaagentToHclTerraform, true)(this._fbrunixmediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAwsFbrunixmediaagentList",
      },
      security: {
        value: cdktf.listMapperHcl(hypervisorAwsSecurityToHclTerraform, true)(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAwsSecurityList",
      },
      settings: {
        value: cdktf.listMapperHcl(hypervisorAwsSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAwsSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
