// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#description DirectoryGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#id DirectoryGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#name DirectoryGroup#name}
  */
  readonly name: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#member DirectoryGroup#member}
  */
  readonly member?: DirectoryGroupMember[] | cdktf.IResolvable;
}
export interface DirectoryGroupMember {
  /**
  * Data store type for member of type DB_ROLE, valid types are: SNOWFLAKE, REDSHIFT, BIGQUERY, POSTGRESQL, ATHENA, MSSQL, SYNAPSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#data_store_type DirectoryGroup#data_store_type}
  */
  readonly dataStoreType?: string;
  /**
  * Member email available for types: USERNAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#email DirectoryGroup#email}
  */
  readonly email?: string;
  /**
  * Directory group ID for member of type DIRECTORY_GROUP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#group_id DirectoryGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * Identity provider type for member of type IDP_GROUP, valid identity providers are: OKTA, AZURE, ONELOGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#identity_provider DirectoryGroup#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * Member name for types: USERNAME, IDP_GROUP and DB_ROLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#name DirectoryGroup#name}
  */
  readonly name?: string;
  /**
  * Member type, valid types are: USERNAME, IDP_GROUP, DB_ROLE, DIRECTORY_GROUP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#type DirectoryGroup#type}
  */
  readonly type: string;
}

export function directoryGroupMemberToTerraform(struct?: DirectoryGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store_type: cdktf.stringToTerraform(struct!.dataStoreType),
    email: cdktf.stringToTerraform(struct!.email),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    identity_provider: cdktf.stringToTerraform(struct!.identityProvider),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function directoryGroupMemberToHclTerraform(struct?: DirectoryGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store_type: {
      value: cdktf.stringToHclTerraform(struct!.dataStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    identity_provider: {
      value: cdktf.stringToHclTerraform(struct!.identityProvider),
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

export class DirectoryGroupMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryGroupMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreType = this._dataStoreType;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._identityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProvider = this._identityProvider;
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

  public set internalValue(value: DirectoryGroupMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStoreType = undefined;
      this._email = undefined;
      this._groupId = undefined;
      this._identityProvider = undefined;
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
      this._dataStoreType = value.dataStoreType;
      this._email = value.email;
      this._groupId = value.groupId;
      this._identityProvider = value.identityProvider;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // data_store_type - computed: false, optional: true, required: false
  private _dataStoreType?: string; 
  public get dataStoreType() {
    return this.getStringAttribute('data_store_type');
  }
  public set dataStoreType(value: string) {
    this._dataStoreType = value;
  }
  public resetDataStoreType() {
    this._dataStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreTypeInput() {
    return this._dataStoreType;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
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

export class DirectoryGroupMemberList extends cdktf.ComplexList {
  public internalValue? : DirectoryGroupMember[] | cdktf.IResolvable

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
  public get(index: number): DirectoryGroupMemberOutputReference {
    return new DirectoryGroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group satori_directory_group}
*/
export class DirectoryGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori_directory_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectoryGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryGroup to import
  * @param importFromId The id of the existing DirectoryGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori_directory_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/directory_group satori_directory_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'satori_directory_group',
      terraformGeneratorMetadata: {
        providerName: 'satori',
        providerVersion: '0.2.8'
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
    this._id = config.id;
    this._name = config.name;
    this._member.internalValue = config.member;
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

  // member - computed: false, optional: true, required: false
  private _member = new DirectoryGroupMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: DirectoryGroupMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      member: cdktf.listMapper(directoryGroupMemberToTerraform, true)(this._member.internalValue),
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
      member: {
        value: cdktf.listMapperHcl(directoryGroupMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DirectoryGroupMemberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
