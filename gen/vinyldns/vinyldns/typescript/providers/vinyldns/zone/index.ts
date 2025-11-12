// https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#admin_group_id Zone#admin_group_id}
  */
  readonly adminGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#email Zone#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#id Zone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * acl_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#acl_rule Zone#acl_rule}
  */
  readonly aclRule?: ZoneAclRule[] | cdktf.IResolvable;
  /**
  * transfer_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#transfer_connection Zone#transfer_connection}
  */
  readonly transferConnection?: ZoneTransferConnection[] | cdktf.IResolvable;
  /**
  * zone_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#zone_connection Zone#zone_connection}
  */
  readonly zoneConnection?: ZoneZoneConnection[] | cdktf.IResolvable;
}
export interface ZoneAclRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#access_level Zone#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#description Zone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#group_id Zone#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#record_mask Zone#record_mask}
  */
  readonly recordMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#record_types Zone#record_types}
  */
  readonly recordTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#user_id Zone#user_id}
  */
  readonly userId?: string;
}

export function zoneAclRuleToTerraform(struct?: ZoneAclRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    description: cdktf.stringToTerraform(struct!.description),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    record_mask: cdktf.stringToTerraform(struct!.recordMask),
    record_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recordTypes),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function zoneAclRuleToHclTerraform(struct?: ZoneAclRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
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
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_mask: {
      value: cdktf.stringToHclTerraform(struct!.recordMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recordTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneAclRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneAclRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._recordMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordMask = this._recordMask;
    }
    if (this._recordTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTypes = this._recordTypes;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneAclRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._description = undefined;
      this._groupId = undefined;
      this._recordMask = undefined;
      this._recordTypes = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._description = value.description;
      this._groupId = value.groupId;
      this._recordMask = value.recordMask;
      this._recordTypes = value.recordTypes;
      this._userId = value.userId;
    }
  }

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // record_mask - computed: false, optional: true, required: false
  private _recordMask?: string; 
  public get recordMask() {
    return this.getStringAttribute('record_mask');
  }
  public set recordMask(value: string) {
    this._recordMask = value;
  }
  public resetRecordMask() {
    this._recordMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMaskInput() {
    return this._recordMask;
  }

  // record_types - computed: false, optional: true, required: false
  private _recordTypes?: string[]; 
  public get recordTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('record_types'));
  }
  public set recordTypes(value: string[]) {
    this._recordTypes = value;
  }
  public resetRecordTypes() {
    this._recordTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypesInput() {
    return this._recordTypes;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class ZoneAclRuleList extends cdktf.ComplexList {
  public internalValue? : ZoneAclRule[] | cdktf.IResolvable

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
  public get(index: number): ZoneAclRuleOutputReference {
    return new ZoneAclRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneTransferConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#key Zone#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#key_name Zone#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#primary_server Zone#primary_server}
  */
  readonly primaryServer: string;
}

export function zoneTransferConnectionToTerraform(struct?: ZoneTransferConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    name: cdktf.stringToTerraform(struct!.name),
    primary_server: cdktf.stringToTerraform(struct!.primaryServer),
  }
}


export function zoneTransferConnectionToHclTerraform(struct?: ZoneTransferConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
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
    primary_server: {
      value: cdktf.stringToHclTerraform(struct!.primaryServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneTransferConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneTransferConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryServer = this._primaryServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneTransferConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._keyName = undefined;
      this._name = undefined;
      this._primaryServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._keyName = value.keyName;
      this._name = value.name;
      this._primaryServer = value.primaryServer;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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

  // primary_server - computed: false, optional: false, required: true
  private _primaryServer?: string; 
  public get primaryServer() {
    return this.getStringAttribute('primary_server');
  }
  public set primaryServer(value: string) {
    this._primaryServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerInput() {
    return this._primaryServer;
  }
}

export class ZoneTransferConnectionList extends cdktf.ComplexList {
  public internalValue? : ZoneTransferConnection[] | cdktf.IResolvable

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
  public get(index: number): ZoneTransferConnectionOutputReference {
    return new ZoneTransferConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneZoneConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#key Zone#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#key_name Zone#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#primary_server Zone#primary_server}
  */
  readonly primaryServer: string;
}

export function zoneZoneConnectionToTerraform(struct?: ZoneZoneConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    name: cdktf.stringToTerraform(struct!.name),
    primary_server: cdktf.stringToTerraform(struct!.primaryServer),
  }
}


export function zoneZoneConnectionToHclTerraform(struct?: ZoneZoneConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
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
    primary_server: {
      value: cdktf.stringToHclTerraform(struct!.primaryServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneZoneConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneZoneConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryServer = this._primaryServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneZoneConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._keyName = undefined;
      this._name = undefined;
      this._primaryServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._keyName = value.keyName;
      this._name = value.name;
      this._primaryServer = value.primaryServer;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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

  // primary_server - computed: false, optional: false, required: true
  private _primaryServer?: string; 
  public get primaryServer() {
    return this.getStringAttribute('primary_server');
  }
  public set primaryServer(value: string) {
    this._primaryServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerInput() {
    return this._primaryServer;
  }
}

export class ZoneZoneConnectionList extends cdktf.ComplexList {
  public internalValue? : ZoneZoneConnection[] | cdktf.IResolvable

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
  public get(index: number): ZoneZoneConnectionOutputReference {
    return new ZoneZoneConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone vinyldns_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vinyldns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vinyldns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vinyldns/vinyldns/0.10.3/docs/resources/zone vinyldns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'vinyldns_zone',
      terraformGeneratorMetadata: {
        providerName: 'vinyldns',
        providerVersion: '0.10.3',
        providerVersionConstraint: '0.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminGroupId = config.adminGroupId;
    this._email = config.email;
    this._id = config.id;
    this._name = config.name;
    this._aclRule.internalValue = config.aclRule;
    this._transferConnection.internalValue = config.transferConnection;
    this._zoneConnection.internalValue = config.zoneConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_group_id - computed: false, optional: false, required: true
  private _adminGroupId?: string; 
  public get adminGroupId() {
    return this.getStringAttribute('admin_group_id');
  }
  public set adminGroupId(value: string) {
    this._adminGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupIdInput() {
    return this._adminGroupId;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // latest_sync - computed: true, optional: false, required: false
  public get latestSync() {
    return this.getStringAttribute('latest_sync');
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

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getBooleanAttribute('shared');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // acl_rule - computed: false, optional: true, required: false
  private _aclRule = new ZoneAclRuleList(this, "acl_rule", true);
  public get aclRule() {
    return this._aclRule;
  }
  public putAclRule(value: ZoneAclRule[] | cdktf.IResolvable) {
    this._aclRule.internalValue = value;
  }
  public resetAclRule() {
    this._aclRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclRuleInput() {
    return this._aclRule.internalValue;
  }

  // transfer_connection - computed: false, optional: true, required: false
  private _transferConnection = new ZoneTransferConnectionList(this, "transfer_connection", false);
  public get transferConnection() {
    return this._transferConnection;
  }
  public putTransferConnection(value: ZoneTransferConnection[] | cdktf.IResolvable) {
    this._transferConnection.internalValue = value;
  }
  public resetTransferConnection() {
    this._transferConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferConnectionInput() {
    return this._transferConnection.internalValue;
  }

  // zone_connection - computed: false, optional: true, required: false
  private _zoneConnection = new ZoneZoneConnectionList(this, "zone_connection", false);
  public get zoneConnection() {
    return this._zoneConnection;
  }
  public putZoneConnection(value: ZoneZoneConnection[] | cdktf.IResolvable) {
    this._zoneConnection.internalValue = value;
  }
  public resetZoneConnection() {
    this._zoneConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneConnectionInput() {
    return this._zoneConnection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_group_id: cdktf.stringToTerraform(this._adminGroupId),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      acl_rule: cdktf.listMapper(zoneAclRuleToTerraform, true)(this._aclRule.internalValue),
      transfer_connection: cdktf.listMapper(zoneTransferConnectionToTerraform, true)(this._transferConnection.internalValue),
      zone_connection: cdktf.listMapper(zoneZoneConnectionToTerraform, true)(this._zoneConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_group_id: {
        value: cdktf.stringToHclTerraform(this._adminGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      acl_rule: {
        value: cdktf.listMapperHcl(zoneAclRuleToHclTerraform, true)(this._aclRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZoneAclRuleList",
      },
      transfer_connection: {
        value: cdktf.listMapperHcl(zoneTransferConnectionToHclTerraform, true)(this._transferConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneTransferConnectionList",
      },
      zone_connection: {
        value: cdktf.listMapperHcl(zoneZoneConnectionToHclTerraform, true)(this._zoneConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneZoneConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
