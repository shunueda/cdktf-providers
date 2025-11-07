// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HypervisorAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application id of Azure login Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#applicationid HypervisorAzure#applicationid}
  */
  readonly applicationid?: string;
  /**
  * Application Password of Azure login Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#applicationpassword HypervisorAzure#applicationpassword}
  */
  readonly applicationpassword?: string;
  /**
  * The name of the hypervisor that has to be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#displayname HypervisorAzure#displayname}
  */
  readonly displayname?: string;
  /**
  * [Azure_V2]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#hypervisortype HypervisorAzure#hypervisortype}
  */
  readonly hypervisortype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the hypervisor group being created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name: string;
  /**
  * Application Password of Azure login Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#password HypervisorAzure#password}
  */
  readonly password?: string;
  /**
  * Client Name to Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#servername HypervisorAzure#servername}
  */
  readonly servername?: string;
  /**
  * if credential validation has to be skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#skipcredentialvalidation HypervisorAzure#skipcredentialvalidation}
  */
  readonly skipcredentialvalidation?: string;
  /**
  * subscription id of Azure 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#subscriptionid HypervisorAzure#subscriptionid}
  */
  readonly subscriptionid: string;
  /**
  * Tenant id of Azure login Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#tenantid HypervisorAzure#tenantid}
  */
  readonly tenantid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#usemanagedidentity HypervisorAzure#usemanagedidentity}
  */
  readonly usemanagedidentity?: string;
  /**
  * Application id of Azure login Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#username HypervisorAzure#username}
  */
  readonly username?: string;
  /**
  * accessnodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#accessnodes HypervisorAzure#accessnodes}
  */
  readonly accessnodes?: HypervisorAzureAccessnodes[] | cdktf.IResolvable;
  /**
  * activitycontrol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#activitycontrol HypervisorAzure#activitycontrol}
  */
  readonly activitycontrol?: HypervisorAzureActivitycontrol[] | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#credentials HypervisorAzure#credentials}
  */
  readonly credentials?: HypervisorAzureCredentials[] | cdktf.IResolvable;
  /**
  * etcdprotection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#etcdprotection HypervisorAzure#etcdprotection}
  */
  readonly etcdprotection?: HypervisorAzureEtcdprotection[] | cdktf.IResolvable;
  /**
  * fbrunixmediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#fbrunixmediaagent HypervisorAzure#fbrunixmediaagent}
  */
  readonly fbrunixmediaagent?: HypervisorAzureFbrunixmediaagent[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#security HypervisorAzure#security}
  */
  readonly security?: HypervisorAzureSecurity[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#settings HypervisorAzure#settings}
  */
  readonly settings?: HypervisorAzureSettings[] | cdktf.IResolvable;
  /**
  * workloadregion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#workloadregion HypervisorAzure#workloadregion}
  */
  readonly workloadregion?: HypervisorAzureWorkloadregion[] | cdktf.IResolvable;
}
export interface HypervisorAzureAccessnodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Type of access node , Ex: 3 - access Node , 28 - Access Node Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#type HypervisorAzure#type}
  */
  readonly type?: number;
}

