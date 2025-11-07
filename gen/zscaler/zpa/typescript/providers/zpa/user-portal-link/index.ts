// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPortalLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the User Portal Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#description UserPortalLink#description}
  */
  readonly description?: string;
  /**
  * Whether this User Portal Link is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#enabled UserPortalLink#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Icon text for the User Portal Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#icon_text UserPortalLink#icon_text}
  */
  readonly iconText?: string;
  /**
  * Link URL for the User Portal Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#link UserPortalLink#link}
  */
  readonly link?: string;
  /**
  * Link path for the User Portal Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#link_path UserPortalLink#link_path}
  */
  readonly linkPath?: string;
  /**
  * Microtenant ID for the User Portal Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#microtenant_id UserPortalLink#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the User Portal Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#name UserPortalLink#name}
  */
  readonly name: string;
  /**
  * Protocol for the User Portal Link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#protocol UserPortalLink#protocol}
  */
  readonly protocol?: string;
  /**
  * user_portals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#user_portals UserPortalLink#user_portals}
  */
  readonly userPortals?: UserPortalLinkUserPortals[] | cdktf.IResolvable;
}
export interface UserPortalLinkUserPortals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#id UserPortalLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
}

export function userPortalLinkUserPortalsToTerraform(struct?: UserPortalLinkUserPortals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function userPortalLinkUserPortalsToHclTerraform(struct?: UserPortalLinkUserPortals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPortalLinkUserPortalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserPortalLinkUserPortals | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserPortalLinkUserPortals | cdktf.IResolvable | undefined) {
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
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
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

export class UserPortalLinkUserPortalsList extends cdktf.ComplexList {
  public internalValue? : UserPortalLinkUserPortals[] | cdktf.IResolvable

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
  public get(index: number): UserPortalLinkUserPortalsOutputReference {
    return new UserPortalLinkUserPortalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link zpa_user_portal_link}
*/
export class UserPortalLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_user_portal_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPortalLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPortalLink to import
  * @param importFromId The id of the existing UserPortalLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPortalLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_user_portal_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/user_portal_link zpa_user_portal_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPortalLinkConfig
  */
  public constructor(scope: Construct, id: string, config: UserPortalLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_user_portal_link',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2'
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
    this._enabled = config.enabled;
    this._iconText = config.iconText;
    this._link = config.link;
    this._linkPath = config.linkPath;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._userPortals.internalValue = config.userPortals;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // icon_text - computed: false, optional: true, required: false
  private _iconText?: string; 
  public get iconText() {
    return this.getStringAttribute('icon_text');
  }
  public set iconText(value: string) {
    this._iconText = value;
  }
  public resetIconText() {
    this._iconText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconTextInput() {
    return this._iconText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // link_path - computed: false, optional: true, required: false
  private _linkPath?: string; 
  public get linkPath() {
    return this.getStringAttribute('link_path');
  }
  public set linkPath(value: string) {
    this._linkPath = value;
  }
  public resetLinkPath() {
    this._linkPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPathInput() {
    return this._linkPath;
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user_portals - computed: false, optional: true, required: false
  private _userPortals = new UserPortalLinkUserPortalsList(this, "user_portals", false);
  public get userPortals() {
    return this._userPortals;
  }
  public putUserPortals(value: UserPortalLinkUserPortals[] | cdktf.IResolvable) {
    this._userPortals.internalValue = value;
  }
  public resetUserPortals() {
    this._userPortals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPortalsInput() {
    return this._userPortals.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      icon_text: cdktf.stringToTerraform(this._iconText),
      link: cdktf.stringToTerraform(this._link),
      link_path: cdktf.stringToTerraform(this._linkPath),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      user_portals: cdktf.listMapper(userPortalLinkUserPortalsToTerraform, true)(this._userPortals.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon_text: {
        value: cdktf.stringToHclTerraform(this._iconText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_path: {
        value: cdktf.stringToHclTerraform(this._linkPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_portals: {
        value: cdktf.listMapperHcl(userPortalLinkUserPortalsToHclTerraform, true)(this._userPortals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserPortalLinkUserPortalsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
