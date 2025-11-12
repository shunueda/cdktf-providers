// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BulkEpgToStaticPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#application_epg_dn BulkEpgToStaticPath#application_epg_dn}
  */
  readonly applicationEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#id BulkEpgToStaticPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * static_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#static_path BulkEpgToStaticPath#static_path}
  */
  readonly staticPath: BulkEpgToStaticPathStaticPath[] | cdktf.IResolvable;
}
export interface BulkEpgToStaticPathStaticPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#deployment_immediacy BulkEpgToStaticPath#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#description BulkEpgToStaticPath#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#encap BulkEpgToStaticPath#encap}
  */
  readonly encap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#interface_dn BulkEpgToStaticPath#interface_dn}
  */
  readonly interfaceDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#mode BulkEpgToStaticPath#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#primary_encap BulkEpgToStaticPath#primary_encap}
  */
  readonly primaryEncap?: string;
}

export function bulkEpgToStaticPathStaticPathToTerraform(struct?: BulkEpgToStaticPathStaticPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_immediacy: cdktf.stringToTerraform(struct!.deploymentImmediacy),
    description: cdktf.stringToTerraform(struct!.description),
    encap: cdktf.stringToTerraform(struct!.encap),
    interface_dn: cdktf.stringToTerraform(struct!.interfaceDn),
    mode: cdktf.stringToTerraform(struct!.mode),
    primary_encap: cdktf.stringToTerraform(struct!.primaryEncap),
  }
}


export function bulkEpgToStaticPathStaticPathToHclTerraform(struct?: BulkEpgToStaticPathStaticPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_immediacy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentImmediacy),
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
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_dn: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_encap: {
      value: cdktf.stringToHclTerraform(struct!.primaryEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BulkEpgToStaticPathStaticPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BulkEpgToStaticPathStaticPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentImmediacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentImmediacy = this._deploymentImmediacy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._interfaceDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDn = this._interfaceDn;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._primaryEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryEncap = this._primaryEncap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BulkEpgToStaticPathStaticPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentImmediacy = undefined;
      this._description = undefined;
      this._encap = undefined;
      this._interfaceDn = undefined;
      this._mode = undefined;
      this._primaryEncap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentImmediacy = value.deploymentImmediacy;
      this._description = value.description;
      this._encap = value.encap;
      this._interfaceDn = value.interfaceDn;
      this._mode = value.mode;
      this._primaryEncap = value.primaryEncap;
    }
  }

  // deployment_immediacy - computed: false, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
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

  // encap - computed: false, optional: false, required: true
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // interface_dn - computed: false, optional: false, required: true
  private _interfaceDn?: string; 
  public get interfaceDn() {
    return this.getStringAttribute('interface_dn');
  }
  public set interfaceDn(value: string) {
    this._interfaceDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDnInput() {
    return this._interfaceDn;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // primary_encap - computed: false, optional: true, required: false
  private _primaryEncap?: string; 
  public get primaryEncap() {
    return this.getStringAttribute('primary_encap');
  }
  public set primaryEncap(value: string) {
    this._primaryEncap = value;
  }
  public resetPrimaryEncap() {
    this._primaryEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapInput() {
    return this._primaryEncap;
  }
}

export class BulkEpgToStaticPathStaticPathList extends cdktf.ComplexList {
  public internalValue? : BulkEpgToStaticPathStaticPath[] | cdktf.IResolvable

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
  public get(index: number): BulkEpgToStaticPathStaticPathOutputReference {
    return new BulkEpgToStaticPathStaticPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path aci_bulk_epg_to_static_path}
*/
export class BulkEpgToStaticPath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bulk_epg_to_static_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BulkEpgToStaticPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BulkEpgToStaticPath to import
  * @param importFromId The id of the existing BulkEpgToStaticPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BulkEpgToStaticPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bulk_epg_to_static_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bulk_epg_to_static_path aci_bulk_epg_to_static_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BulkEpgToStaticPathConfig
  */
  public constructor(scope: Construct, id: string, config: BulkEpgToStaticPathConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bulk_epg_to_static_path',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationEpgDn = config.applicationEpgDn;
    this._id = config.id;
    this._staticPath.internalValue = config.staticPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_epg_dn - computed: false, optional: false, required: true
  private _applicationEpgDn?: string; 
  public get applicationEpgDn() {
    return this.getStringAttribute('application_epg_dn');
  }
  public set applicationEpgDn(value: string) {
    this._applicationEpgDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEpgDnInput() {
    return this._applicationEpgDn;
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

  // static_path - computed: false, optional: false, required: true
  private _staticPath = new BulkEpgToStaticPathStaticPathList(this, "static_path", true);
  public get staticPath() {
    return this._staticPath;
  }
  public putStaticPath(value: BulkEpgToStaticPathStaticPath[] | cdktf.IResolvable) {
    this._staticPath.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPathInput() {
    return this._staticPath.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_epg_dn: cdktf.stringToTerraform(this._applicationEpgDn),
      id: cdktf.stringToTerraform(this._id),
      static_path: cdktf.listMapper(bulkEpgToStaticPathStaticPathToTerraform, true)(this._staticPath.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_epg_dn: {
        value: cdktf.stringToHclTerraform(this._applicationEpgDn),
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
      static_path: {
        value: cdktf.listMapperHcl(bulkEpgToStaticPathStaticPathToHclTerraform, true)(this._staticPath.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BulkEpgToStaticPathStaticPathList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
