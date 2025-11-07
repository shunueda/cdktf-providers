// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgIdpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * enum: `critical`, `standard`, `strict`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#base_profile OrgIdpprofile#base_profile}
  */
  readonly baseProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#name OrgIdpprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#org_id OrgIdpprofile#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#overwrites OrgIdpprofile#overwrites}
  */
  readonly overwrites?: OrgIdpprofileOverwrites[] | cdktf.IResolvable;
}
export interface OrgIdpprofileOverwritesMatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#attack_name OrgIdpprofile#attack_name}
  */
  readonly attackName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#dst_subnet OrgIdpprofile#dst_subnet}
  */
  readonly dstSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#severity OrgIdpprofile#severity}
  */
  readonly severity?: string[];
}

export function orgIdpprofileOverwritesMatchingToTerraform(struct?: OrgIdpprofileOverwritesMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attackName),
    dst_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstSubnet),
    severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severity),
  }
}


export function orgIdpprofileOverwritesMatchingToHclTerraform(struct?: OrgIdpprofileOverwritesMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attackName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dst_subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstSubnet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgIdpprofileOverwritesMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgIdpprofileOverwritesMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackName = this._attackName;
    }
    if (this._dstSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSubnet = this._dstSubnet;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgIdpprofileOverwritesMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attackName = undefined;
      this._dstSubnet = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attackName = value.attackName;
      this._dstSubnet = value.dstSubnet;
      this._severity = value.severity;
    }
  }

  // attack_name - computed: false, optional: true, required: false
  private _attackName?: string[]; 
  public get attackName() {
    return this.getListAttribute('attack_name');
  }
  public set attackName(value: string[]) {
    this._attackName = value;
  }
  public resetAttackName() {
    this._attackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackNameInput() {
    return this._attackName;
  }

  // dst_subnet - computed: false, optional: true, required: false
  private _dstSubnet?: string[]; 
  public get dstSubnet() {
    return this.getListAttribute('dst_subnet');
  }
  public set dstSubnet(value: string[]) {
    this._dstSubnet = value;
  }
  public resetDstSubnet() {
    this._dstSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnetInput() {
    return this._dstSubnet;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return this.getListAttribute('severity');
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface OrgIdpprofileOverwrites {
  /**
  * enum:
  *   * alert (default)
  *   * drop: silently dropping packets
  *   * close: notify client/server to close connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#action OrgIdpprofile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#matching OrgIdpprofile#matching}
  */
  readonly matching?: OrgIdpprofileOverwritesMatching;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#name OrgIdpprofile#name}
  */
  readonly name: string;
}

export function orgIdpprofileOverwritesToTerraform(struct?: OrgIdpprofileOverwrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    matching: orgIdpprofileOverwritesMatchingToTerraform(struct!.matching),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function orgIdpprofileOverwritesToHclTerraform(struct?: OrgIdpprofileOverwrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching: {
      value: orgIdpprofileOverwritesMatchingToHclTerraform(struct!.matching),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgIdpprofileOverwritesMatching",
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

export class OrgIdpprofileOverwritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgIdpprofileOverwrites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._matching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matching = this._matching?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgIdpprofileOverwrites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._matching.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._matching.internalValue = value.matching;
      this._name = value.name;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // matching - computed: false, optional: true, required: false
  private _matching = new OrgIdpprofileOverwritesMatchingOutputReference(this, "matching");
  public get matching() {
    return this._matching;
  }
  public putMatching(value: OrgIdpprofileOverwritesMatching) {
    this._matching.internalValue = value;
  }
  public resetMatching() {
    this._matching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching.internalValue;
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
}

export class OrgIdpprofileOverwritesList extends cdktf.ComplexList {
  public internalValue? : OrgIdpprofileOverwrites[] | cdktf.IResolvable

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
  public get(index: number): OrgIdpprofileOverwritesOutputReference {
    return new OrgIdpprofileOverwritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile mist_org_idpprofile}
*/
export class OrgIdpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_idpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgIdpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgIdpprofile to import
  * @param importFromId The id of the existing OrgIdpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgIdpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_idpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_idpprofile mist_org_idpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgIdpprofileConfig
  */
  public constructor(scope: Construct, id: string, config: OrgIdpprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_idpprofile',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseProfile = config.baseProfile;
    this._name = config.name;
    this._orgId = config.orgId;
    this._overwrites.internalValue = config.overwrites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_profile - computed: false, optional: false, required: true
  private _baseProfile?: string; 
  public get baseProfile() {
    return this.getStringAttribute('base_profile');
  }
  public set baseProfile(value: string) {
    this._baseProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseProfileInput() {
    return this._baseProfile;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // overwrites - computed: false, optional: true, required: false
  private _overwrites = new OrgIdpprofileOverwritesList(this, "overwrites", false);
  public get overwrites() {
    return this._overwrites;
  }
  public putOverwrites(value: OrgIdpprofileOverwrites[] | cdktf.IResolvable) {
    this._overwrites.internalValue = value;
  }
  public resetOverwrites() {
    this._overwrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwritesInput() {
    return this._overwrites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_profile: cdktf.stringToTerraform(this._baseProfile),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      overwrites: cdktf.listMapper(orgIdpprofileOverwritesToTerraform, false)(this._overwrites.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_profile: {
        value: cdktf.stringToHclTerraform(this._baseProfile),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrites: {
        value: cdktf.listMapperHcl(orgIdpprofileOverwritesToHclTerraform, false)(this._overwrites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgIdpprofileOverwritesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
