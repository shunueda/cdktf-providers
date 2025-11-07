// https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MissioncontrolAccessFederationStarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Entity types to sync. Allow values: `USERS`, `GROUPS`, `PERMISSIONS`, `TOKENS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#entities MissioncontrolAccessFederationStar#entities}
  */
  readonly entities: string[];
  /**
  * ID for the source Platform Deployment. Use [Get Access Federation Candidate API](https://jfrog.com/help/r/jfrog-rest-apis/get-access-federation-candidates) to get a list of ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#id MissioncontrolAccessFederationStar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Target JPD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#targets MissioncontrolAccessFederationStar#targets}
  */
  readonly targets: MissioncontrolAccessFederationStarTargets[] | cdktf.IResolvable;
}
export interface MissioncontrolAccessFederationStarTargetsPermissionFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#exclude_patterns MissioncontrolAccessFederationStar#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#include_patterns MissioncontrolAccessFederationStar#include_patterns}
  */
  readonly includePatterns?: string[];
}

export function missioncontrolAccessFederationStarTargetsPermissionFiltersToTerraform(struct?: MissioncontrolAccessFederationStarTargetsPermissionFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
  }
}


export function missioncontrolAccessFederationStarTargetsPermissionFiltersToHclTerraform(struct?: MissioncontrolAccessFederationStarTargetsPermissionFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MissioncontrolAccessFederationStarTargetsPermissionFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MissioncontrolAccessFederationStarTargetsPermissionFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MissioncontrolAccessFederationStarTargetsPermissionFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
    }
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_patterns'));
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_patterns'));
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }
}
export interface MissioncontrolAccessFederationStarTargets {
  /**
  * ID of the targeted Platform Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#id MissioncontrolAccessFederationStar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * When assigning entity types to targets, you can assign specific permissions to be synchronized using the `include_patterns`/`exclude_patterns` regular expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#permission_filters MissioncontrolAccessFederationStar#permission_filters}
  */
  readonly permissionFilters?: MissioncontrolAccessFederationStarTargetsPermissionFilters;
  /**
  * Target Platform deployment URL: http://<hostname>:<port>/access; for example: http://myplatformserver:8082/access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#url MissioncontrolAccessFederationStar#url}
  */
  readonly url: string;
}

export function missioncontrolAccessFederationStarTargetsToTerraform(struct?: MissioncontrolAccessFederationStarTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permission_filters: missioncontrolAccessFederationStarTargetsPermissionFiltersToTerraform(struct!.permissionFilters),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function missioncontrolAccessFederationStarTargetsToHclTerraform(struct?: MissioncontrolAccessFederationStarTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_filters: {
      value: missioncontrolAccessFederationStarTargetsPermissionFiltersToHclTerraform(struct!.permissionFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "MissioncontrolAccessFederationStarTargetsPermissionFilters",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MissioncontrolAccessFederationStarTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MissioncontrolAccessFederationStarTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissionFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionFilters = this._permissionFilters?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MissioncontrolAccessFederationStarTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissionFilters.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissionFilters.internalValue = value.permissionFilters;
      this._url = value.url;
    }
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

  // permission_filters - computed: false, optional: true, required: false
  private _permissionFilters = new MissioncontrolAccessFederationStarTargetsPermissionFiltersOutputReference(this, "permission_filters");
  public get permissionFilters() {
    return this._permissionFilters;
  }
  public putPermissionFilters(value: MissioncontrolAccessFederationStarTargetsPermissionFilters) {
    this._permissionFilters.internalValue = value;
  }
  public resetPermissionFilters() {
    this._permissionFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionFiltersInput() {
    return this._permissionFilters.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class MissioncontrolAccessFederationStarTargetsList extends cdktf.ComplexList {
  public internalValue? : MissioncontrolAccessFederationStarTargets[] | cdktf.IResolvable

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
  public get(index: number): MissioncontrolAccessFederationStarTargetsOutputReference {
    return new MissioncontrolAccessFederationStarTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star missioncontrol_access_federation_star}
*/
export class MissioncontrolAccessFederationStar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "missioncontrol_access_federation_star";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MissioncontrolAccessFederationStar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MissioncontrolAccessFederationStar to import
  * @param importFromId The id of the existing MissioncontrolAccessFederationStar that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MissioncontrolAccessFederationStar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "missioncontrol_access_federation_star", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_star missioncontrol_access_federation_star} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MissioncontrolAccessFederationStarConfig
  */
  public constructor(scope: Construct, id: string, config: MissioncontrolAccessFederationStarConfig) {
    super(scope, id, {
      terraformResourceType: 'missioncontrol_access_federation_star',
      terraformGeneratorMetadata: {
        providerName: 'mission-control',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entities = config.entities;
    this._id = config.id;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entities - computed: false, optional: false, required: true
  private _entities?: string[]; 
  public get entities() {
    return cdktf.Fn.tolist(this.getListAttribute('entities'));
  }
  public set entities(value: string[]) {
    this._entities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities;
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

  // targets - computed: false, optional: false, required: true
  private _targets = new MissioncontrolAccessFederationStarTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: MissioncontrolAccessFederationStarTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entities),
      id: cdktf.stringToTerraform(this._id),
      targets: cdktf.listMapper(missioncontrolAccessFederationStarTargetsToTerraform, false)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.listMapperHcl(missioncontrolAccessFederationStarTargetsToHclTerraform, false)(this._targets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MissioncontrolAccessFederationStarTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
