// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbSourceIpPersistenceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#description LbSourceIpPersistenceProfile#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#display_name LbSourceIpPersistenceProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * A boolean flag which reflects whether persistence entries will be synchronized to the HA peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#ha_persistence_mirroring LbSourceIpPersistenceProfile#ha_persistence_mirroring}
  */
  readonly haPersistenceMirroring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#id LbSourceIpPersistenceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A boolean flag which reflects whether the cookie persistence is private or shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#persistence_shared LbSourceIpPersistenceProfile#persistence_shared}
  */
  readonly persistenceShared?: boolean | cdktf.IResolvable;
  /**
  * A boolean flag which reflects whether entries will be purged when the persistence table is full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#purge_when_full LbSourceIpPersistenceProfile#purge_when_full}
  */
  readonly purgeWhenFull?: boolean | cdktf.IResolvable;
  /**
  * Persistence expiration time in seconds, counted from the time all the connections are completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#timeout LbSourceIpPersistenceProfile#timeout}
  */
  readonly timeout?: number;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#tag LbSourceIpPersistenceProfile#tag}
  */
  readonly tag?: LbSourceIpPersistenceProfileTag[] | cdktf.IResolvable;
}
export interface LbSourceIpPersistenceProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#scope LbSourceIpPersistenceProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#tag LbSourceIpPersistenceProfile#tag}
  */
  readonly tag?: string;
}

export function lbSourceIpPersistenceProfileTagToTerraform(struct?: LbSourceIpPersistenceProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbSourceIpPersistenceProfileTagToHclTerraform(struct?: LbSourceIpPersistenceProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbSourceIpPersistenceProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbSourceIpPersistenceProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbSourceIpPersistenceProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class LbSourceIpPersistenceProfileTagList extends cdktf.ComplexList {
  public internalValue? : LbSourceIpPersistenceProfileTag[] | cdktf.IResolvable

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
  public get(index: number): LbSourceIpPersistenceProfileTagOutputReference {
    return new LbSourceIpPersistenceProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile nsxt_lb_source_ip_persistence_profile}
*/
export class LbSourceIpPersistenceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_source_ip_persistence_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbSourceIpPersistenceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbSourceIpPersistenceProfile to import
  * @param importFromId The id of the existing LbSourceIpPersistenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbSourceIpPersistenceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_source_ip_persistence_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_source_ip_persistence_profile nsxt_lb_source_ip_persistence_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbSourceIpPersistenceProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbSourceIpPersistenceProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_source_ip_persistence_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._displayName = config.displayName;
    this._haPersistenceMirroring = config.haPersistenceMirroring;
    this._id = config.id;
    this._persistenceShared = config.persistenceShared;
    this._purgeWhenFull = config.purgeWhenFull;
    this._timeout = config.timeout;
    this._tag.internalValue = config.tag;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ha_persistence_mirroring - computed: false, optional: true, required: false
  private _haPersistenceMirroring?: boolean | cdktf.IResolvable; 
  public get haPersistenceMirroring() {
    return this.getBooleanAttribute('ha_persistence_mirroring');
  }
  public set haPersistenceMirroring(value: boolean | cdktf.IResolvable) {
    this._haPersistenceMirroring = value;
  }
  public resetHaPersistenceMirroring() {
    this._haPersistenceMirroring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPersistenceMirroringInput() {
    return this._haPersistenceMirroring;
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

  // persistence_shared - computed: false, optional: true, required: false
  private _persistenceShared?: boolean | cdktf.IResolvable; 
  public get persistenceShared() {
    return this.getBooleanAttribute('persistence_shared');
  }
  public set persistenceShared(value: boolean | cdktf.IResolvable) {
    this._persistenceShared = value;
  }
  public resetPersistenceShared() {
    this._persistenceShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceSharedInput() {
    return this._persistenceShared;
  }

  // purge_when_full - computed: false, optional: true, required: false
  private _purgeWhenFull?: boolean | cdktf.IResolvable; 
  public get purgeWhenFull() {
    return this.getBooleanAttribute('purge_when_full');
  }
  public set purgeWhenFull(value: boolean | cdktf.IResolvable) {
    this._purgeWhenFull = value;
  }
  public resetPurgeWhenFull() {
    this._purgeWhenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeWhenFullInput() {
    return this._purgeWhenFull;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbSourceIpPersistenceProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbSourceIpPersistenceProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      ha_persistence_mirroring: cdktf.booleanToTerraform(this._haPersistenceMirroring),
      id: cdktf.stringToTerraform(this._id),
      persistence_shared: cdktf.booleanToTerraform(this._persistenceShared),
      purge_when_full: cdktf.booleanToTerraform(this._purgeWhenFull),
      timeout: cdktf.numberToTerraform(this._timeout),
      tag: cdktf.listMapper(lbSourceIpPersistenceProfileTagToTerraform, true)(this._tag.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_persistence_mirroring: {
        value: cdktf.booleanToHclTerraform(this._haPersistenceMirroring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_shared: {
        value: cdktf.booleanToHclTerraform(this._persistenceShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      purge_when_full: {
        value: cdktf.booleanToHclTerraform(this._purgeWhenFull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag: {
        value: cdktf.listMapperHcl(lbSourceIpPersistenceProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbSourceIpPersistenceProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