export function hypervisorAzureAccessnodesToTerraform(struct?: HypervisorAzureAccessnodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function hypervisorAzureAccessnodesToHclTerraform(struct?: HypervisorAzureAccessnodes | cdktf.IResolvable): any {
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

export class HypervisorAzureAccessnodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureAccessnodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureAccessnodes | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureAccessnodesList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureAccessnodes[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureAccessnodesOutputReference {
    return new HypervisorAzureAccessnodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToTerraform(struct?: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToHclTerraform(struct?: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
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

export class HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference {
    return new HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime {
  /**
  * delay time in unix timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#time HypervisorAzure#time}
  */
  readonly time?: number;
  /**
  * actual delay time value in string format according to the timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#value HypervisorAzure#value}
  */
  readonly value?: string;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#timezone HypervisorAzure#timezone}
  */
  readonly timezone?: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable;
}

export function hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeToTerraform(struct?: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    value: cdktf.stringToTerraform(struct!.value),
    timezone: cdktf.listMapper(hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeToHclTerraform(struct?: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined) {
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
  private _timezone = new HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable) {
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

export class HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference {
    return new HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureActivitycontrolBackupactivitycontroloptions {
  /**
  * denotes the activity type being considered [BACKUP, RESTORE, ONLINECI, ARCHIVEPRUNE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#activitytype HypervisorAzure#activitytype}
  */
  readonly activitytype?: string;
  /**
  * True if the activity type is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#enableactivitytype HypervisorAzure#enableactivitytype}
  */
  readonly enableactivitytype?: string;
  /**
  * True if the activity will be enabled after a delay time interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#enableafteradelay HypervisorAzure#enableafteradelay}
  */
  readonly enableafteradelay?: string;
  /**
  * delaytime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#delaytime HypervisorAzure#delaytime}
  */
  readonly delaytime?: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable;
}

export function hypervisorAzureActivitycontrolBackupactivitycontroloptionsToTerraform(struct?: HypervisorAzureActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activitytype: cdktf.stringToTerraform(struct!.activitytype),
    enableactivitytype: cdktf.stringToTerraform(struct!.enableactivitytype),
    enableafteradelay: cdktf.stringToTerraform(struct!.enableafteradelay),
    delaytime: cdktf.listMapper(hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeToTerraform, true)(struct!.delaytime),
  }
}


export function hypervisorAzureActivitycontrolBackupactivitycontroloptionsToHclTerraform(struct?: HypervisorAzureActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeToHclTerraform, true)(struct!.delaytime),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureActivitycontrolBackupactivitycontroloptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureActivitycontrolBackupactivitycontroloptions | cdktf.IResolvable | undefined) {
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
  private _delaytime = new HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytimeList(this, "delaytime", false);
  public get delaytime() {
    return this._delaytime;
  }
  public putDelaytime(value: HypervisorAzureActivitycontrolBackupactivitycontroloptionsDelaytime[] | cdktf.IResolvable) {
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

export class HypervisorAzureActivitycontrolBackupactivitycontroloptionsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureActivitycontrolBackupactivitycontroloptionsOutputReference {
    return new HypervisorAzureActivitycontrolBackupactivitycontroloptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToTerraform(struct?: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToHclTerraform(struct?: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable): any {
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

export class HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference {
    return new HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime {
  /**
  * delay time in unix timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#time HypervisorAzure#time}
  */
  readonly time?: number;
  /**
  * actual delay time value in string format according to the timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#value HypervisorAzure#value}
  */
  readonly value?: string;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#timezone HypervisorAzure#timezone}
  */
  readonly timezone?: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable;
}

export function hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeToTerraform(struct?: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time: cdktf.numberToTerraform(struct!.time),
    value: cdktf.stringToTerraform(struct!.value),
    timezone: cdktf.listMapper(hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeToHclTerraform(struct?: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime | cdktf.IResolvable | undefined) {
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
  private _timezone = new HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeTimezone[] | cdktf.IResolvable) {
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

export class HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference {
    return new HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureActivitycontrolRestoreactivitycontroloptions {
  /**
  * denotes the activity type being considered [BACKUP, RESTORE, ONLINECI, ARCHIVEPRUNE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#activitytype HypervisorAzure#activitytype}
  */
  readonly activitytype?: string;
  /**
  * True if the activity type is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#enableactivitytype HypervisorAzure#enableactivitytype}
  */
  readonly enableactivitytype?: string;
  /**
  * True if the activity will be enabled after a delay time interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#enableafteradelay HypervisorAzure#enableafteradelay}
  */
  readonly enableafteradelay?: string;
  /**
  * delaytime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#delaytime HypervisorAzure#delaytime}
  */
  readonly delaytime?: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable;
}

export function hypervisorAzureActivitycontrolRestoreactivitycontroloptionsToTerraform(struct?: HypervisorAzureActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activitytype: cdktf.stringToTerraform(struct!.activitytype),
    enableactivitytype: cdktf.stringToTerraform(struct!.enableactivitytype),
    enableafteradelay: cdktf.stringToTerraform(struct!.enableafteradelay),
    delaytime: cdktf.listMapper(hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeToTerraform, true)(struct!.delaytime),
  }
}


export function hypervisorAzureActivitycontrolRestoreactivitycontroloptionsToHclTerraform(struct?: HypervisorAzureActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeToHclTerraform, true)(struct!.delaytime),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureActivitycontrolRestoreactivitycontroloptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureActivitycontrolRestoreactivitycontroloptions | cdktf.IResolvable | undefined) {
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
  private _delaytime = new HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytimeList(this, "delaytime", false);
  public get delaytime() {
    return this._delaytime;
  }
  public putDelaytime(value: HypervisorAzureActivitycontrolRestoreactivitycontroloptionsDelaytime[] | cdktf.IResolvable) {
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

export class HypervisorAzureActivitycontrolRestoreactivitycontroloptionsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureActivitycontrolRestoreactivitycontroloptionsOutputReference {
    return new HypervisorAzureActivitycontrolRestoreactivitycontroloptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureActivitycontrol {
  /**
  * true if Backup is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#enablebackup HypervisorAzure#enablebackup}
  */
  readonly enablebackup?: string;
  /**
  * true if Restore is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#enablerestore HypervisorAzure#enablerestore}
  */
  readonly enablerestore?: string;
  /**
  * backupactivitycontroloptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#backupactivitycontroloptions HypervisorAzure#backupactivitycontroloptions}
  */
  readonly backupactivitycontroloptions?: HypervisorAzureActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable;
  /**
  * restoreactivitycontroloptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#restoreactivitycontroloptions HypervisorAzure#restoreactivitycontroloptions}
  */
  readonly restoreactivitycontroloptions?: HypervisorAzureActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable;
}

export function hypervisorAzureActivitycontrolToTerraform(struct?: HypervisorAzureActivitycontrol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enablebackup: cdktf.stringToTerraform(struct!.enablebackup),
    enablerestore: cdktf.stringToTerraform(struct!.enablerestore),
    backupactivitycontroloptions: cdktf.listMapper(hypervisorAzureActivitycontrolBackupactivitycontroloptionsToTerraform, true)(struct!.backupactivitycontroloptions),
    restoreactivitycontroloptions: cdktf.listMapper(hypervisorAzureActivitycontrolRestoreactivitycontroloptionsToTerraform, true)(struct!.restoreactivitycontroloptions),
  }
}


export function hypervisorAzureActivitycontrolToHclTerraform(struct?: HypervisorAzureActivitycontrol | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAzureActivitycontrolBackupactivitycontroloptionsToHclTerraform, true)(struct!.backupactivitycontroloptions),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureActivitycontrolBackupactivitycontroloptionsList",
    },
    restoreactivitycontroloptions: {
      value: cdktf.listMapperHcl(hypervisorAzureActivitycontrolRestoreactivitycontroloptionsToHclTerraform, true)(struct!.restoreactivitycontroloptions),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureActivitycontrolRestoreactivitycontroloptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureActivitycontrolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureActivitycontrol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureActivitycontrol | cdktf.IResolvable | undefined) {
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
  private _backupactivitycontroloptions = new HypervisorAzureActivitycontrolBackupactivitycontroloptionsList(this, "backupactivitycontroloptions", false);
  public get backupactivitycontroloptions() {
    return this._backupactivitycontroloptions;
  }
  public putBackupactivitycontroloptions(value: HypervisorAzureActivitycontrolBackupactivitycontroloptions[] | cdktf.IResolvable) {
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
  private _restoreactivitycontroloptions = new HypervisorAzureActivitycontrolRestoreactivitycontroloptionsList(this, "restoreactivitycontroloptions", false);
  public get restoreactivitycontroloptions() {
    return this._restoreactivitycontroloptions;
  }
  public putRestoreactivitycontroloptions(value: HypervisorAzureActivitycontrolRestoreactivitycontroloptions[] | cdktf.IResolvable) {
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

export class HypervisorAzureActivitycontrolList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureActivitycontrol[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureActivitycontrolOutputReference {
    return new HypervisorAzureActivitycontrolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureCredentialsToTerraform(struct?: HypervisorAzureCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureCredentialsToHclTerraform(struct?: HypervisorAzureCredentials | cdktf.IResolvable): any {
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

export class HypervisorAzureCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureCredentials | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureCredentialsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureCredentials[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureCredentialsOutputReference {
    return new HypervisorAzureCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureEtcdprotectionPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureEtcdprotectionPlanToTerraform(struct?: HypervisorAzureEtcdprotectionPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureEtcdprotectionPlanToHclTerraform(struct?: HypervisorAzureEtcdprotectionPlan | cdktf.IResolvable): any {
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

export class HypervisorAzureEtcdprotectionPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureEtcdprotectionPlan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureEtcdprotectionPlan | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureEtcdprotectionPlanList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureEtcdprotectionPlan[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureEtcdprotectionPlanOutputReference {
    return new HypervisorAzureEtcdprotectionPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureEtcdprotection {
  /**
  * Denote if etcd protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#enabled HypervisorAzure#enabled}
  */
  readonly enabled?: string;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#plan HypervisorAzure#plan}
  */
  readonly plan?: HypervisorAzureEtcdprotectionPlan[] | cdktf.IResolvable;
}

export function hypervisorAzureEtcdprotectionToTerraform(struct?: HypervisorAzureEtcdprotection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    plan: cdktf.listMapper(hypervisorAzureEtcdprotectionPlanToTerraform, true)(struct!.plan),
  }
}


export function hypervisorAzureEtcdprotectionToHclTerraform(struct?: HypervisorAzureEtcdprotection | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAzureEtcdprotectionPlanToHclTerraform, true)(struct!.plan),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureEtcdprotectionPlanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureEtcdprotectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureEtcdprotection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureEtcdprotection | cdktf.IResolvable | undefined) {
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
  private _plan = new HypervisorAzureEtcdprotectionPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: HypervisorAzureEtcdprotectionPlan[] | cdktf.IResolvable) {
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

export class HypervisorAzureEtcdprotectionList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureEtcdprotection[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureEtcdprotectionOutputReference {
    return new HypervisorAzureEtcdprotectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureFbrunixmediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureFbrunixmediaagentToTerraform(struct?: HypervisorAzureFbrunixmediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureFbrunixmediaagentToHclTerraform(struct?: HypervisorAzureFbrunixmediaagent | cdktf.IResolvable): any {
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

export class HypervisorAzureFbrunixmediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureFbrunixmediaagent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureFbrunixmediaagent | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureFbrunixmediaagentList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureFbrunixmediaagent[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureFbrunixmediaagentOutputReference {
    return new HypervisorAzureFbrunixmediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSecurityAssociatedusergroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function hypervisorAzureSecurityAssociatedusergroupsToTerraform(struct?: HypervisorAzureSecurityAssociatedusergroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function hypervisorAzureSecurityAssociatedusergroupsToHclTerraform(struct?: HypervisorAzureSecurityAssociatedusergroups | cdktf.IResolvable): any {
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

export class HypervisorAzureSecurityAssociatedusergroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSecurityAssociatedusergroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSecurityAssociatedusergroups | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSecurityAssociatedusergroupsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSecurityAssociatedusergroups[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSecurityAssociatedusergroupsOutputReference {
    return new HypervisorAzureSecurityAssociatedusergroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSecurity {
  /**
  * Client owners for the Hypervisor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#clientowners HypervisorAzure#clientowners}
  */
  readonly clientowners?: string;
  /**
  * associatedusergroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#associatedusergroups HypervisorAzure#associatedusergroups}
  */
  readonly associatedusergroups?: HypervisorAzureSecurityAssociatedusergroups[] | cdktf.IResolvable;
}

export function hypervisorAzureSecurityToTerraform(struct?: HypervisorAzureSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clientowners: cdktf.stringToTerraform(struct!.clientowners),
    associatedusergroups: cdktf.listMapper(hypervisorAzureSecurityAssociatedusergroupsToTerraform, true)(struct!.associatedusergroups),
  }
}


export function hypervisorAzureSecurityToHclTerraform(struct?: HypervisorAzureSecurity | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(hypervisorAzureSecurityAssociatedusergroupsToHclTerraform, true)(struct!.associatedusergroups),
      isBlock: true,
      type: "set",
      storageClassType: "HypervisorAzureSecurityAssociatedusergroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSecurity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSecurity | cdktf.IResolvable | undefined) {
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
  private _associatedusergroups = new HypervisorAzureSecurityAssociatedusergroupsList(this, "associatedusergroups", true);
  public get associatedusergroups() {
    return this._associatedusergroups;
  }
  public putAssociatedusergroups(value: HypervisorAzureSecurityAssociatedusergroups[] | cdktf.IResolvable) {
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

export class HypervisorAzureSecurityList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSecurity[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSecurityOutputReference {
    return new HypervisorAzureSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettingsApplicationcredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#password HypervisorAzure#password}
  */
  readonly password?: string;
}

export function hypervisorAzureSettingsApplicationcredentialsToTerraform(struct?: HypervisorAzureSettingsApplicationcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function hypervisorAzureSettingsApplicationcredentialsToHclTerraform(struct?: HypervisorAzureSettingsApplicationcredentials | cdktf.IResolvable): any {
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

export class HypervisorAzureSettingsApplicationcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettingsApplicationcredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettingsApplicationcredentials | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSettingsApplicationcredentialsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettingsApplicationcredentials[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsApplicationcredentialsOutputReference {
    return new HypervisorAzureSettingsApplicationcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettingsCustomattributes {
  /**
  * client custom attribute type . Ex- 3 - For client 8- For clientGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#type HypervisorAzure#type}
  */
  readonly type?: number;
  /**
  * client/Client Group custom attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#value HypervisorAzure#value}
  */
  readonly value?: string;
}

export function hypervisorAzureSettingsCustomattributesToTerraform(struct?: HypervisorAzureSettingsCustomattributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.numberToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hypervisorAzureSettingsCustomattributesToHclTerraform(struct?: HypervisorAzureSettingsCustomattributes | cdktf.IResolvable): any {
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

export class HypervisorAzureSettingsCustomattributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettingsCustomattributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettingsCustomattributes | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSettingsCustomattributesList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettingsCustomattributes[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsCustomattributesOutputReference {
    return new HypervisorAzureSettingsCustomattributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettingsGuestcredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#password HypervisorAzure#password}
  */
  readonly password?: string;
}

export function hypervisorAzureSettingsGuestcredentialsToTerraform(struct?: HypervisorAzureSettingsGuestcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function hypervisorAzureSettingsGuestcredentialsToHclTerraform(struct?: HypervisorAzureSettingsGuestcredentials | cdktf.IResolvable): any {
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

export class HypervisorAzureSettingsGuestcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettingsGuestcredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettingsGuestcredentials | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSettingsGuestcredentialsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettingsGuestcredentials[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsGuestcredentialsOutputReference {
    return new HypervisorAzureSettingsGuestcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettingsMetricsmonitoringpolicy {
  /**
  * Metrics Moitoring PolicyId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * True if Metrics Monioring policy is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#isenabled HypervisorAzure#isenabled}
  */
  readonly isenabled?: string;
  /**
  * Metrics Moitoring Policy Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureSettingsMetricsmonitoringpolicyToTerraform(struct?: HypervisorAzureSettingsMetricsmonitoringpolicy | cdktf.IResolvable): any {
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


export function hypervisorAzureSettingsMetricsmonitoringpolicyToHclTerraform(struct?: HypervisorAzureSettingsMetricsmonitoringpolicy | cdktf.IResolvable): any {
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

export class HypervisorAzureSettingsMetricsmonitoringpolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettingsMetricsmonitoringpolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettingsMetricsmonitoringpolicy | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSettingsMetricsmonitoringpolicyList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettingsMetricsmonitoringpolicy[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsMetricsmonitoringpolicyOutputReference {
    return new HypervisorAzureSettingsMetricsmonitoringpolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettingsMountaccessnode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureSettingsMountaccessnodeToTerraform(struct?: HypervisorAzureSettingsMountaccessnode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureSettingsMountaccessnodeToHclTerraform(struct?: HypervisorAzureSettingsMountaccessnode | cdktf.IResolvable): any {
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

export class HypervisorAzureSettingsMountaccessnodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettingsMountaccessnode | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettingsMountaccessnode | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSettingsMountaccessnodeList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettingsMountaccessnode[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsMountaccessnodeOutputReference {
    return new HypervisorAzureSettingsMountaccessnodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettingsRegioninfo {
  /**
  * Display Name of Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#displayname HypervisorAzure#displayname}
  */
  readonly displayname?: string;
  /**
  * Region Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Geolocation Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#latitude HypervisorAzure#latitude}
  */
  readonly latitude?: string;
  /**
  * Geolocation Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#longitude HypervisorAzure#longitude}
  */
  readonly longitude?: string;
  /**
  * Region Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureSettingsRegioninfoToTerraform(struct?: HypervisorAzureSettingsRegioninfo | cdktf.IResolvable): any {
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


export function hypervisorAzureSettingsRegioninfoToHclTerraform(struct?: HypervisorAzureSettingsRegioninfo | cdktf.IResolvable): any {
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

export class HypervisorAzureSettingsRegioninfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettingsRegioninfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettingsRegioninfo | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSettingsRegioninfoList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettingsRegioninfo[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsRegioninfoOutputReference {
    return new HypervisorAzureSettingsRegioninfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettingsTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureSettingsTimezoneToTerraform(struct?: HypervisorAzureSettingsTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureSettingsTimezoneToHclTerraform(struct?: HypervisorAzureSettingsTimezone | cdktf.IResolvable): any {
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

export class HypervisorAzureSettingsTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettingsTimezone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettingsTimezone | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureSettingsTimezoneList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettingsTimezone[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsTimezoneOutputReference {
    return new HypervisorAzureSettingsTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureSettings {
  /**
  * applicationcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#applicationcredentials HypervisorAzure#applicationcredentials}
  */
  readonly applicationcredentials?: HypervisorAzureSettingsApplicationcredentials[] | cdktf.IResolvable;
  /**
  * customattributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#customattributes HypervisorAzure#customattributes}
  */
  readonly customattributes?: HypervisorAzureSettingsCustomattributes[] | cdktf.IResolvable;
  /**
  * guestcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#guestcredentials HypervisorAzure#guestcredentials}
  */
  readonly guestcredentials?: HypervisorAzureSettingsGuestcredentials[] | cdktf.IResolvable;
  /**
  * metricsmonitoringpolicy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#metricsmonitoringpolicy HypervisorAzure#metricsmonitoringpolicy}
  */
  readonly metricsmonitoringpolicy?: HypervisorAzureSettingsMetricsmonitoringpolicy[] | cdktf.IResolvable;
  /**
  * mountaccessnode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#mountaccessnode HypervisorAzure#mountaccessnode}
  */
  readonly mountaccessnode?: HypervisorAzureSettingsMountaccessnode[] | cdktf.IResolvable;
  /**
  * regioninfo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#regioninfo HypervisorAzure#regioninfo}
  */
  readonly regioninfo?: HypervisorAzureSettingsRegioninfo[] | cdktf.IResolvable;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#timezone HypervisorAzure#timezone}
  */
  readonly timezone?: HypervisorAzureSettingsTimezone[] | cdktf.IResolvable;
}

export function hypervisorAzureSettingsToTerraform(struct?: HypervisorAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applicationcredentials: cdktf.listMapper(hypervisorAzureSettingsApplicationcredentialsToTerraform, true)(struct!.applicationcredentials),
    customattributes: cdktf.listMapper(hypervisorAzureSettingsCustomattributesToTerraform, true)(struct!.customattributes),
    guestcredentials: cdktf.listMapper(hypervisorAzureSettingsGuestcredentialsToTerraform, true)(struct!.guestcredentials),
    metricsmonitoringpolicy: cdktf.listMapper(hypervisorAzureSettingsMetricsmonitoringpolicyToTerraform, true)(struct!.metricsmonitoringpolicy),
    mountaccessnode: cdktf.listMapper(hypervisorAzureSettingsMountaccessnodeToTerraform, true)(struct!.mountaccessnode),
    regioninfo: cdktf.listMapper(hypervisorAzureSettingsRegioninfoToTerraform, true)(struct!.regioninfo),
    timezone: cdktf.listMapper(hypervisorAzureSettingsTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function hypervisorAzureSettingsToHclTerraform(struct?: HypervisorAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applicationcredentials: {
      value: cdktf.listMapperHcl(hypervisorAzureSettingsApplicationcredentialsToHclTerraform, true)(struct!.applicationcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureSettingsApplicationcredentialsList",
    },
    customattributes: {
      value: cdktf.listMapperHcl(hypervisorAzureSettingsCustomattributesToHclTerraform, true)(struct!.customattributes),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureSettingsCustomattributesList",
    },
    guestcredentials: {
      value: cdktf.listMapperHcl(hypervisorAzureSettingsGuestcredentialsToHclTerraform, true)(struct!.guestcredentials),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureSettingsGuestcredentialsList",
    },
    metricsmonitoringpolicy: {
      value: cdktf.listMapperHcl(hypervisorAzureSettingsMetricsmonitoringpolicyToHclTerraform, true)(struct!.metricsmonitoringpolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureSettingsMetricsmonitoringpolicyList",
    },
    mountaccessnode: {
      value: cdktf.listMapperHcl(hypervisorAzureSettingsMountaccessnodeToHclTerraform, true)(struct!.mountaccessnode),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureSettingsMountaccessnodeList",
    },
    regioninfo: {
      value: cdktf.listMapperHcl(hypervisorAzureSettingsRegioninfoToHclTerraform, true)(struct!.regioninfo),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureSettingsRegioninfoList",
    },
    timezone: {
      value: cdktf.listMapperHcl(hypervisorAzureSettingsTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "HypervisorAzureSettingsTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HypervisorAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureSettings | cdktf.IResolvable | undefined) {
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
  private _applicationcredentials = new HypervisorAzureSettingsApplicationcredentialsList(this, "applicationcredentials", false);
  public get applicationcredentials() {
    return this._applicationcredentials;
  }
  public putApplicationcredentials(value: HypervisorAzureSettingsApplicationcredentials[] | cdktf.IResolvable) {
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
  private _customattributes = new HypervisorAzureSettingsCustomattributesList(this, "customattributes", false);
  public get customattributes() {
    return this._customattributes;
  }
  public putCustomattributes(value: HypervisorAzureSettingsCustomattributes[] | cdktf.IResolvable) {
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
  private _guestcredentials = new HypervisorAzureSettingsGuestcredentialsList(this, "guestcredentials", false);
  public get guestcredentials() {
    return this._guestcredentials;
  }
  public putGuestcredentials(value: HypervisorAzureSettingsGuestcredentials[] | cdktf.IResolvable) {
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
  private _metricsmonitoringpolicy = new HypervisorAzureSettingsMetricsmonitoringpolicyList(this, "metricsmonitoringpolicy", false);
  public get metricsmonitoringpolicy() {
    return this._metricsmonitoringpolicy;
  }
  public putMetricsmonitoringpolicy(value: HypervisorAzureSettingsMetricsmonitoringpolicy[] | cdktf.IResolvable) {
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
  private _mountaccessnode = new HypervisorAzureSettingsMountaccessnodeList(this, "mountaccessnode", false);
  public get mountaccessnode() {
    return this._mountaccessnode;
  }
  public putMountaccessnode(value: HypervisorAzureSettingsMountaccessnode[] | cdktf.IResolvable) {
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
  private _regioninfo = new HypervisorAzureSettingsRegioninfoList(this, "regioninfo", false);
  public get regioninfo() {
    return this._regioninfo;
  }
  public putRegioninfo(value: HypervisorAzureSettingsRegioninfo[] | cdktf.IResolvable) {
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
  private _timezone = new HypervisorAzureSettingsTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: HypervisorAzureSettingsTimezone[] | cdktf.IResolvable) {
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

export class HypervisorAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureSettingsOutputReference {
    return new HypervisorAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HypervisorAzureWorkloadregion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#id HypervisorAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#name HypervisorAzure#name}
  */
  readonly name?: string;
}

export function hypervisorAzureWorkloadregionToTerraform(struct?: HypervisorAzureWorkloadregion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function hypervisorAzureWorkloadregionToHclTerraform(struct?: HypervisorAzureWorkloadregion | cdktf.IResolvable): any {
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

export class HypervisorAzureWorkloadregionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HypervisorAzureWorkloadregion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HypervisorAzureWorkloadregion | cdktf.IResolvable | undefined) {
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

export class HypervisorAzureWorkloadregionList extends cdktf.ComplexList {
  public internalValue? : HypervisorAzureWorkloadregion[] | cdktf.IResolvable

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
  public get(index: number): HypervisorAzureWorkloadregionOutputReference {
    return new HypervisorAzureWorkloadregionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure commvault_hypervisor_azure}
*/
export class HypervisorAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_hypervisor_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HypervisorAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HypervisorAzure to import
  * @param importFromId The id of the existing HypervisorAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HypervisorAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_hypervisor_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/hypervisor_azure commvault_hypervisor_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HypervisorAzureConfig
  */
  public constructor(scope: Construct, id: string, config: HypervisorAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_hypervisor_azure',
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
    this._applicationid = config.applicationid;
    this._applicationpassword = config.applicationpassword;
    this._displayname = config.displayname;
    this._hypervisortype = config.hypervisortype;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._servername = config.servername;
    this._skipcredentialvalidation = config.skipcredentialvalidation;
    this._subscriptionid = config.subscriptionid;
    this._tenantid = config.tenantid;
    this._usemanagedidentity = config.usemanagedidentity;
    this._username = config.username;
    this._accessnodes.internalValue = config.accessnodes;
    this._activitycontrol.internalValue = config.activitycontrol;
    this._credentials.internalValue = config.credentials;
    this._etcdprotection.internalValue = config.etcdprotection;
    this._fbrunixmediaagent.internalValue = config.fbrunixmediaagent;
    this._security.internalValue = config.security;
    this._settings.internalValue = config.settings;
    this._workloadregion.internalValue = config.workloadregion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applicationid - computed: true, optional: true, required: false
  private _applicationid?: string; 
  public get applicationid() {
    return this.getStringAttribute('applicationid');
  }
  public set applicationid(value: string) {
    this._applicationid = value;
  }
  public resetApplicationid() {
    this._applicationid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationidInput() {
    return this._applicationid;
  }

  // applicationpassword - computed: true, optional: true, required: false
  private _applicationpassword?: string; 
  public get applicationpassword() {
    return this.getStringAttribute('applicationpassword');
  }
  public set applicationpassword(value: string) {
    this._applicationpassword = value;
  }
  public resetApplicationpassword() {
    this._applicationpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationpasswordInput() {
    return this._applicationpassword;
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

  // servername - computed: true, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
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

  // subscriptionid - computed: false, optional: false, required: true
  private _subscriptionid?: string; 
  public get subscriptionid() {
    return this.getStringAttribute('subscriptionid');
  }
  public set subscriptionid(value: string) {
    this._subscriptionid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionidInput() {
    return this._subscriptionid;
  }

  // tenantid - computed: false, optional: false, required: true
  private _tenantid?: string; 
  public get tenantid() {
    return this.getStringAttribute('tenantid');
  }
  public set tenantid(value: string) {
    this._tenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // usemanagedidentity - computed: true, optional: true, required: false
  private _usemanagedidentity?: string; 
  public get usemanagedidentity() {
    return this.getStringAttribute('usemanagedidentity');
  }
  public set usemanagedidentity(value: string) {
    this._usemanagedidentity = value;
  }
  public resetUsemanagedidentity() {
    this._usemanagedidentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usemanagedidentityInput() {
    return this._usemanagedidentity;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // accessnodes - computed: false, optional: true, required: false
  private _accessnodes = new HypervisorAzureAccessnodesList(this, "accessnodes", true);
  public get accessnodes() {
    return this._accessnodes;
  }
  public putAccessnodes(value: HypervisorAzureAccessnodes[] | cdktf.IResolvable) {
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
  private _activitycontrol = new HypervisorAzureActivitycontrolList(this, "activitycontrol", false);
  public get activitycontrol() {
    return this._activitycontrol;
  }
  public putActivitycontrol(value: HypervisorAzureActivitycontrol[] | cdktf.IResolvable) {
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
  private _credentials = new HypervisorAzureCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: HypervisorAzureCredentials[] | cdktf.IResolvable) {
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
  private _etcdprotection = new HypervisorAzureEtcdprotectionList(this, "etcdprotection", false);
  public get etcdprotection() {
    return this._etcdprotection;
  }
  public putEtcdprotection(value: HypervisorAzureEtcdprotection[] | cdktf.IResolvable) {
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
  private _fbrunixmediaagent = new HypervisorAzureFbrunixmediaagentList(this, "fbrunixmediaagent", false);
  public get fbrunixmediaagent() {
    return this._fbrunixmediaagent;
  }
  public putFbrunixmediaagent(value: HypervisorAzureFbrunixmediaagent[] | cdktf.IResolvable) {
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
  private _security = new HypervisorAzureSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: HypervisorAzureSecurity[] | cdktf.IResolvable) {
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
  private _settings = new HypervisorAzureSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: HypervisorAzureSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // workloadregion - computed: false, optional: true, required: false
  private _workloadregion = new HypervisorAzureWorkloadregionList(this, "workloadregion", false);
  public get workloadregion() {
    return this._workloadregion;
  }
  public putWorkloadregion(value: HypervisorAzureWorkloadregion[] | cdktf.IResolvable) {
    this._workloadregion.internalValue = value;
  }
  public resetWorkloadregion() {
    this._workloadregion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadregionInput() {
    return this._workloadregion.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applicationid: cdktf.stringToTerraform(this._applicationid),
      applicationpassword: cdktf.stringToTerraform(this._applicationpassword),
      displayname: cdktf.stringToTerraform(this._displayname),
      hypervisortype: cdktf.stringToTerraform(this._hypervisortype),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      servername: cdktf.stringToTerraform(this._servername),
      skipcredentialvalidation: cdktf.stringToTerraform(this._skipcredentialvalidation),
      subscriptionid: cdktf.stringToTerraform(this._subscriptionid),
      tenantid: cdktf.stringToTerraform(this._tenantid),
      usemanagedidentity: cdktf.stringToTerraform(this._usemanagedidentity),
      username: cdktf.stringToTerraform(this._username),
      accessnodes: cdktf.listMapper(hypervisorAzureAccessnodesToTerraform, true)(this._accessnodes.internalValue),
      activitycontrol: cdktf.listMapper(hypervisorAzureActivitycontrolToTerraform, true)(this._activitycontrol.internalValue),
      credentials: cdktf.listMapper(hypervisorAzureCredentialsToTerraform, true)(this._credentials.internalValue),
      etcdprotection: cdktf.listMapper(hypervisorAzureEtcdprotectionToTerraform, true)(this._etcdprotection.internalValue),
      fbrunixmediaagent: cdktf.listMapper(hypervisorAzureFbrunixmediaagentToTerraform, true)(this._fbrunixmediaagent.internalValue),
      security: cdktf.listMapper(hypervisorAzureSecurityToTerraform, true)(this._security.internalValue),
      settings: cdktf.listMapper(hypervisorAzureSettingsToTerraform, true)(this._settings.internalValue),
      workloadregion: cdktf.listMapper(hypervisorAzureWorkloadregionToTerraform, true)(this._workloadregion.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applicationid: {
        value: cdktf.stringToHclTerraform(this._applicationid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applicationpassword: {
        value: cdktf.stringToHclTerraform(this._applicationpassword),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
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
      subscriptionid: {
        value: cdktf.stringToHclTerraform(this._subscriptionid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenantid: {
        value: cdktf.stringToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usemanagedidentity: {
        value: cdktf.stringToHclTerraform(this._usemanagedidentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessnodes: {
        value: cdktf.listMapperHcl(hypervisorAzureAccessnodesToHclTerraform, true)(this._accessnodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HypervisorAzureAccessnodesList",
      },
      activitycontrol: {
        value: cdktf.listMapperHcl(hypervisorAzureActivitycontrolToHclTerraform, true)(this._activitycontrol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAzureActivitycontrolList",
      },
      credentials: {
        value: cdktf.listMapperHcl(hypervisorAzureCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAzureCredentialsList",
      },
      etcdprotection: {
        value: cdktf.listMapperHcl(hypervisorAzureEtcdprotectionToHclTerraform, true)(this._etcdprotection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAzureEtcdprotectionList",
      },
      fbrunixmediaagent: {
        value: cdktf.listMapperHcl(hypervisorAzureFbrunixmediaagentToHclTerraform, true)(this._fbrunixmediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAzureFbrunixmediaagentList",
      },
      security: {
        value: cdktf.listMapperHcl(hypervisorAzureSecurityToHclTerraform, true)(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAzureSecurityList",
      },
      settings: {
        value: cdktf.listMapperHcl(hypervisorAzureSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAzureSettingsList",
      },
      workloadregion: {
        value: cdktf.listMapperHcl(hypervisorAzureWorkloadregionToHclTerraform, true)(this._workloadregion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HypervisorAzureWorkloadregionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
