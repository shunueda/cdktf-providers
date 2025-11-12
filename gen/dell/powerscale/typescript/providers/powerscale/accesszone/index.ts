// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccesszoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional parameter which adds new auth_providers to the access zone. A provider name should be of the form '[provider-type:]provider-name', the provider-type defaults to 'lsa-local-provider'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone#custom_auth_providers Accesszone#custom_auth_providers}
  */
  readonly customAuthProviders?: string[];
  /**
  * Groupnet identifier. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone#groupnet Accesszone#groupnet}
  */
  readonly groupnet: string;
  /**
  * Specifies the access zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone#name Accesszone#name}
  */
  readonly name: string;
  /**
  * Specifies the access zone base directory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone#path Accesszone#path}
  */
  readonly path: string;
}
export interface AccesszoneIfsRestricted {
}

export function accesszoneIfsRestrictedToTerraform(struct?: AccesszoneIfsRestricted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function accesszoneIfsRestrictedToHclTerraform(struct?: AccesszoneIfsRestricted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AccesszoneIfsRestrictedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccesszoneIfsRestricted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccesszoneIfsRestricted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class AccesszoneIfsRestrictedList extends cdktf.ComplexList {

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
  public get(index: number): AccesszoneIfsRestrictedOutputReference {
    return new AccesszoneIfsRestrictedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone powerscale_accesszone}
*/
export class Accesszone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_accesszone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Accesszone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Accesszone to import
  * @param importFromId The id of the existing Accesszone that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Accesszone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_accesszone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/accesszone powerscale_accesszone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccesszoneConfig
  */
  public constructor(scope: Construct, id: string, config: AccesszoneConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_accesszone',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customAuthProviders = config.customAuthProviders;
    this._groupnet = config.groupnet;
    this._name = config.name;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_system_provider - computed: true, optional: false, required: false
  public get alternateSystemProvider() {
    return this.getStringAttribute('alternate_system_provider');
  }

  // auth_providers - computed: true, optional: false, required: false
  public get authProviders() {
    return this.getListAttribute('auth_providers');
  }

  // cache_entry_expiry - computed: true, optional: false, required: false
  public get cacheEntryExpiry() {
    return this.getNumberAttribute('cache_entry_expiry');
  }

  // create_path - computed: true, optional: false, required: false
  public get createPath() {
    return this.getBooleanAttribute('create_path');
  }

  // custom_auth_providers - computed: true, optional: true, required: false
  private _customAuthProviders?: string[]; 
  public get customAuthProviders() {
    return this.getListAttribute('custom_auth_providers');
  }
  public set customAuthProviders(value: string[]) {
    this._customAuthProviders = value;
  }
  public resetCustomAuthProviders() {
    this._customAuthProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthProvidersInput() {
    return this._customAuthProviders;
  }

  // groupnet - computed: false, optional: false, required: true
  private _groupnet?: string; 
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }
  public set groupnet(value: string) {
    this._groupnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnetInput() {
    return this._groupnet;
  }

  // home_directory_umask - computed: true, optional: false, required: false
  public get homeDirectoryUmask() {
    return this.getNumberAttribute('home_directory_umask');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ifs_restricted - computed: true, optional: false, required: false
  private _ifsRestricted = new AccesszoneIfsRestrictedList(this, "ifs_restricted", false);
  public get ifsRestricted() {
    return this._ifsRestricted;
  }

  // map_untrusted - computed: true, optional: false, required: false
  public get mapUntrusted() {
    return this.getStringAttribute('map_untrusted');
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

  // negative_cache_entry_expiry - computed: true, optional: false, required: false
  public get negativeCacheEntryExpiry() {
    return this.getNumberAttribute('negative_cache_entry_expiry');
  }

  // netbios_name - computed: true, optional: false, required: false
  public get netbiosName() {
    return this.getStringAttribute('netbios_name');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // skeleton_directory - computed: true, optional: false, required: false
  public get skeletonDirectory() {
    return this.getStringAttribute('skeleton_directory');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }

  // system_provider - computed: true, optional: false, required: false
  public get systemProvider() {
    return this.getStringAttribute('system_provider');
  }

  // user_mapping_rules - computed: true, optional: false, required: false
  public get userMappingRules() {
    return this.getListAttribute('user_mapping_rules');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_auth_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customAuthProviders),
      groupnet: cdktf.stringToTerraform(this._groupnet),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_auth_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customAuthProviders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      groupnet: {
        value: cdktf.stringToHclTerraform(this._groupnet),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
