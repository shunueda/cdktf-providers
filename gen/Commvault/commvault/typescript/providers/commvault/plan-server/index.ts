// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlanServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to enable overriding of plan. Plan cannot be overriden by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#allowplanoverride PlanServer#allowplanoverride}
  */
  readonly allowplanoverride?: string;
  /**
  * Primary Backup Destination Ids (which were created before plan creation). This is only considered when backupDestinations array object is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupdestinationids PlanServer#backupdestinationids}
  */
  readonly backupdestinationids?: number[];
  /**
  * flag to enable backup content association for applicable file system workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#filesystemaddon PlanServer#filesystemaddon}
  */
  readonly filesystemaddon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the new plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#planname PlanServer#planname}
  */
  readonly planname: string;
  /**
  * backupcontent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupcontent PlanServer#backupcontent}
  */
  readonly backupcontent?: PlanServerBackupcontent[] | cdktf.IResolvable;
  /**
  * backupdestinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupdestinations PlanServer#backupdestinations}
  */
  readonly backupdestinations?: PlanServerBackupdestinations[] | cdktf.IResolvable;
  /**
  * databaseoptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#databaseoptions PlanServer#databaseoptions}
  */
  readonly databaseoptions?: PlanServerDatabaseoptions[] | cdktf.IResolvable;
  /**
  * overrideinheritsettings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#overrideinheritsettings PlanServer#overrideinheritsettings}
  */
  readonly overrideinheritsettings?: PlanServerOverrideinheritsettings[] | cdktf.IResolvable;
  /**
  * overriderestrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#overriderestrictions PlanServer#overriderestrictions}
  */
  readonly overriderestrictions?: PlanServerOverriderestrictions[] | cdktf.IResolvable;
  /**
  * parentplan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#parentplan PlanServer#parentplan}
  */
  readonly parentplan?: PlanServerParentplan[] | cdktf.IResolvable;
  /**
  * regiontoconfigure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#regiontoconfigure PlanServer#regiontoconfigure}
  */
  readonly regiontoconfigure?: PlanServerRegiontoconfigure[] | cdktf.IResolvable;
  /**
  * rpo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#rpo PlanServer#rpo}
  */
  readonly rpo?: PlanServerRpo[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#settings PlanServer#settings}
  */
  readonly settings?: PlanServerSettings[] | cdktf.IResolvable;
  /**
  * snapshotoptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#snapshotoptions PlanServer#snapshotoptions}
  */
  readonly snapshotoptions?: PlanServerSnapshotoptions[] | cdktf.IResolvable;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#workload PlanServer#workload}
  */
  readonly workload?: PlanServerWorkload[] | cdktf.IResolvable;
}
export interface PlanServerBackupcontentMacnumberofdatareaders {
  /**
  * Number of data readers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#count PlanServer#count}
  */
  readonly count?: number;
  /**
  * Set optimal number of data readers. if it is set to true, count will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#useoptimal PlanServer#useoptimal}
  */
  readonly useoptimal?: string;
}

export function planServerBackupcontentMacnumberofdatareadersToTerraform(struct?: PlanServerBackupcontentMacnumberofdatareaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    useoptimal: cdktf.stringToTerraform(struct!.useoptimal),
  }
}


export function planServerBackupcontentMacnumberofdatareadersToHclTerraform(struct?: PlanServerBackupcontentMacnumberofdatareaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    useoptimal: {
      value: cdktf.stringToHclTerraform(struct!.useoptimal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerBackupcontentMacnumberofdatareadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupcontentMacnumberofdatareaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._useoptimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useoptimal = this._useoptimal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupcontentMacnumberofdatareaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._useoptimal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._useoptimal = value.useoptimal;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // useoptimal - computed: true, optional: true, required: false
  private _useoptimal?: string; 
  public get useoptimal() {
    return this.getStringAttribute('useoptimal');
  }
  public set useoptimal(value: string) {
    this._useoptimal = value;
  }
  public resetUseoptimal() {
    this._useoptimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useoptimalInput() {
    return this._useoptimal;
  }
}

export class PlanServerBackupcontentMacnumberofdatareadersList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupcontentMacnumberofdatareaders[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupcontentMacnumberofdatareadersOutputReference {
    return new PlanServerBackupcontentMacnumberofdatareadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupcontentUnixnumberofdatareaders {
  /**
  * Number of data readers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#count PlanServer#count}
  */
  readonly count?: number;
  /**
  * Set optimal number of data readers. if it is set to true, count will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#useoptimal PlanServer#useoptimal}
  */
  readonly useoptimal?: string;
}

export function planServerBackupcontentUnixnumberofdatareadersToTerraform(struct?: PlanServerBackupcontentUnixnumberofdatareaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    useoptimal: cdktf.stringToTerraform(struct!.useoptimal),
  }
}


export function planServerBackupcontentUnixnumberofdatareadersToHclTerraform(struct?: PlanServerBackupcontentUnixnumberofdatareaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    useoptimal: {
      value: cdktf.stringToHclTerraform(struct!.useoptimal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerBackupcontentUnixnumberofdatareadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupcontentUnixnumberofdatareaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._useoptimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useoptimal = this._useoptimal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupcontentUnixnumberofdatareaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._useoptimal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._useoptimal = value.useoptimal;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // useoptimal - computed: true, optional: true, required: false
  private _useoptimal?: string; 
  public get useoptimal() {
    return this.getStringAttribute('useoptimal');
  }
  public set useoptimal(value: string) {
    this._useoptimal = value;
  }
  public resetUseoptimal() {
    this._useoptimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useoptimalInput() {
    return this._useoptimal;
  }
}

export class PlanServerBackupcontentUnixnumberofdatareadersList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupcontentUnixnumberofdatareaders[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupcontentUnixnumberofdatareadersOutputReference {
    return new PlanServerBackupcontentUnixnumberofdatareadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupcontentWindowsnumberofdatareaders {
  /**
  * Number of data readers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#count PlanServer#count}
  */
  readonly count?: number;
  /**
  * Set optimal number of data readers. if it is set to true, count will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#useoptimal PlanServer#useoptimal}
  */
  readonly useoptimal?: string;
}

export function planServerBackupcontentWindowsnumberofdatareadersToTerraform(struct?: PlanServerBackupcontentWindowsnumberofdatareaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    useoptimal: cdktf.stringToTerraform(struct!.useoptimal),
  }
}


export function planServerBackupcontentWindowsnumberofdatareadersToHclTerraform(struct?: PlanServerBackupcontentWindowsnumberofdatareaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    useoptimal: {
      value: cdktf.stringToHclTerraform(struct!.useoptimal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerBackupcontentWindowsnumberofdatareadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupcontentWindowsnumberofdatareaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._useoptimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useoptimal = this._useoptimal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupcontentWindowsnumberofdatareaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._useoptimal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._useoptimal = value.useoptimal;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // useoptimal - computed: true, optional: true, required: false
  private _useoptimal?: string; 
  public get useoptimal() {
    return this.getStringAttribute('useoptimal');
  }
  public set useoptimal(value: string) {
    this._useoptimal = value;
  }
  public resetUseoptimal() {
    this._useoptimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useoptimalInput() {
    return this._useoptimal;
  }
}

export class PlanServerBackupcontentWindowsnumberofdatareadersList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupcontentWindowsnumberofdatareaders[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupcontentWindowsnumberofdatareadersOutputReference {
    return new PlanServerBackupcontentWindowsnumberofdatareadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupcontent {
  /**
  * Do you want to back up the system state? Applicable only for Windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupsystemstate PlanServer#backupsystemstate}
  */
  readonly backupsystemstate?: string;
  /**
  * Do you want to back up system state only with full backup? Applicable only if the value of backupSystemState is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupsystemstateonlywithfullbackup PlanServer#backupsystemstateonlywithfullbackup}
  */
  readonly backupsystemstateonlywithfullbackup?: string;
  /**
  * Do you want to sync properties on associated subclients even if properties are overriden at subclient level?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#forceupdateproperties PlanServer#forceupdateproperties}
  */
  readonly forceupdateproperties?: string;
  /**
  * Paths to exclude for Mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#macexcludedpaths PlanServer#macexcludedpaths}
  */
  readonly macexcludedpaths?: string[];
  /**
  * Paths that are exception to excluded paths for Mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#macfiltertoexcludepaths PlanServer#macfiltertoexcludepaths}
  */
  readonly macfiltertoexcludepaths?: string[];
  /**
  * Paths to include for Mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#macincludedpaths PlanServer#macincludedpaths}
  */
  readonly macincludedpaths?: string[];
  /**
  * Paths to exclude for UNIX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#unixexcludedpaths PlanServer#unixexcludedpaths}
  */
  readonly unixexcludedpaths?: string[];
  /**
  * Paths that are exception to excluded paths for Unix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#unixfiltertoexcludepaths PlanServer#unixfiltertoexcludepaths}
  */
  readonly unixfiltertoexcludepaths?: string[];
  /**
  * Paths to include for UNIX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#unixincludedpaths PlanServer#unixincludedpaths}
  */
  readonly unixincludedpaths?: string[];
  /**
  * Do you want to back up system state with VSS? Applicable only if the value of backupSystemState is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#usevssforsystemstate PlanServer#usevssforsystemstate}
  */
  readonly usevssforsystemstate?: string;
  /**
  * Paths to exclude for Windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#windowsexcludedpaths PlanServer#windowsexcludedpaths}
  */
  readonly windowsexcludedpaths?: string[];
  /**
  * Paths that are exception to excluded paths for Windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#windowsfiltertoexcludepaths PlanServer#windowsfiltertoexcludepaths}
  */
  readonly windowsfiltertoexcludepaths?: string[];
  /**
  * Paths to include for Windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#windowsincludedpaths PlanServer#windowsincludedpaths}
  */
  readonly windowsincludedpaths?: string[];
  /**
  * macnumberofdatareaders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#macnumberofdatareaders PlanServer#macnumberofdatareaders}
  */
  readonly macnumberofdatareaders?: PlanServerBackupcontentMacnumberofdatareaders[] | cdktf.IResolvable;
  /**
  * unixnumberofdatareaders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#unixnumberofdatareaders PlanServer#unixnumberofdatareaders}
  */
  readonly unixnumberofdatareaders?: PlanServerBackupcontentUnixnumberofdatareaders[] | cdktf.IResolvable;
  /**
  * windowsnumberofdatareaders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#windowsnumberofdatareaders PlanServer#windowsnumberofdatareaders}
  */
  readonly windowsnumberofdatareaders?: PlanServerBackupcontentWindowsnumberofdatareaders[] | cdktf.IResolvable;
}

export function planServerBackupcontentToTerraform(struct?: PlanServerBackupcontent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupsystemstate: cdktf.stringToTerraform(struct!.backupsystemstate),
    backupsystemstateonlywithfullbackup: cdktf.stringToTerraform(struct!.backupsystemstateonlywithfullbackup),
    forceupdateproperties: cdktf.stringToTerraform(struct!.forceupdateproperties),
    macexcludedpaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macexcludedpaths),
    macfiltertoexcludepaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macfiltertoexcludepaths),
    macincludedpaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macincludedpaths),
    unixexcludedpaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unixexcludedpaths),
    unixfiltertoexcludepaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unixfiltertoexcludepaths),
    unixincludedpaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unixincludedpaths),
    usevssforsystemstate: cdktf.stringToTerraform(struct!.usevssforsystemstate),
    windowsexcludedpaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.windowsexcludedpaths),
    windowsfiltertoexcludepaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.windowsfiltertoexcludepaths),
    windowsincludedpaths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.windowsincludedpaths),
    macnumberofdatareaders: cdktf.listMapper(planServerBackupcontentMacnumberofdatareadersToTerraform, true)(struct!.macnumberofdatareaders),
    unixnumberofdatareaders: cdktf.listMapper(planServerBackupcontentUnixnumberofdatareadersToTerraform, true)(struct!.unixnumberofdatareaders),
    windowsnumberofdatareaders: cdktf.listMapper(planServerBackupcontentWindowsnumberofdatareadersToTerraform, true)(struct!.windowsnumberofdatareaders),
  }
}


export function planServerBackupcontentToHclTerraform(struct?: PlanServerBackupcontent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupsystemstate: {
      value: cdktf.stringToHclTerraform(struct!.backupsystemstate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backupsystemstateonlywithfullbackup: {
      value: cdktf.stringToHclTerraform(struct!.backupsystemstateonlywithfullbackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forceupdateproperties: {
      value: cdktf.stringToHclTerraform(struct!.forceupdateproperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macexcludedpaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macexcludedpaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    macfiltertoexcludepaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macfiltertoexcludepaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    macincludedpaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macincludedpaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unixexcludedpaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unixexcludedpaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unixfiltertoexcludepaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unixfiltertoexcludepaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unixincludedpaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unixincludedpaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    usevssforsystemstate: {
      value: cdktf.stringToHclTerraform(struct!.usevssforsystemstate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windowsexcludedpaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.windowsexcludedpaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    windowsfiltertoexcludepaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.windowsfiltertoexcludepaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    windowsincludedpaths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.windowsincludedpaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    macnumberofdatareaders: {
      value: cdktf.listMapperHcl(planServerBackupcontentMacnumberofdatareadersToHclTerraform, true)(struct!.macnumberofdatareaders),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupcontentMacnumberofdatareadersList",
    },
    unixnumberofdatareaders: {
      value: cdktf.listMapperHcl(planServerBackupcontentUnixnumberofdatareadersToHclTerraform, true)(struct!.unixnumberofdatareaders),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupcontentUnixnumberofdatareadersList",
    },
    windowsnumberofdatareaders: {
      value: cdktf.listMapperHcl(planServerBackupcontentWindowsnumberofdatareadersToHclTerraform, true)(struct!.windowsnumberofdatareaders),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupcontentWindowsnumberofdatareadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerBackupcontentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupcontent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupsystemstate !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupsystemstate = this._backupsystemstate;
    }
    if (this._backupsystemstateonlywithfullbackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupsystemstateonlywithfullbackup = this._backupsystemstateonlywithfullbackup;
    }
    if (this._forceupdateproperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceupdateproperties = this._forceupdateproperties;
    }
    if (this._macexcludedpaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.macexcludedpaths = this._macexcludedpaths;
    }
    if (this._macfiltertoexcludepaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.macfiltertoexcludepaths = this._macfiltertoexcludepaths;
    }
    if (this._macincludedpaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.macincludedpaths = this._macincludedpaths;
    }
    if (this._unixexcludedpaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixexcludedpaths = this._unixexcludedpaths;
    }
    if (this._unixfiltertoexcludepaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixfiltertoexcludepaths = this._unixfiltertoexcludepaths;
    }
    if (this._unixincludedpaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixincludedpaths = this._unixincludedpaths;
    }
    if (this._usevssforsystemstate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usevssforsystemstate = this._usevssforsystemstate;
    }
    if (this._windowsexcludedpaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsexcludedpaths = this._windowsexcludedpaths;
    }
    if (this._windowsfiltertoexcludepaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsfiltertoexcludepaths = this._windowsfiltertoexcludepaths;
    }
    if (this._windowsincludedpaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsincludedpaths = this._windowsincludedpaths;
    }
    if (this._macnumberofdatareaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macnumberofdatareaders = this._macnumberofdatareaders?.internalValue;
    }
    if (this._unixnumberofdatareaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixnumberofdatareaders = this._unixnumberofdatareaders?.internalValue;
    }
    if (this._windowsnumberofdatareaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsnumberofdatareaders = this._windowsnumberofdatareaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupcontent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupsystemstate = undefined;
      this._backupsystemstateonlywithfullbackup = undefined;
      this._forceupdateproperties = undefined;
      this._macexcludedpaths = undefined;
      this._macfiltertoexcludepaths = undefined;
      this._macincludedpaths = undefined;
      this._unixexcludedpaths = undefined;
      this._unixfiltertoexcludepaths = undefined;
      this._unixincludedpaths = undefined;
      this._usevssforsystemstate = undefined;
      this._windowsexcludedpaths = undefined;
      this._windowsfiltertoexcludepaths = undefined;
      this._windowsincludedpaths = undefined;
      this._macnumberofdatareaders.internalValue = undefined;
      this._unixnumberofdatareaders.internalValue = undefined;
      this._windowsnumberofdatareaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupsystemstate = value.backupsystemstate;
      this._backupsystemstateonlywithfullbackup = value.backupsystemstateonlywithfullbackup;
      this._forceupdateproperties = value.forceupdateproperties;
      this._macexcludedpaths = value.macexcludedpaths;
      this._macfiltertoexcludepaths = value.macfiltertoexcludepaths;
      this._macincludedpaths = value.macincludedpaths;
      this._unixexcludedpaths = value.unixexcludedpaths;
      this._unixfiltertoexcludepaths = value.unixfiltertoexcludepaths;
      this._unixincludedpaths = value.unixincludedpaths;
      this._usevssforsystemstate = value.usevssforsystemstate;
      this._windowsexcludedpaths = value.windowsexcludedpaths;
      this._windowsfiltertoexcludepaths = value.windowsfiltertoexcludepaths;
      this._windowsincludedpaths = value.windowsincludedpaths;
      this._macnumberofdatareaders.internalValue = value.macnumberofdatareaders;
      this._unixnumberofdatareaders.internalValue = value.unixnumberofdatareaders;
      this._windowsnumberofdatareaders.internalValue = value.windowsnumberofdatareaders;
    }
  }

  // backupsystemstate - computed: true, optional: true, required: false
  private _backupsystemstate?: string; 
  public get backupsystemstate() {
    return this.getStringAttribute('backupsystemstate');
  }
  public set backupsystemstate(value: string) {
    this._backupsystemstate = value;
  }
  public resetBackupsystemstate() {
    this._backupsystemstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsystemstateInput() {
    return this._backupsystemstate;
  }

  // backupsystemstateonlywithfullbackup - computed: true, optional: true, required: false
  private _backupsystemstateonlywithfullbackup?: string; 
  public get backupsystemstateonlywithfullbackup() {
    return this.getStringAttribute('backupsystemstateonlywithfullbackup');
  }
  public set backupsystemstateonlywithfullbackup(value: string) {
    this._backupsystemstateonlywithfullbackup = value;
  }
  public resetBackupsystemstateonlywithfullbackup() {
    this._backupsystemstateonlywithfullbackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsystemstateonlywithfullbackupInput() {
    return this._backupsystemstateonlywithfullbackup;
  }

  // forceupdateproperties - computed: true, optional: true, required: false
  private _forceupdateproperties?: string; 
  public get forceupdateproperties() {
    return this.getStringAttribute('forceupdateproperties');
  }
  public set forceupdateproperties(value: string) {
    this._forceupdateproperties = value;
  }
  public resetForceupdateproperties() {
    this._forceupdateproperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceupdatepropertiesInput() {
    return this._forceupdateproperties;
  }

  // macexcludedpaths - computed: true, optional: true, required: false
  private _macexcludedpaths?: string[]; 
  public get macexcludedpaths() {
    return cdktf.Fn.tolist(this.getListAttribute('macexcludedpaths'));
  }
  public set macexcludedpaths(value: string[]) {
    this._macexcludedpaths = value;
  }
  public resetMacexcludedpaths() {
    this._macexcludedpaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macexcludedpathsInput() {
    return this._macexcludedpaths;
  }

  // macfiltertoexcludepaths - computed: true, optional: true, required: false
  private _macfiltertoexcludepaths?: string[]; 
  public get macfiltertoexcludepaths() {
    return cdktf.Fn.tolist(this.getListAttribute('macfiltertoexcludepaths'));
  }
  public set macfiltertoexcludepaths(value: string[]) {
    this._macfiltertoexcludepaths = value;
  }
  public resetMacfiltertoexcludepaths() {
    this._macfiltertoexcludepaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macfiltertoexcludepathsInput() {
    return this._macfiltertoexcludepaths;
  }

  // macincludedpaths - computed: true, optional: true, required: false
  private _macincludedpaths?: string[]; 
  public get macincludedpaths() {
    return cdktf.Fn.tolist(this.getListAttribute('macincludedpaths'));
  }
  public set macincludedpaths(value: string[]) {
    this._macincludedpaths = value;
  }
  public resetMacincludedpaths() {
    this._macincludedpaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macincludedpathsInput() {
    return this._macincludedpaths;
  }

  // unixexcludedpaths - computed: true, optional: true, required: false
  private _unixexcludedpaths?: string[]; 
  public get unixexcludedpaths() {
    return cdktf.Fn.tolist(this.getListAttribute('unixexcludedpaths'));
  }
  public set unixexcludedpaths(value: string[]) {
    this._unixexcludedpaths = value;
  }
  public resetUnixexcludedpaths() {
    this._unixexcludedpaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixexcludedpathsInput() {
    return this._unixexcludedpaths;
  }

  // unixfiltertoexcludepaths - computed: true, optional: true, required: false
  private _unixfiltertoexcludepaths?: string[]; 
  public get unixfiltertoexcludepaths() {
    return cdktf.Fn.tolist(this.getListAttribute('unixfiltertoexcludepaths'));
  }
  public set unixfiltertoexcludepaths(value: string[]) {
    this._unixfiltertoexcludepaths = value;
  }
  public resetUnixfiltertoexcludepaths() {
    this._unixfiltertoexcludepaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixfiltertoexcludepathsInput() {
    return this._unixfiltertoexcludepaths;
  }

  // unixincludedpaths - computed: true, optional: true, required: false
  private _unixincludedpaths?: string[]; 
  public get unixincludedpaths() {
    return cdktf.Fn.tolist(this.getListAttribute('unixincludedpaths'));
  }
  public set unixincludedpaths(value: string[]) {
    this._unixincludedpaths = value;
  }
  public resetUnixincludedpaths() {
    this._unixincludedpaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixincludedpathsInput() {
    return this._unixincludedpaths;
  }

  // usevssforsystemstate - computed: true, optional: true, required: false
  private _usevssforsystemstate?: string; 
  public get usevssforsystemstate() {
    return this.getStringAttribute('usevssforsystemstate');
  }
  public set usevssforsystemstate(value: string) {
    this._usevssforsystemstate = value;
  }
  public resetUsevssforsystemstate() {
    this._usevssforsystemstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usevssforsystemstateInput() {
    return this._usevssforsystemstate;
  }

  // windowsexcludedpaths - computed: true, optional: true, required: false
  private _windowsexcludedpaths?: string[]; 
  public get windowsexcludedpaths() {
    return cdktf.Fn.tolist(this.getListAttribute('windowsexcludedpaths'));
  }
  public set windowsexcludedpaths(value: string[]) {
    this._windowsexcludedpaths = value;
  }
  public resetWindowsexcludedpaths() {
    this._windowsexcludedpaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsexcludedpathsInput() {
    return this._windowsexcludedpaths;
  }

  // windowsfiltertoexcludepaths - computed: true, optional: true, required: false
  private _windowsfiltertoexcludepaths?: string[]; 
  public get windowsfiltertoexcludepaths() {
    return cdktf.Fn.tolist(this.getListAttribute('windowsfiltertoexcludepaths'));
  }
  public set windowsfiltertoexcludepaths(value: string[]) {
    this._windowsfiltertoexcludepaths = value;
  }
  public resetWindowsfiltertoexcludepaths() {
    this._windowsfiltertoexcludepaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsfiltertoexcludepathsInput() {
    return this._windowsfiltertoexcludepaths;
  }

  // windowsincludedpaths - computed: true, optional: true, required: false
  private _windowsincludedpaths?: string[]; 
  public get windowsincludedpaths() {
    return cdktf.Fn.tolist(this.getListAttribute('windowsincludedpaths'));
  }
  public set windowsincludedpaths(value: string[]) {
    this._windowsincludedpaths = value;
  }
  public resetWindowsincludedpaths() {
    this._windowsincludedpaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsincludedpathsInput() {
    return this._windowsincludedpaths;
  }

  // macnumberofdatareaders - computed: false, optional: true, required: false
  private _macnumberofdatareaders = new PlanServerBackupcontentMacnumberofdatareadersList(this, "macnumberofdatareaders", false);
  public get macnumberofdatareaders() {
    return this._macnumberofdatareaders;
  }
  public putMacnumberofdatareaders(value: PlanServerBackupcontentMacnumberofdatareaders[] | cdktf.IResolvable) {
    this._macnumberofdatareaders.internalValue = value;
  }
  public resetMacnumberofdatareaders() {
    this._macnumberofdatareaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macnumberofdatareadersInput() {
    return this._macnumberofdatareaders.internalValue;
  }

  // unixnumberofdatareaders - computed: false, optional: true, required: false
  private _unixnumberofdatareaders = new PlanServerBackupcontentUnixnumberofdatareadersList(this, "unixnumberofdatareaders", false);
  public get unixnumberofdatareaders() {
    return this._unixnumberofdatareaders;
  }
  public putUnixnumberofdatareaders(value: PlanServerBackupcontentUnixnumberofdatareaders[] | cdktf.IResolvable) {
    this._unixnumberofdatareaders.internalValue = value;
  }
  public resetUnixnumberofdatareaders() {
    this._unixnumberofdatareaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixnumberofdatareadersInput() {
    return this._unixnumberofdatareaders.internalValue;
  }

  // windowsnumberofdatareaders - computed: false, optional: true, required: false
  private _windowsnumberofdatareaders = new PlanServerBackupcontentWindowsnumberofdatareadersList(this, "windowsnumberofdatareaders", false);
  public get windowsnumberofdatareaders() {
    return this._windowsnumberofdatareaders;
  }
  public putWindowsnumberofdatareaders(value: PlanServerBackupcontentWindowsnumberofdatareaders[] | cdktf.IResolvable) {
    this._windowsnumberofdatareaders.internalValue = value;
  }
  public resetWindowsnumberofdatareaders() {
    this._windowsnumberofdatareaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsnumberofdatareadersInput() {
    return this._windowsnumberofdatareaders.internalValue;
  }
}

export class PlanServerBackupcontentList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupcontent[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupcontentOutputReference {
    return new PlanServerBackupcontentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule {
  /**
  * If this is set as true, no need to specify retentionPeriodDays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#isinfiniteretention PlanServer#isinfiniteretention}
  */
  readonly isinfiniteretention?: string;
  /**
  * If this is set, no need to specify isInfiniteRetention as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#retentionperioddays PlanServer#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#type PlanServer#type}
  */
  readonly type?: string;
}

export function planServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleToTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isinfiniteretention: cdktf.stringToTerraform(struct!.isinfiniteretention),
    retentionperioddays: cdktf.numberToTerraform(struct!.retentionperioddays),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function planServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleToHclTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isinfiniteretention: {
      value: cdktf.stringToHclTerraform(struct!.isinfiniteretention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retentionperioddays: {
      value: cdktf.numberToHclTerraform(struct!.retentionperioddays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isinfiniteretention !== undefined) {
      hasAnyValues = true;
      internalValueResult.isinfiniteretention = this._isinfiniteretention;
    }
    if (this._retentionperioddays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionperioddays = this._retentionperioddays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isinfiniteretention = undefined;
      this._retentionperioddays = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isinfiniteretention = value.isinfiniteretention;
      this._retentionperioddays = value.retentionperioddays;
      this._type = value.type;
    }
  }

  // isinfiniteretention - computed: false, optional: true, required: false
  private _isinfiniteretention?: string; 
  public get isinfiniteretention() {
    return this.getStringAttribute('isinfiniteretention');
  }
  public set isinfiniteretention(value: string) {
    this._isinfiniteretention = value;
  }
  public resetIsinfiniteretention() {
    this._isinfiniteretention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isinfiniteretentionInput() {
    return this._isinfiniteretention;
  }

  // retentionperioddays - computed: false, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
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

export class PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleOutputReference {
    return new PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule {
  /**
  * If this is set as true, no need to specify retentionPeriodDays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#isinfiniteretention PlanServer#isinfiniteretention}
  */
  readonly isinfiniteretention?: string;
  /**
  * If this is set, no need to specify isInfiniteRetention as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#retentionperioddays PlanServer#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#type PlanServer#type}
  */
  readonly type?: string;
}

export function planServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleToTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isinfiniteretention: cdktf.stringToTerraform(struct!.isinfiniteretention),
    retentionperioddays: cdktf.numberToTerraform(struct!.retentionperioddays),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function planServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleToHclTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isinfiniteretention: {
      value: cdktf.stringToHclTerraform(struct!.isinfiniteretention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retentionperioddays: {
      value: cdktf.numberToHclTerraform(struct!.retentionperioddays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isinfiniteretention !== undefined) {
      hasAnyValues = true;
      internalValueResult.isinfiniteretention = this._isinfiniteretention;
    }
    if (this._retentionperioddays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionperioddays = this._retentionperioddays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isinfiniteretention = undefined;
      this._retentionperioddays = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isinfiniteretention = value.isinfiniteretention;
      this._retentionperioddays = value.retentionperioddays;
      this._type = value.type;
    }
  }

  // isinfiniteretention - computed: false, optional: true, required: false
  private _isinfiniteretention?: string; 
  public get isinfiniteretention() {
    return this.getStringAttribute('isinfiniteretention');
  }
  public set isinfiniteretention(value: string) {
    this._isinfiniteretention = value;
  }
  public resetIsinfiniteretention() {
    this._isinfiniteretention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isinfiniteretentionInput() {
    return this._isinfiniteretention;
  }

  // retentionperioddays - computed: false, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
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

export class PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleOutputReference {
    return new PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule {
  /**
  * If this is set as true, no need to specify retentionPeriodDays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#isinfiniteretention PlanServer#isinfiniteretention}
  */
  readonly isinfiniteretention?: string;
  /**
  * If this is set, no need to specify isInfiniteRetention as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#retentionperioddays PlanServer#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#type PlanServer#type}
  */
  readonly type?: string;
}

export function planServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleToTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isinfiniteretention: cdktf.stringToTerraform(struct!.isinfiniteretention),
    retentionperioddays: cdktf.numberToTerraform(struct!.retentionperioddays),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function planServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleToHclTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isinfiniteretention: {
      value: cdktf.stringToHclTerraform(struct!.isinfiniteretention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retentionperioddays: {
      value: cdktf.numberToHclTerraform(struct!.retentionperioddays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isinfiniteretention !== undefined) {
      hasAnyValues = true;
      internalValueResult.isinfiniteretention = this._isinfiniteretention;
    }
    if (this._retentionperioddays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionperioddays = this._retentionperioddays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isinfiniteretention = undefined;
      this._retentionperioddays = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isinfiniteretention = value.isinfiniteretention;
      this._retentionperioddays = value.retentionperioddays;
      this._type = value.type;
    }
  }

  // isinfiniteretention - computed: false, optional: true, required: false
  private _isinfiniteretention?: string; 
  public get isinfiniteretention() {
    return this.getStringAttribute('isinfiniteretention');
  }
  public set isinfiniteretention(value: string) {
    this._isinfiniteretention = value;
  }
  public resetIsinfiniteretention() {
    this._isinfiniteretention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isinfiniteretentionInput() {
    return this._isinfiniteretention;
  }

  // retentionperioddays - computed: false, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
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

export class PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleOutputReference {
    return new PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsExtendedretentionrules {
  /**
  * firstextendedretentionrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#firstextendedretentionrule PlanServer#firstextendedretentionrule}
  */
  readonly firstextendedretentionrule?: PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule[] | cdktf.IResolvable;
  /**
  * secondextendedretentionrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#secondextendedretentionrule PlanServer#secondextendedretentionrule}
  */
  readonly secondextendedretentionrule?: PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule[] | cdktf.IResolvable;
  /**
  * thirdextendedretentionrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#thirdextendedretentionrule PlanServer#thirdextendedretentionrule}
  */
  readonly thirdextendedretentionrule?: PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule[] | cdktf.IResolvable;
}

export function planServerBackupdestinationsExtendedretentionrulesToTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firstextendedretentionrule: cdktf.listMapper(planServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleToTerraform, true)(struct!.firstextendedretentionrule),
    secondextendedretentionrule: cdktf.listMapper(planServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleToTerraform, true)(struct!.secondextendedretentionrule),
    thirdextendedretentionrule: cdktf.listMapper(planServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleToTerraform, true)(struct!.thirdextendedretentionrule),
  }
}


export function planServerBackupdestinationsExtendedretentionrulesToHclTerraform(struct?: PlanServerBackupdestinationsExtendedretentionrules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firstextendedretentionrule: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleToHclTerraform, true)(struct!.firstextendedretentionrule),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleList",
    },
    secondextendedretentionrule: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleToHclTerraform, true)(struct!.secondextendedretentionrule),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleList",
    },
    thirdextendedretentionrule: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleToHclTerraform, true)(struct!.thirdextendedretentionrule),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerBackupdestinationsExtendedretentionrulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsExtendedretentionrules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstextendedretentionrule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstextendedretentionrule = this._firstextendedretentionrule?.internalValue;
    }
    if (this._secondextendedretentionrule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondextendedretentionrule = this._secondextendedretentionrule?.internalValue;
    }
    if (this._thirdextendedretentionrule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdextendedretentionrule = this._thirdextendedretentionrule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupdestinationsExtendedretentionrules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstextendedretentionrule.internalValue = undefined;
      this._secondextendedretentionrule.internalValue = undefined;
      this._thirdextendedretentionrule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstextendedretentionrule.internalValue = value.firstextendedretentionrule;
      this._secondextendedretentionrule.internalValue = value.secondextendedretentionrule;
      this._thirdextendedretentionrule.internalValue = value.thirdextendedretentionrule;
    }
  }

  // firstextendedretentionrule - computed: false, optional: true, required: false
  private _firstextendedretentionrule = new PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionruleList(this, "firstextendedretentionrule", false);
  public get firstextendedretentionrule() {
    return this._firstextendedretentionrule;
  }
  public putFirstextendedretentionrule(value: PlanServerBackupdestinationsExtendedretentionrulesFirstextendedretentionrule[] | cdktf.IResolvable) {
    this._firstextendedretentionrule.internalValue = value;
  }
  public resetFirstextendedretentionrule() {
    this._firstextendedretentionrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstextendedretentionruleInput() {
    return this._firstextendedretentionrule.internalValue;
  }

  // secondextendedretentionrule - computed: false, optional: true, required: false
  private _secondextendedretentionrule = new PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionruleList(this, "secondextendedretentionrule", false);
  public get secondextendedretentionrule() {
    return this._secondextendedretentionrule;
  }
  public putSecondextendedretentionrule(value: PlanServerBackupdestinationsExtendedretentionrulesSecondextendedretentionrule[] | cdktf.IResolvable) {
    this._secondextendedretentionrule.internalValue = value;
  }
  public resetSecondextendedretentionrule() {
    this._secondextendedretentionrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondextendedretentionruleInput() {
    return this._secondextendedretentionrule.internalValue;
  }

  // thirdextendedretentionrule - computed: false, optional: true, required: false
  private _thirdextendedretentionrule = new PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionruleList(this, "thirdextendedretentionrule", false);
  public get thirdextendedretentionrule() {
    return this._thirdextendedretentionrule;
  }
  public putThirdextendedretentionrule(value: PlanServerBackupdestinationsExtendedretentionrulesThirdextendedretentionrule[] | cdktf.IResolvable) {
    this._thirdextendedretentionrule.internalValue = value;
  }
  public resetThirdextendedretentionrule() {
    this._thirdextendedretentionrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdextendedretentionruleInput() {
    return this._thirdextendedretentionrule.internalValue;
  }
}

export class PlanServerBackupdestinationsExtendedretentionrulesList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsExtendedretentionrules[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsExtendedretentionrulesOutputReference {
    return new PlanServerBackupdestinationsExtendedretentionrulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsMappingsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerBackupdestinationsMappingsSourceToTerraform(struct?: PlanServerBackupdestinationsMappingsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerBackupdestinationsMappingsSourceToHclTerraform(struct?: PlanServerBackupdestinationsMappingsSource | cdktf.IResolvable): any {
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

export class PlanServerBackupdestinationsMappingsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsMappingsSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerBackupdestinationsMappingsSource | cdktf.IResolvable | undefined) {
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
}

export class PlanServerBackupdestinationsMappingsSourceList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsMappingsSource[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsMappingsSourceOutputReference {
    return new PlanServerBackupdestinationsMappingsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsMappingsSourcevendor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerBackupdestinationsMappingsSourcevendorToTerraform(struct?: PlanServerBackupdestinationsMappingsSourcevendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerBackupdestinationsMappingsSourcevendorToHclTerraform(struct?: PlanServerBackupdestinationsMappingsSourcevendor | cdktf.IResolvable): any {
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

export class PlanServerBackupdestinationsMappingsSourcevendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsMappingsSourcevendor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerBackupdestinationsMappingsSourcevendor | cdktf.IResolvable | undefined) {
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
}

export class PlanServerBackupdestinationsMappingsSourcevendorList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsMappingsSourcevendor[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsMappingsSourcevendorOutputReference {
    return new PlanServerBackupdestinationsMappingsSourcevendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsMappingsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerBackupdestinationsMappingsTargetToTerraform(struct?: PlanServerBackupdestinationsMappingsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerBackupdestinationsMappingsTargetToHclTerraform(struct?: PlanServerBackupdestinationsMappingsTarget | cdktf.IResolvable): any {
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

export class PlanServerBackupdestinationsMappingsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsMappingsTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerBackupdestinationsMappingsTarget | cdktf.IResolvable | undefined) {
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
}

export class PlanServerBackupdestinationsMappingsTargetList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsMappingsTarget[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsMappingsTargetOutputReference {
    return new PlanServerBackupdestinationsMappingsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsMappingsTargetvendor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerBackupdestinationsMappingsTargetvendorToTerraform(struct?: PlanServerBackupdestinationsMappingsTargetvendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerBackupdestinationsMappingsTargetvendorToHclTerraform(struct?: PlanServerBackupdestinationsMappingsTargetvendor | cdktf.IResolvable): any {
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

export class PlanServerBackupdestinationsMappingsTargetvendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsMappingsTargetvendor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerBackupdestinationsMappingsTargetvendor | cdktf.IResolvable | undefined) {
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
}

export class PlanServerBackupdestinationsMappingsTargetvendorList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsMappingsTargetvendor[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsMappingsTargetvendorOutputReference {
    return new PlanServerBackupdestinationsMappingsTargetvendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsMappings {
  /**
  * Snapshot vendors available for Snap Copy mappings [NETAPP, AMAZON, PURE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#vendor PlanServer#vendor}
  */
  readonly vendor?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#source PlanServer#source}
  */
  readonly source?: PlanServerBackupdestinationsMappingsSource[] | cdktf.IResolvable;
  /**
  * sourcevendor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#sourcevendor PlanServer#sourcevendor}
  */
  readonly sourcevendor?: PlanServerBackupdestinationsMappingsSourcevendor[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#target PlanServer#target}
  */
  readonly target?: PlanServerBackupdestinationsMappingsTarget[] | cdktf.IResolvable;
  /**
  * targetvendor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#targetvendor PlanServer#targetvendor}
  */
  readonly targetvendor?: PlanServerBackupdestinationsMappingsTargetvendor[] | cdktf.IResolvable;
}

export function planServerBackupdestinationsMappingsToTerraform(struct?: PlanServerBackupdestinationsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vendor: cdktf.stringToTerraform(struct!.vendor),
    source: cdktf.listMapper(planServerBackupdestinationsMappingsSourceToTerraform, true)(struct!.source),
    sourcevendor: cdktf.listMapper(planServerBackupdestinationsMappingsSourcevendorToTerraform, true)(struct!.sourcevendor),
    target: cdktf.listMapper(planServerBackupdestinationsMappingsTargetToTerraform, true)(struct!.target),
    targetvendor: cdktf.listMapper(planServerBackupdestinationsMappingsTargetvendorToTerraform, true)(struct!.targetvendor),
  }
}


export function planServerBackupdestinationsMappingsToHclTerraform(struct?: PlanServerBackupdestinationsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsMappingsSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsMappingsSourceList",
    },
    sourcevendor: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsMappingsSourcevendorToHclTerraform, true)(struct!.sourcevendor),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsMappingsSourcevendorList",
    },
    target: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsMappingsTargetToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsMappingsTargetList",
    },
    targetvendor: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsMappingsTargetvendorToHclTerraform, true)(struct!.targetvendor),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsMappingsTargetvendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerBackupdestinationsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sourcevendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcevendor = this._sourcevendor?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._targetvendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetvendor = this._targetvendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupdestinationsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vendor = undefined;
      this._source.internalValue = undefined;
      this._sourcevendor.internalValue = undefined;
      this._target.internalValue = undefined;
      this._targetvendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vendor = value.vendor;
      this._source.internalValue = value.source;
      this._sourcevendor.internalValue = value.sourcevendor;
      this._target.internalValue = value.target;
      this._targetvendor.internalValue = value.targetvendor;
    }
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // source - computed: false, optional: true, required: false
  private _source = new PlanServerBackupdestinationsMappingsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: PlanServerBackupdestinationsMappingsSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sourcevendor - computed: false, optional: true, required: false
  private _sourcevendor = new PlanServerBackupdestinationsMappingsSourcevendorList(this, "sourcevendor", false);
  public get sourcevendor() {
    return this._sourcevendor;
  }
  public putSourcevendor(value: PlanServerBackupdestinationsMappingsSourcevendor[] | cdktf.IResolvable) {
    this._sourcevendor.internalValue = value;
  }
  public resetSourcevendor() {
    this._sourcevendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcevendorInput() {
    return this._sourcevendor.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new PlanServerBackupdestinationsMappingsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: PlanServerBackupdestinationsMappingsTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // targetvendor - computed: false, optional: true, required: false
  private _targetvendor = new PlanServerBackupdestinationsMappingsTargetvendorList(this, "targetvendor", false);
  public get targetvendor() {
    return this._targetvendor;
  }
  public putTargetvendor(value: PlanServerBackupdestinationsMappingsTargetvendor[] | cdktf.IResolvable) {
    this._targetvendor.internalValue = value;
  }
  public resetTargetvendor() {
    this._targetvendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvendorInput() {
    return this._targetvendor.internalValue;
  }
}

export class PlanServerBackupdestinationsMappingsList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsMappings[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsMappingsOutputReference {
    return new PlanServerBackupdestinationsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerBackupdestinationsRegionToTerraform(struct?: PlanServerBackupdestinationsRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerBackupdestinationsRegionToHclTerraform(struct?: PlanServerBackupdestinationsRegion | cdktf.IResolvable): any {
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

export class PlanServerBackupdestinationsRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsRegion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerBackupdestinationsRegion | cdktf.IResolvable | undefined) {
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
}

export class PlanServerBackupdestinationsRegionList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsRegion[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsRegionOutputReference {
    return new PlanServerBackupdestinationsRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsSourcecopy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerBackupdestinationsSourcecopyToTerraform(struct?: PlanServerBackupdestinationsSourcecopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerBackupdestinationsSourcecopyToHclTerraform(struct?: PlanServerBackupdestinationsSourcecopy | cdktf.IResolvable): any {
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

export class PlanServerBackupdestinationsSourcecopyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsSourcecopy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerBackupdestinationsSourcecopy | cdktf.IResolvable | undefined) {
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
}

export class PlanServerBackupdestinationsSourcecopyList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsSourcecopy[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsSourcecopyOutputReference {
    return new PlanServerBackupdestinationsSourcecopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinationsStoragepool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerBackupdestinationsStoragepoolToTerraform(struct?: PlanServerBackupdestinationsStoragepool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerBackupdestinationsStoragepoolToHclTerraform(struct?: PlanServerBackupdestinationsStoragepool | cdktf.IResolvable): any {
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

export class PlanServerBackupdestinationsStoragepoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinationsStoragepool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerBackupdestinationsStoragepool | cdktf.IResolvable | undefined) {
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
}

export class PlanServerBackupdestinationsStoragepoolList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinationsStoragepool[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsStoragepoolOutputReference {
    return new PlanServerBackupdestinationsStoragepoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerBackupdestinations {
  /**
  * Backup destination details. Enter the name during creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupdestinationname PlanServer#backupdestinationname}
  */
  readonly backupdestinationname?: string;
  /**
  * Backup start time in seconds. The time is provided in unix time format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupstarttime PlanServer#backupstarttime}
  */
  readonly backupstarttime?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupstocopy PlanServer#backupstocopy}
  */
  readonly backupstocopy?: string;
  /**
  * Which type of backup type should be copied for the given backup destination when backup type is not all jobs. Default is LAST while adding new backup destination. [FIRST, LAST]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#fullbackuptypestocopy PlanServer#fullbackuptypestocopy}
  */
  readonly fullbackuptypestocopy?: string;
  /**
  * Is this a mirror copy? Only considered when isSnapCopy is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#ismirrorcopy PlanServer#ismirrorcopy}
  */
  readonly ismirrorcopy?: string;
  /**
  * Is this a snap copy? If isMirrorCopy is not set, then default is Vault/Replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#issnapcopy PlanServer#issnapcopy}
  */
  readonly issnapcopy?: string;
  /**
  * Only for snap copy. Enabling this changes SVM Mapping  to NetApp cloud targets only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#netappcloudtarget PlanServer#netappcloudtarget}
  */
  readonly netappcloudtarget?: string;
  /**
  * Flag to specify if primary storage is copy data management enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#optimizeforinstantclone PlanServer#optimizeforinstantclone}
  */
  readonly optimizeforinstantclone?: string;
  /**
  * Tells if this copy should use storage pool retention period days or the retention defined for this copy. Set as true to use retention defined on this copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#overrideretentionsettings PlanServer#overrideretentionsettings}
  */
  readonly overrideretentionsettings?: string;
  /**
  * Retention period in days. -1 can be specified for infinite retention. If this and snapRecoveryPoints both are not specified, this takes  precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#retentionperioddays PlanServer#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * Which type of retention rule should be used for the given backup destination [RETENTION_PERIOD, SNAP_RECOVERY_POINTS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#retentionruletype PlanServer#retentionruletype}
  */
  readonly retentionruletype?: string;
  /**
  * Number of snap recovery points for snap copy for retention. Can be specified instead of retention period in Days for snap copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#snaprecoverypoints PlanServer#snaprecoverypoints}
  */
  readonly snaprecoverypoints?: number;
  /**
  * [ALL, DISK, CLOUD, HYPERSCALE, TAPE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#storagetype PlanServer#storagetype}
  */
  readonly storagetype?: string;
  /**
  * Use extended retention rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#useextendedretentionrules PlanServer#useextendedretentionrules}
  */
  readonly useextendedretentionrules?: string;
  /**
  * extendedretentionrules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#extendedretentionrules PlanServer#extendedretentionrules}
  */
  readonly extendedretentionrules?: PlanServerBackupdestinationsExtendedretentionrules[] | cdktf.IResolvable;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#mappings PlanServer#mappings}
  */
  readonly mappings?: PlanServerBackupdestinationsMappings[] | cdktf.IResolvable;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#region PlanServer#region}
  */
  readonly region?: PlanServerBackupdestinationsRegion[] | cdktf.IResolvable;
  /**
  * sourcecopy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#sourcecopy PlanServer#sourcecopy}
  */
  readonly sourcecopy?: PlanServerBackupdestinationsSourcecopy[] | cdktf.IResolvable;
  /**
  * storagepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#storagepool PlanServer#storagepool}
  */
  readonly storagepool: PlanServerBackupdestinationsStoragepool[] | cdktf.IResolvable;
}

export function planServerBackupdestinationsToTerraform(struct?: PlanServerBackupdestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupdestinationname: cdktf.stringToTerraform(struct!.backupdestinationname),
    backupstarttime: cdktf.numberToTerraform(struct!.backupstarttime),
    backupstocopy: cdktf.stringToTerraform(struct!.backupstocopy),
    fullbackuptypestocopy: cdktf.stringToTerraform(struct!.fullbackuptypestocopy),
    ismirrorcopy: cdktf.stringToTerraform(struct!.ismirrorcopy),
    issnapcopy: cdktf.stringToTerraform(struct!.issnapcopy),
    netappcloudtarget: cdktf.stringToTerraform(struct!.netappcloudtarget),
    optimizeforinstantclone: cdktf.stringToTerraform(struct!.optimizeforinstantclone),
    overrideretentionsettings: cdktf.stringToTerraform(struct!.overrideretentionsettings),
    retentionperioddays: cdktf.numberToTerraform(struct!.retentionperioddays),
    retentionruletype: cdktf.stringToTerraform(struct!.retentionruletype),
    snaprecoverypoints: cdktf.numberToTerraform(struct!.snaprecoverypoints),
    storagetype: cdktf.stringToTerraform(struct!.storagetype),
    useextendedretentionrules: cdktf.stringToTerraform(struct!.useextendedretentionrules),
    extendedretentionrules: cdktf.listMapper(planServerBackupdestinationsExtendedretentionrulesToTerraform, true)(struct!.extendedretentionrules),
    mappings: cdktf.listMapper(planServerBackupdestinationsMappingsToTerraform, true)(struct!.mappings),
    region: cdktf.listMapper(planServerBackupdestinationsRegionToTerraform, true)(struct!.region),
    sourcecopy: cdktf.listMapper(planServerBackupdestinationsSourcecopyToTerraform, true)(struct!.sourcecopy),
    storagepool: cdktf.listMapper(planServerBackupdestinationsStoragepoolToTerraform, true)(struct!.storagepool),
  }
}


export function planServerBackupdestinationsToHclTerraform(struct?: PlanServerBackupdestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupdestinationname: {
      value: cdktf.stringToHclTerraform(struct!.backupdestinationname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backupstarttime: {
      value: cdktf.numberToHclTerraform(struct!.backupstarttime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backupstocopy: {
      value: cdktf.stringToHclTerraform(struct!.backupstocopy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fullbackuptypestocopy: {
      value: cdktf.stringToHclTerraform(struct!.fullbackuptypestocopy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ismirrorcopy: {
      value: cdktf.stringToHclTerraform(struct!.ismirrorcopy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issnapcopy: {
      value: cdktf.stringToHclTerraform(struct!.issnapcopy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netappcloudtarget: {
      value: cdktf.stringToHclTerraform(struct!.netappcloudtarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optimizeforinstantclone: {
      value: cdktf.stringToHclTerraform(struct!.optimizeforinstantclone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrideretentionsettings: {
      value: cdktf.stringToHclTerraform(struct!.overrideretentionsettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retentionperioddays: {
      value: cdktf.numberToHclTerraform(struct!.retentionperioddays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retentionruletype: {
      value: cdktf.stringToHclTerraform(struct!.retentionruletype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snaprecoverypoints: {
      value: cdktf.numberToHclTerraform(struct!.snaprecoverypoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storagetype: {
      value: cdktf.stringToHclTerraform(struct!.storagetype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    useextendedretentionrules: {
      value: cdktf.stringToHclTerraform(struct!.useextendedretentionrules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extendedretentionrules: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsExtendedretentionrulesToHclTerraform, true)(struct!.extendedretentionrules),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsExtendedretentionrulesList",
    },
    mappings: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsMappingsToHclTerraform, true)(struct!.mappings),
      isBlock: true,
      type: "set",
      storageClassType: "PlanServerBackupdestinationsMappingsList",
    },
    region: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsRegionToHclTerraform, true)(struct!.region),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsRegionList",
    },
    sourcecopy: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsSourcecopyToHclTerraform, true)(struct!.sourcecopy),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsSourcecopyList",
    },
    storagepool: {
      value: cdktf.listMapperHcl(planServerBackupdestinationsStoragepoolToHclTerraform, true)(struct!.storagepool),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerBackupdestinationsStoragepoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerBackupdestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerBackupdestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupdestinationname !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupdestinationname = this._backupdestinationname;
    }
    if (this._backupstarttime !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupstarttime = this._backupstarttime;
    }
    if (this._backupstocopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupstocopy = this._backupstocopy;
    }
    if (this._fullbackuptypestocopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullbackuptypestocopy = this._fullbackuptypestocopy;
    }
    if (this._ismirrorcopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismirrorcopy = this._ismirrorcopy;
    }
    if (this._issnapcopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.issnapcopy = this._issnapcopy;
    }
    if (this._netappcloudtarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.netappcloudtarget = this._netappcloudtarget;
    }
    if (this._optimizeforinstantclone !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizeforinstantclone = this._optimizeforinstantclone;
    }
    if (this._overrideretentionsettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideretentionsettings = this._overrideretentionsettings;
    }
    if (this._retentionperioddays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionperioddays = this._retentionperioddays;
    }
    if (this._retentionruletype !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionruletype = this._retentionruletype;
    }
    if (this._snaprecoverypoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.snaprecoverypoints = this._snaprecoverypoints;
    }
    if (this._storagetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagetype = this._storagetype;
    }
    if (this._useextendedretentionrules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useextendedretentionrules = this._useextendedretentionrules;
    }
    if (this._extendedretentionrules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedretentionrules = this._extendedretentionrules?.internalValue;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._sourcecopy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcecopy = this._sourcecopy?.internalValue;
    }
    if (this._storagepool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagepool = this._storagepool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerBackupdestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupdestinationname = undefined;
      this._backupstarttime = undefined;
      this._backupstocopy = undefined;
      this._fullbackuptypestocopy = undefined;
      this._ismirrorcopy = undefined;
      this._issnapcopy = undefined;
      this._netappcloudtarget = undefined;
      this._optimizeforinstantclone = undefined;
      this._overrideretentionsettings = undefined;
      this._retentionperioddays = undefined;
      this._retentionruletype = undefined;
      this._snaprecoverypoints = undefined;
      this._storagetype = undefined;
      this._useextendedretentionrules = undefined;
      this._extendedretentionrules.internalValue = undefined;
      this._mappings.internalValue = undefined;
      this._region.internalValue = undefined;
      this._sourcecopy.internalValue = undefined;
      this._storagepool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupdestinationname = value.backupdestinationname;
      this._backupstarttime = value.backupstarttime;
      this._backupstocopy = value.backupstocopy;
      this._fullbackuptypestocopy = value.fullbackuptypestocopy;
      this._ismirrorcopy = value.ismirrorcopy;
      this._issnapcopy = value.issnapcopy;
      this._netappcloudtarget = value.netappcloudtarget;
      this._optimizeforinstantclone = value.optimizeforinstantclone;
      this._overrideretentionsettings = value.overrideretentionsettings;
      this._retentionperioddays = value.retentionperioddays;
      this._retentionruletype = value.retentionruletype;
      this._snaprecoverypoints = value.snaprecoverypoints;
      this._storagetype = value.storagetype;
      this._useextendedretentionrules = value.useextendedretentionrules;
      this._extendedretentionrules.internalValue = value.extendedretentionrules;
      this._mappings.internalValue = value.mappings;
      this._region.internalValue = value.region;
      this._sourcecopy.internalValue = value.sourcecopy;
      this._storagepool.internalValue = value.storagepool;
    }
  }

  // backupdestinationname - computed: false, optional: true, required: false
  private _backupdestinationname?: string; 
  public get backupdestinationname() {
    return this.getStringAttribute('backupdestinationname');
  }
  public set backupdestinationname(value: string) {
    this._backupdestinationname = value;
  }
  public resetBackupdestinationname() {
    this._backupdestinationname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupdestinationnameInput() {
    return this._backupdestinationname;
  }

  // backupstarttime - computed: false, optional: true, required: false
  private _backupstarttime?: number; 
  public get backupstarttime() {
    return this.getNumberAttribute('backupstarttime');
  }
  public set backupstarttime(value: number) {
    this._backupstarttime = value;
  }
  public resetBackupstarttime() {
    this._backupstarttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstarttimeInput() {
    return this._backupstarttime;
  }

  // backupstocopy - computed: false, optional: true, required: false
  private _backupstocopy?: string; 
  public get backupstocopy() {
    return this.getStringAttribute('backupstocopy');
  }
  public set backupstocopy(value: string) {
    this._backupstocopy = value;
  }
  public resetBackupstocopy() {
    this._backupstocopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstocopyInput() {
    return this._backupstocopy;
  }

  // fullbackuptypestocopy - computed: false, optional: true, required: false
  private _fullbackuptypestocopy?: string; 
  public get fullbackuptypestocopy() {
    return this.getStringAttribute('fullbackuptypestocopy');
  }
  public set fullbackuptypestocopy(value: string) {
    this._fullbackuptypestocopy = value;
  }
  public resetFullbackuptypestocopy() {
    this._fullbackuptypestocopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullbackuptypestocopyInput() {
    return this._fullbackuptypestocopy;
  }

  // ismirrorcopy - computed: false, optional: true, required: false
  private _ismirrorcopy?: string; 
  public get ismirrorcopy() {
    return this.getStringAttribute('ismirrorcopy');
  }
  public set ismirrorcopy(value: string) {
    this._ismirrorcopy = value;
  }
  public resetIsmirrorcopy() {
    this._ismirrorcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismirrorcopyInput() {
    return this._ismirrorcopy;
  }

  // issnapcopy - computed: false, optional: true, required: false
  private _issnapcopy?: string; 
  public get issnapcopy() {
    return this.getStringAttribute('issnapcopy');
  }
  public set issnapcopy(value: string) {
    this._issnapcopy = value;
  }
  public resetIssnapcopy() {
    this._issnapcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issnapcopyInput() {
    return this._issnapcopy;
  }

  // netappcloudtarget - computed: false, optional: true, required: false
  private _netappcloudtarget?: string; 
  public get netappcloudtarget() {
    return this.getStringAttribute('netappcloudtarget');
  }
  public set netappcloudtarget(value: string) {
    this._netappcloudtarget = value;
  }
  public resetNetappcloudtarget() {
    this._netappcloudtarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappcloudtargetInput() {
    return this._netappcloudtarget;
  }

  // optimizeforinstantclone - computed: false, optional: true, required: false
  private _optimizeforinstantclone?: string; 
  public get optimizeforinstantclone() {
    return this.getStringAttribute('optimizeforinstantclone');
  }
  public set optimizeforinstantclone(value: string) {
    this._optimizeforinstantclone = value;
  }
  public resetOptimizeforinstantclone() {
    this._optimizeforinstantclone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeforinstantcloneInput() {
    return this._optimizeforinstantclone;
  }

  // overrideretentionsettings - computed: false, optional: true, required: false
  private _overrideretentionsettings?: string; 
  public get overrideretentionsettings() {
    return this.getStringAttribute('overrideretentionsettings');
  }
  public set overrideretentionsettings(value: string) {
    this._overrideretentionsettings = value;
  }
  public resetOverrideretentionsettings() {
    this._overrideretentionsettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideretentionsettingsInput() {
    return this._overrideretentionsettings;
  }

  // retentionperioddays - computed: false, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // retentionruletype - computed: false, optional: true, required: false
  private _retentionruletype?: string; 
  public get retentionruletype() {
    return this.getStringAttribute('retentionruletype');
  }
  public set retentionruletype(value: string) {
    this._retentionruletype = value;
  }
  public resetRetentionruletype() {
    this._retentionruletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionruletypeInput() {
    return this._retentionruletype;
  }

  // snaprecoverypoints - computed: false, optional: true, required: false
  private _snaprecoverypoints?: number; 
  public get snaprecoverypoints() {
    return this.getNumberAttribute('snaprecoverypoints');
  }
  public set snaprecoverypoints(value: number) {
    this._snaprecoverypoints = value;
  }
  public resetSnaprecoverypoints() {
    this._snaprecoverypoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaprecoverypointsInput() {
    return this._snaprecoverypoints;
  }

  // storagetype - computed: false, optional: true, required: false
  private _storagetype?: string; 
  public get storagetype() {
    return this.getStringAttribute('storagetype');
  }
  public set storagetype(value: string) {
    this._storagetype = value;
  }
  public resetStoragetype() {
    this._storagetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagetypeInput() {
    return this._storagetype;
  }

  // useextendedretentionrules - computed: false, optional: true, required: false
  private _useextendedretentionrules?: string; 
  public get useextendedretentionrules() {
    return this.getStringAttribute('useextendedretentionrules');
  }
  public set useextendedretentionrules(value: string) {
    this._useextendedretentionrules = value;
  }
  public resetUseextendedretentionrules() {
    this._useextendedretentionrules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useextendedretentionrulesInput() {
    return this._useextendedretentionrules;
  }

  // extendedretentionrules - computed: false, optional: true, required: false
  private _extendedretentionrules = new PlanServerBackupdestinationsExtendedretentionrulesList(this, "extendedretentionrules", false);
  public get extendedretentionrules() {
    return this._extendedretentionrules;
  }
  public putExtendedretentionrules(value: PlanServerBackupdestinationsExtendedretentionrules[] | cdktf.IResolvable) {
    this._extendedretentionrules.internalValue = value;
  }
  public resetExtendedretentionrules() {
    this._extendedretentionrules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedretentionrulesInput() {
    return this._extendedretentionrules.internalValue;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new PlanServerBackupdestinationsMappingsList(this, "mappings", true);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: PlanServerBackupdestinationsMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region = new PlanServerBackupdestinationsRegionList(this, "region", false);
  public get region() {
    return this._region;
  }
  public putRegion(value: PlanServerBackupdestinationsRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // sourcecopy - computed: false, optional: true, required: false
  private _sourcecopy = new PlanServerBackupdestinationsSourcecopyList(this, "sourcecopy", false);
  public get sourcecopy() {
    return this._sourcecopy;
  }
  public putSourcecopy(value: PlanServerBackupdestinationsSourcecopy[] | cdktf.IResolvable) {
    this._sourcecopy.internalValue = value;
  }
  public resetSourcecopy() {
    this._sourcecopy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcecopyInput() {
    return this._sourcecopy.internalValue;
  }

  // storagepool - computed: false, optional: false, required: true
  private _storagepool = new PlanServerBackupdestinationsStoragepoolList(this, "storagepool", false);
  public get storagepool() {
    return this._storagepool;
  }
  public putStoragepool(value: PlanServerBackupdestinationsStoragepool[] | cdktf.IResolvable) {
    this._storagepool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagepoolInput() {
    return this._storagepool.internalValue;
  }
}

export class PlanServerBackupdestinationsList extends cdktf.ComplexList {
  public internalValue? : PlanServerBackupdestinations[] | cdktf.IResolvable

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
  public get(index: number): PlanServerBackupdestinationsOutputReference {
    return new PlanServerBackupdestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerDatabaseoptions {
  /**
  * Commit frequency in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#commitfrequencyinhours PlanServer#commitfrequencyinhours}
  */
  readonly commitfrequencyinhours?: number;
  /**
  * Log backup RPO in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#logbackuprpomins PlanServer#logbackuprpomins}
  */
  readonly logbackuprpomins?: number;
  /**
  * Full backup frequency in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#runfullbackupevery PlanServer#runfullbackupevery}
  */
  readonly runfullbackupevery?: number;
  /**
  * Use disk cache for log backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#usediskcacheforlogbackups PlanServer#usediskcacheforlogbackups}
  */
  readonly usediskcacheforlogbackups?: string;
}

export function planServerDatabaseoptionsToTerraform(struct?: PlanServerDatabaseoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commitfrequencyinhours: cdktf.numberToTerraform(struct!.commitfrequencyinhours),
    logbackuprpomins: cdktf.numberToTerraform(struct!.logbackuprpomins),
    runfullbackupevery: cdktf.numberToTerraform(struct!.runfullbackupevery),
    usediskcacheforlogbackups: cdktf.stringToTerraform(struct!.usediskcacheforlogbackups),
  }
}


export function planServerDatabaseoptionsToHclTerraform(struct?: PlanServerDatabaseoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commitfrequencyinhours: {
      value: cdktf.numberToHclTerraform(struct!.commitfrequencyinhours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logbackuprpomins: {
      value: cdktf.numberToHclTerraform(struct!.logbackuprpomins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runfullbackupevery: {
      value: cdktf.numberToHclTerraform(struct!.runfullbackupevery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usediskcacheforlogbackups: {
      value: cdktf.stringToHclTerraform(struct!.usediskcacheforlogbackups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerDatabaseoptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerDatabaseoptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitfrequencyinhours !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitfrequencyinhours = this._commitfrequencyinhours;
    }
    if (this._logbackuprpomins !== undefined) {
      hasAnyValues = true;
      internalValueResult.logbackuprpomins = this._logbackuprpomins;
    }
    if (this._runfullbackupevery !== undefined) {
      hasAnyValues = true;
      internalValueResult.runfullbackupevery = this._runfullbackupevery;
    }
    if (this._usediskcacheforlogbackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.usediskcacheforlogbackups = this._usediskcacheforlogbackups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerDatabaseoptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitfrequencyinhours = undefined;
      this._logbackuprpomins = undefined;
      this._runfullbackupevery = undefined;
      this._usediskcacheforlogbackups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitfrequencyinhours = value.commitfrequencyinhours;
      this._logbackuprpomins = value.logbackuprpomins;
      this._runfullbackupevery = value.runfullbackupevery;
      this._usediskcacheforlogbackups = value.usediskcacheforlogbackups;
    }
  }

  // commitfrequencyinhours - computed: true, optional: true, required: false
  private _commitfrequencyinhours?: number; 
  public get commitfrequencyinhours() {
    return this.getNumberAttribute('commitfrequencyinhours');
  }
  public set commitfrequencyinhours(value: number) {
    this._commitfrequencyinhours = value;
  }
  public resetCommitfrequencyinhours() {
    this._commitfrequencyinhours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitfrequencyinhoursInput() {
    return this._commitfrequencyinhours;
  }

  // logbackuprpomins - computed: true, optional: true, required: false
  private _logbackuprpomins?: number; 
  public get logbackuprpomins() {
    return this.getNumberAttribute('logbackuprpomins');
  }
  public set logbackuprpomins(value: number) {
    this._logbackuprpomins = value;
  }
  public resetLogbackuprpomins() {
    this._logbackuprpomins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logbackuprpominsInput() {
    return this._logbackuprpomins;
  }

  // runfullbackupevery - computed: true, optional: true, required: false
  private _runfullbackupevery?: number; 
  public get runfullbackupevery() {
    return this.getNumberAttribute('runfullbackupevery');
  }
  public set runfullbackupevery(value: number) {
    this._runfullbackupevery = value;
  }
  public resetRunfullbackupevery() {
    this._runfullbackupevery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runfullbackupeveryInput() {
    return this._runfullbackupevery;
  }

  // usediskcacheforlogbackups - computed: true, optional: true, required: false
  private _usediskcacheforlogbackups?: string; 
  public get usediskcacheforlogbackups() {
    return this.getStringAttribute('usediskcacheforlogbackups');
  }
  public set usediskcacheforlogbackups(value: string) {
    this._usediskcacheforlogbackups = value;
  }
  public resetUsediskcacheforlogbackups() {
    this._usediskcacheforlogbackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usediskcacheforlogbackupsInput() {
    return this._usediskcacheforlogbackups;
  }
}

export class PlanServerDatabaseoptionsList extends cdktf.ComplexList {
  public internalValue? : PlanServerDatabaseoptions[] | cdktf.IResolvable

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
  public get(index: number): PlanServerDatabaseoptionsOutputReference {
    return new PlanServerDatabaseoptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerOverrideinheritsettings {
  /**
  * Flag to specify if parent or derived plan backupContent should be used when inherit mode is optional. True - derived, False - Base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupcontent PlanServer#backupcontent}
  */
  readonly backupcontent?: string;
  /**
  * Flag to specify if parent or derived plan backupDestination should be used when inherit mode is optional. True - derived, False - Base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupdestination PlanServer#backupdestination}
  */
  readonly backupdestination?: string;
  /**
  * Flag to specify if parent or derived plan rpo should be used when inherit mode is optional. True - derived, False - Base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#rpo PlanServer#rpo}
  */
  readonly rpo?: string;
}

export function planServerOverrideinheritsettingsToTerraform(struct?: PlanServerOverrideinheritsettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupcontent: cdktf.stringToTerraform(struct!.backupcontent),
    backupdestination: cdktf.stringToTerraform(struct!.backupdestination),
    rpo: cdktf.stringToTerraform(struct!.rpo),
  }
}


export function planServerOverrideinheritsettingsToHclTerraform(struct?: PlanServerOverrideinheritsettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupcontent: {
      value: cdktf.stringToHclTerraform(struct!.backupcontent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backupdestination: {
      value: cdktf.stringToHclTerraform(struct!.backupdestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpo: {
      value: cdktf.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerOverrideinheritsettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerOverrideinheritsettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupcontent !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupcontent = this._backupcontent;
    }
    if (this._backupdestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupdestination = this._backupdestination;
    }
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerOverrideinheritsettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupcontent = undefined;
      this._backupdestination = undefined;
      this._rpo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupcontent = value.backupcontent;
      this._backupdestination = value.backupdestination;
      this._rpo = value.rpo;
    }
  }

  // backupcontent - computed: true, optional: true, required: false
  private _backupcontent?: string; 
  public get backupcontent() {
    return this.getStringAttribute('backupcontent');
  }
  public set backupcontent(value: string) {
    this._backupcontent = value;
  }
  public resetBackupcontent() {
    this._backupcontent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupcontentInput() {
    return this._backupcontent;
  }

  // backupdestination - computed: true, optional: true, required: false
  private _backupdestination?: string; 
  public get backupdestination() {
    return this.getStringAttribute('backupdestination');
  }
  public set backupdestination(value: string) {
    this._backupdestination = value;
  }
  public resetBackupdestination() {
    this._backupdestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupdestinationInput() {
    return this._backupdestination;
  }

  // rpo - computed: true, optional: true, required: false
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  public resetRpo() {
    this._rpo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }
}

export class PlanServerOverrideinheritsettingsList extends cdktf.ComplexList {
  public internalValue? : PlanServerOverrideinheritsettings[] | cdktf.IResolvable

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
  public get(index: number): PlanServerOverrideinheritsettingsOutputReference {
    return new PlanServerOverrideinheritsettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerOverriderestrictions {
  /**
  * [OPTIONAL, MUST, NOT_ALLOWED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupcontent PlanServer#backupcontent}
  */
  readonly backupcontent?: string;
  /**
  * [OPTIONAL, MUST, NOT_ALLOWED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#rpo PlanServer#rpo}
  */
  readonly rpo?: string;
  /**
  * [OPTIONAL, MUST, NOT_ALLOWED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#storagepool PlanServer#storagepool}
  */
  readonly storagepool?: string;
}

export function planServerOverriderestrictionsToTerraform(struct?: PlanServerOverriderestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupcontent: cdktf.stringToTerraform(struct!.backupcontent),
    rpo: cdktf.stringToTerraform(struct!.rpo),
    storagepool: cdktf.stringToTerraform(struct!.storagepool),
  }
}


export function planServerOverriderestrictionsToHclTerraform(struct?: PlanServerOverriderestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupcontent: {
      value: cdktf.stringToHclTerraform(struct!.backupcontent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpo: {
      value: cdktf.stringToHclTerraform(struct!.rpo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storagepool: {
      value: cdktf.stringToHclTerraform(struct!.storagepool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerOverriderestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerOverriderestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupcontent !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupcontent = this._backupcontent;
    }
    if (this._rpo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpo = this._rpo;
    }
    if (this._storagepool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagepool = this._storagepool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerOverriderestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupcontent = undefined;
      this._rpo = undefined;
      this._storagepool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupcontent = value.backupcontent;
      this._rpo = value.rpo;
      this._storagepool = value.storagepool;
    }
  }

  // backupcontent - computed: true, optional: true, required: false
  private _backupcontent?: string; 
  public get backupcontent() {
    return this.getStringAttribute('backupcontent');
  }
  public set backupcontent(value: string) {
    this._backupcontent = value;
  }
  public resetBackupcontent() {
    this._backupcontent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupcontentInput() {
    return this._backupcontent;
  }

  // rpo - computed: true, optional: true, required: false
  private _rpo?: string; 
  public get rpo() {
    return this.getStringAttribute('rpo');
  }
  public set rpo(value: string) {
    this._rpo = value;
  }
  public resetRpo() {
    this._rpo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo;
  }

  // storagepool - computed: true, optional: true, required: false
  private _storagepool?: string; 
  public get storagepool() {
    return this.getStringAttribute('storagepool');
  }
  public set storagepool(value: string) {
    this._storagepool = value;
  }
  public resetStoragepool() {
    this._storagepool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagepoolInput() {
    return this._storagepool;
  }
}

export class PlanServerOverriderestrictionsList extends cdktf.ComplexList {
  public internalValue? : PlanServerOverriderestrictions[] | cdktf.IResolvable

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
  public get(index: number): PlanServerOverriderestrictionsOutputReference {
    return new PlanServerOverriderestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerParentplan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerParentplanToTerraform(struct?: PlanServerParentplan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerParentplanToHclTerraform(struct?: PlanServerParentplan | cdktf.IResolvable): any {
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

export class PlanServerParentplanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerParentplan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerParentplan | cdktf.IResolvable | undefined) {
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

export class PlanServerParentplanList extends cdktf.ComplexList {
  public internalValue? : PlanServerParentplan[] | cdktf.IResolvable

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
  public get(index: number): PlanServerParentplanOutputReference {
    return new PlanServerParentplanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRegiontoconfigure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerRegiontoconfigureToTerraform(struct?: PlanServerRegiontoconfigure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerRegiontoconfigureToHclTerraform(struct?: PlanServerRegiontoconfigure | cdktf.IResolvable): any {
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

export class PlanServerRegiontoconfigureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRegiontoconfigure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerRegiontoconfigure | cdktf.IResolvable | undefined) {
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

export class PlanServerRegiontoconfigureList extends cdktf.ComplexList {
  public internalValue? : PlanServerRegiontoconfigure[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRegiontoconfigureOutputReference {
    return new PlanServerRegiontoconfigureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoBackupfrequencySchedulesScheduleoption {
  /**
  * Commit frequency in hours for disk cache backups from automatic schedules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#commitfrequencyinhours PlanServer#commitfrequencyinhours}
  */
  readonly commitfrequencyinhours?: number;
  /**
  * Number of days between auto conversion of backup level applicable for databases on incremental and differential schedules of server plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#daysbetweenautoconvert PlanServer#daysbetweenautoconvert}
  */
  readonly daysbetweenautoconvert?: number;
  /**
  * total job running time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#jobrunningtimeinmins PlanServer#jobrunningtimeinmins}
  */
  readonly jobrunningtimeinmins?: number;
  /**
  * item backup option for O365 V2 backup jobs [SELECT_ALL, SELECT_NEVER_PROCESSED, SELECT_MEETING_SLA, SELECT_NOT_MEETING_SLA_PROCESSED_ATLEAST_ONCE, SELECT_FAILED_LAST_ATTEMPT, SELECT_PROCESSED_ATLEAST_ONCE, SELECT_NOT_MEETING_SLA, SELECT_MEETING_SLA_NOT_RECENTLY_BACKED_UP]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#o365itemselectionoption PlanServer#o365itemselectionoption}
  */
  readonly o365Itemselectionoption?: string;
  /**
  * Used to enable disk caching feature on databases for automatic schedules on server plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#usediskcacheforlogbackups PlanServer#usediskcacheforlogbackups}
  */
  readonly usediskcacheforlogbackups?: string;
}

export function planServerRpoBackupfrequencySchedulesScheduleoptionToTerraform(struct?: PlanServerRpoBackupfrequencySchedulesScheduleoption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commitfrequencyinhours: cdktf.numberToTerraform(struct!.commitfrequencyinhours),
    daysbetweenautoconvert: cdktf.numberToTerraform(struct!.daysbetweenautoconvert),
    jobrunningtimeinmins: cdktf.numberToTerraform(struct!.jobrunningtimeinmins),
    o365itemselectionoption: cdktf.stringToTerraform(struct!.o365Itemselectionoption),
    usediskcacheforlogbackups: cdktf.stringToTerraform(struct!.usediskcacheforlogbackups),
  }
}


export function planServerRpoBackupfrequencySchedulesScheduleoptionToHclTerraform(struct?: PlanServerRpoBackupfrequencySchedulesScheduleoption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commitfrequencyinhours: {
      value: cdktf.numberToHclTerraform(struct!.commitfrequencyinhours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daysbetweenautoconvert: {
      value: cdktf.numberToHclTerraform(struct!.daysbetweenautoconvert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jobrunningtimeinmins: {
      value: cdktf.numberToHclTerraform(struct!.jobrunningtimeinmins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    o365itemselectionoption: {
      value: cdktf.stringToHclTerraform(struct!.o365Itemselectionoption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usediskcacheforlogbackups: {
      value: cdktf.stringToHclTerraform(struct!.usediskcacheforlogbackups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoBackupfrequencySchedulesScheduleoptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoBackupfrequencySchedulesScheduleoption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitfrequencyinhours !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitfrequencyinhours = this._commitfrequencyinhours;
    }
    if (this._daysbetweenautoconvert !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysbetweenautoconvert = this._daysbetweenautoconvert;
    }
    if (this._jobrunningtimeinmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobrunningtimeinmins = this._jobrunningtimeinmins;
    }
    if (this._o365Itemselectionoption !== undefined) {
      hasAnyValues = true;
      internalValueResult.o365Itemselectionoption = this._o365Itemselectionoption;
    }
    if (this._usediskcacheforlogbackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.usediskcacheforlogbackups = this._usediskcacheforlogbackups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoBackupfrequencySchedulesScheduleoption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitfrequencyinhours = undefined;
      this._daysbetweenautoconvert = undefined;
      this._jobrunningtimeinmins = undefined;
      this._o365Itemselectionoption = undefined;
      this._usediskcacheforlogbackups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitfrequencyinhours = value.commitfrequencyinhours;
      this._daysbetweenautoconvert = value.daysbetweenautoconvert;
      this._jobrunningtimeinmins = value.jobrunningtimeinmins;
      this._o365Itemselectionoption = value.o365Itemselectionoption;
      this._usediskcacheforlogbackups = value.usediskcacheforlogbackups;
    }
  }

  // commitfrequencyinhours - computed: true, optional: true, required: false
  private _commitfrequencyinhours?: number; 
  public get commitfrequencyinhours() {
    return this.getNumberAttribute('commitfrequencyinhours');
  }
  public set commitfrequencyinhours(value: number) {
    this._commitfrequencyinhours = value;
  }
  public resetCommitfrequencyinhours() {
    this._commitfrequencyinhours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitfrequencyinhoursInput() {
    return this._commitfrequencyinhours;
  }

  // daysbetweenautoconvert - computed: true, optional: true, required: false
  private _daysbetweenautoconvert?: number; 
  public get daysbetweenautoconvert() {
    return this.getNumberAttribute('daysbetweenautoconvert');
  }
  public set daysbetweenautoconvert(value: number) {
    this._daysbetweenautoconvert = value;
  }
  public resetDaysbetweenautoconvert() {
    this._daysbetweenautoconvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysbetweenautoconvertInput() {
    return this._daysbetweenautoconvert;
  }

  // jobrunningtimeinmins - computed: true, optional: true, required: false
  private _jobrunningtimeinmins?: number; 
  public get jobrunningtimeinmins() {
    return this.getNumberAttribute('jobrunningtimeinmins');
  }
  public set jobrunningtimeinmins(value: number) {
    this._jobrunningtimeinmins = value;
  }
  public resetJobrunningtimeinmins() {
    this._jobrunningtimeinmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobrunningtimeinminsInput() {
    return this._jobrunningtimeinmins;
  }

  // o365itemselectionoption - computed: true, optional: true, required: false
  private _o365Itemselectionoption?: string; 
  public get o365Itemselectionoption() {
    return this.getStringAttribute('o365itemselectionoption');
  }
  public set o365Itemselectionoption(value: string) {
    this._o365Itemselectionoption = value;
  }
  public resetO365Itemselectionoption() {
    this._o365Itemselectionoption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get o365ItemselectionoptionInput() {
    return this._o365Itemselectionoption;
  }

  // usediskcacheforlogbackups - computed: true, optional: true, required: false
  private _usediskcacheforlogbackups?: string; 
  public get usediskcacheforlogbackups() {
    return this.getStringAttribute('usediskcacheforlogbackups');
  }
  public set usediskcacheforlogbackups(value: string) {
    this._usediskcacheforlogbackups = value;
  }
  public resetUsediskcacheforlogbackups() {
    this._usediskcacheforlogbackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usediskcacheforlogbackupsInput() {
    return this._usediskcacheforlogbackups;
  }
}

export class PlanServerRpoBackupfrequencySchedulesScheduleoptionList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoBackupfrequencySchedulesScheduleoption[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoBackupfrequencySchedulesScheduleoptionOutputReference {
    return new PlanServerRpoBackupfrequencySchedulesScheduleoptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions {
  /**
  * list of dates in a month. For ex: 1, 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#ondates PlanServer#ondates}
  */
  readonly ondates?: number[];
  /**
  * On which days, for ex: MONDAY, FRIDAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#ondayoftheweek PlanServer#ondayoftheweek}
  */
  readonly ondayoftheweek?: string[];
  /**
  * On which week of month, for ex: FIRST, LAST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#onweekofthemonth PlanServer#onweekofthemonth}
  */
  readonly onweekofthemonth?: string[];
}

export function planServerRpoBackupfrequencySchedulesSchedulepatternExceptionsToTerraform(struct?: PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ondates: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ondates),
    ondayoftheweek: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ondayoftheweek),
    onweekofthemonth: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onweekofthemonth),
  }
}


export function planServerRpoBackupfrequencySchedulesSchedulepatternExceptionsToHclTerraform(struct?: PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ondates: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ondates),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    ondayoftheweek: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ondayoftheweek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    onweekofthemonth: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onweekofthemonth),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ondates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ondates = this._ondates;
    }
    if (this._ondayoftheweek !== undefined) {
      hasAnyValues = true;
      internalValueResult.ondayoftheweek = this._ondayoftheweek;
    }
    if (this._onweekofthemonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.onweekofthemonth = this._onweekofthemonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ondates = undefined;
      this._ondayoftheweek = undefined;
      this._onweekofthemonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ondates = value.ondates;
      this._ondayoftheweek = value.ondayoftheweek;
      this._onweekofthemonth = value.onweekofthemonth;
    }
  }

  // ondates - computed: true, optional: true, required: false
  private _ondates?: number[]; 
  public get ondates() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ondates')));
  }
  public set ondates(value: number[]) {
    this._ondates = value;
  }
  public resetOndates() {
    this._ondates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ondatesInput() {
    return this._ondates;
  }

  // ondayoftheweek - computed: true, optional: true, required: false
  private _ondayoftheweek?: string[]; 
  public get ondayoftheweek() {
    return cdktf.Fn.tolist(this.getListAttribute('ondayoftheweek'));
  }
  public set ondayoftheweek(value: string[]) {
    this._ondayoftheweek = value;
  }
  public resetOndayoftheweek() {
    this._ondayoftheweek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ondayoftheweekInput() {
    return this._ondayoftheweek;
  }

  // onweekofthemonth - computed: true, optional: true, required: false
  private _onweekofthemonth?: string[]; 
  public get onweekofthemonth() {
    return cdktf.Fn.tolist(this.getListAttribute('onweekofthemonth'));
  }
  public set onweekofthemonth(value: string[]) {
    this._onweekofthemonth = value;
  }
  public resetOnweekofthemonth() {
    this._onweekofthemonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onweekofthemonthInput() {
    return this._onweekofthemonth;
  }
}

export class PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptionsList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptionsOutputReference {
    return new PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#name PlanServer#name}
  */
  readonly name?: string;
}

export function planServerRpoBackupfrequencySchedulesSchedulepatternTimezoneToTerraform(struct?: PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planServerRpoBackupfrequencySchedulesSchedulepatternTimezoneToHclTerraform(struct?: PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone | cdktf.IResolvable): any {
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

export class PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone | cdktf.IResolvable | undefined) {
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

export class PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezoneList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezoneOutputReference {
    return new PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoBackupfrequencySchedulesSchedulepattern {
  /**
  * Day on which to run the schedule, applicable for monthly, yearly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#dayofmonth PlanServer#dayofmonth}
  */
  readonly dayofmonth?: number;
  /**
  * [SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, DAY, WEEKDAY, WEEKEND_DAYS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#dayofweek PlanServer#dayofweek}
  */
  readonly dayofweek?: string;
  /**
  * No of days between two synthetic full jobs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#daysbetweensyntheticfulls PlanServer#daysbetweensyntheticfulls}
  */
  readonly daysbetweensyntheticfulls?: number;
  /**
  * Schedule end date in epoch format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#enddate PlanServer#enddate}
  */
  readonly enddate?: number;
  /**
  * Frequency of the schedule based on schedule frequency type eg. for Hours, value 2 is 2 hours, for Minutes, 30 is 30 minutes, for Daily, 2 is 2 days. for Monthly 2 is it repeats every 2 months
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#frequency PlanServer#frequency}
  */
  readonly frequency?: number;
  /**
  * The number of mins to force a backup on automatic schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#maxbackupintervalinmins PlanServer#maxbackupintervalinmins}
  */
  readonly maxbackupintervalinmins?: number;
  /**
  * [JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#monthofyear PlanServer#monthofyear}
  */
  readonly monthofyear?: string;
  /**
  * The number of times you want the schedule to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#nooftimes PlanServer#nooftimes}
  */
  readonly nooftimes?: number;
  /**
  * How often in minutes in a day the schedule runs, applicable for daily, weekly, monthly and yearly frequency types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#repeatintervalinminutes PlanServer#repeatintervalinminutes}
  */
  readonly repeatintervalinminutes?: number;
  /**
  * Until what time to repeat the schedule in a day, requires repeatIntervalInMinutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#repeatuntiltime PlanServer#repeatuntiltime}
  */
  readonly repeatuntiltime?: number;
  /**
  * schedule frequency type [MINUTES, DAILY, WEEKLY, MONTHLY, YEARLY, AUTOMATIC]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#schedulefrequencytype PlanServer#schedulefrequencytype}
  */
  readonly schedulefrequencytype: string;
  /**
  * start date of schedule in epoch format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#startdate PlanServer#startdate}
  */
  readonly startdate?: number;
  /**
  * start time of schedule in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#starttime PlanServer#starttime}
  */
  readonly starttime?: number;
  /**
  * Days of the week for weekly frequency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#weeklydays PlanServer#weeklydays}
  */
  readonly weeklydays?: string[];
  /**
  * Specific week of a month [FIRST, SECOND, THIRD, FOURTH, LAST]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#weekofmonth PlanServer#weekofmonth}
  */
  readonly weekofmonth?: string;
  /**
  * exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#exceptions PlanServer#exceptions}
  */
  readonly exceptions?: PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions[] | cdktf.IResolvable;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#timezone PlanServer#timezone}
  */
  readonly timezone?: PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone[] | cdktf.IResolvable;
}

export function planServerRpoBackupfrequencySchedulesSchedulepatternToTerraform(struct?: PlanServerRpoBackupfrequencySchedulesSchedulepattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofmonth: cdktf.numberToTerraform(struct!.dayofmonth),
    dayofweek: cdktf.stringToTerraform(struct!.dayofweek),
    daysbetweensyntheticfulls: cdktf.numberToTerraform(struct!.daysbetweensyntheticfulls),
    enddate: cdktf.numberToTerraform(struct!.enddate),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    maxbackupintervalinmins: cdktf.numberToTerraform(struct!.maxbackupintervalinmins),
    monthofyear: cdktf.stringToTerraform(struct!.monthofyear),
    nooftimes: cdktf.numberToTerraform(struct!.nooftimes),
    repeatintervalinminutes: cdktf.numberToTerraform(struct!.repeatintervalinminutes),
    repeatuntiltime: cdktf.numberToTerraform(struct!.repeatuntiltime),
    schedulefrequencytype: cdktf.stringToTerraform(struct!.schedulefrequencytype),
    startdate: cdktf.numberToTerraform(struct!.startdate),
    starttime: cdktf.numberToTerraform(struct!.starttime),
    weeklydays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weeklydays),
    weekofmonth: cdktf.stringToTerraform(struct!.weekofmonth),
    exceptions: cdktf.listMapper(planServerRpoBackupfrequencySchedulesSchedulepatternExceptionsToTerraform, true)(struct!.exceptions),
    timezone: cdktf.listMapper(planServerRpoBackupfrequencySchedulesSchedulepatternTimezoneToTerraform, true)(struct!.timezone),
  }
}


export function planServerRpoBackupfrequencySchedulesSchedulepatternToHclTerraform(struct?: PlanServerRpoBackupfrequencySchedulesSchedulepattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dayofmonth: {
      value: cdktf.numberToHclTerraform(struct!.dayofmonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dayofweek: {
      value: cdktf.stringToHclTerraform(struct!.dayofweek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daysbetweensyntheticfulls: {
      value: cdktf.numberToHclTerraform(struct!.daysbetweensyntheticfulls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enddate: {
      value: cdktf.numberToHclTerraform(struct!.enddate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxbackupintervalinmins: {
      value: cdktf.numberToHclTerraform(struct!.maxbackupintervalinmins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monthofyear: {
      value: cdktf.stringToHclTerraform(struct!.monthofyear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nooftimes: {
      value: cdktf.numberToHclTerraform(struct!.nooftimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeatintervalinminutes: {
      value: cdktf.numberToHclTerraform(struct!.repeatintervalinminutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeatuntiltime: {
      value: cdktf.numberToHclTerraform(struct!.repeatuntiltime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedulefrequencytype: {
      value: cdktf.stringToHclTerraform(struct!.schedulefrequencytype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startdate: {
      value: cdktf.numberToHclTerraform(struct!.startdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starttime: {
      value: cdktf.numberToHclTerraform(struct!.starttime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weeklydays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weeklydays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weekofmonth: {
      value: cdktf.stringToHclTerraform(struct!.weekofmonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exceptions: {
      value: cdktf.listMapperHcl(planServerRpoBackupfrequencySchedulesSchedulepatternExceptionsToHclTerraform, true)(struct!.exceptions),
      isBlock: true,
      type: "set",
      storageClassType: "PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptionsList",
    },
    timezone: {
      value: cdktf.listMapperHcl(planServerRpoBackupfrequencySchedulesSchedulepatternTimezoneToHclTerraform, true)(struct!.timezone),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoBackupfrequencySchedulesSchedulepatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoBackupfrequencySchedulesSchedulepattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayofmonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofmonth = this._dayofmonth;
    }
    if (this._dayofweek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofweek = this._dayofweek;
    }
    if (this._daysbetweensyntheticfulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysbetweensyntheticfulls = this._daysbetweensyntheticfulls;
    }
    if (this._enddate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enddate = this._enddate;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._maxbackupintervalinmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxbackupintervalinmins = this._maxbackupintervalinmins;
    }
    if (this._monthofyear !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthofyear = this._monthofyear;
    }
    if (this._nooftimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nooftimes = this._nooftimes;
    }
    if (this._repeatintervalinminutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatintervalinminutes = this._repeatintervalinminutes;
    }
    if (this._repeatuntiltime !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatuntiltime = this._repeatuntiltime;
    }
    if (this._schedulefrequencytype !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulefrequencytype = this._schedulefrequencytype;
    }
    if (this._startdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startdate = this._startdate;
    }
    if (this._starttime !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttime = this._starttime;
    }
    if (this._weeklydays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklydays = this._weeklydays;
    }
    if (this._weekofmonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekofmonth = this._weekofmonth;
    }
    if (this._exceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptions = this._exceptions?.internalValue;
    }
    if (this._timezone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoBackupfrequencySchedulesSchedulepattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayofmonth = undefined;
      this._dayofweek = undefined;
      this._daysbetweensyntheticfulls = undefined;
      this._enddate = undefined;
      this._frequency = undefined;
      this._maxbackupintervalinmins = undefined;
      this._monthofyear = undefined;
      this._nooftimes = undefined;
      this._repeatintervalinminutes = undefined;
      this._repeatuntiltime = undefined;
      this._schedulefrequencytype = undefined;
      this._startdate = undefined;
      this._starttime = undefined;
      this._weeklydays = undefined;
      this._weekofmonth = undefined;
      this._exceptions.internalValue = undefined;
      this._timezone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayofmonth = value.dayofmonth;
      this._dayofweek = value.dayofweek;
      this._daysbetweensyntheticfulls = value.daysbetweensyntheticfulls;
      this._enddate = value.enddate;
      this._frequency = value.frequency;
      this._maxbackupintervalinmins = value.maxbackupintervalinmins;
      this._monthofyear = value.monthofyear;
      this._nooftimes = value.nooftimes;
      this._repeatintervalinminutes = value.repeatintervalinminutes;
      this._repeatuntiltime = value.repeatuntiltime;
      this._schedulefrequencytype = value.schedulefrequencytype;
      this._startdate = value.startdate;
      this._starttime = value.starttime;
      this._weeklydays = value.weeklydays;
      this._weekofmonth = value.weekofmonth;
      this._exceptions.internalValue = value.exceptions;
      this._timezone.internalValue = value.timezone;
    }
  }

  // dayofmonth - computed: true, optional: true, required: false
  private _dayofmonth?: number; 
  public get dayofmonth() {
    return this.getNumberAttribute('dayofmonth');
  }
  public set dayofmonth(value: number) {
    this._dayofmonth = value;
  }
  public resetDayofmonth() {
    this._dayofmonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofmonthInput() {
    return this._dayofmonth;
  }

  // dayofweek - computed: true, optional: true, required: false
  private _dayofweek?: string; 
  public get dayofweek() {
    return this.getStringAttribute('dayofweek');
  }
  public set dayofweek(value: string) {
    this._dayofweek = value;
  }
  public resetDayofweek() {
    this._dayofweek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofweekInput() {
    return this._dayofweek;
  }

  // daysbetweensyntheticfulls - computed: true, optional: true, required: false
  private _daysbetweensyntheticfulls?: number; 
  public get daysbetweensyntheticfulls() {
    return this.getNumberAttribute('daysbetweensyntheticfulls');
  }
  public set daysbetweensyntheticfulls(value: number) {
    this._daysbetweensyntheticfulls = value;
  }
  public resetDaysbetweensyntheticfulls() {
    this._daysbetweensyntheticfulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysbetweensyntheticfullsInput() {
    return this._daysbetweensyntheticfulls;
  }

  // enddate - computed: true, optional: true, required: false
  private _enddate?: number; 
  public get enddate() {
    return this.getNumberAttribute('enddate');
  }
  public set enddate(value: number) {
    this._enddate = value;
  }
  public resetEnddate() {
    this._enddate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enddateInput() {
    return this._enddate;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // maxbackupintervalinmins - computed: true, optional: true, required: false
  private _maxbackupintervalinmins?: number; 
  public get maxbackupintervalinmins() {
    return this.getNumberAttribute('maxbackupintervalinmins');
  }
  public set maxbackupintervalinmins(value: number) {
    this._maxbackupintervalinmins = value;
  }
  public resetMaxbackupintervalinmins() {
    this._maxbackupintervalinmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbackupintervalinminsInput() {
    return this._maxbackupintervalinmins;
  }

  // monthofyear - computed: true, optional: true, required: false
  private _monthofyear?: string; 
  public get monthofyear() {
    return this.getStringAttribute('monthofyear');
  }
  public set monthofyear(value: string) {
    this._monthofyear = value;
  }
  public resetMonthofyear() {
    this._monthofyear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthofyearInput() {
    return this._monthofyear;
  }

  // nooftimes - computed: true, optional: true, required: false
  private _nooftimes?: number; 
  public get nooftimes() {
    return this.getNumberAttribute('nooftimes');
  }
  public set nooftimes(value: number) {
    this._nooftimes = value;
  }
  public resetNooftimes() {
    this._nooftimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nooftimesInput() {
    return this._nooftimes;
  }

  // repeatintervalinminutes - computed: true, optional: true, required: false
  private _repeatintervalinminutes?: number; 
  public get repeatintervalinminutes() {
    return this.getNumberAttribute('repeatintervalinminutes');
  }
  public set repeatintervalinminutes(value: number) {
    this._repeatintervalinminutes = value;
  }
  public resetRepeatintervalinminutes() {
    this._repeatintervalinminutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatintervalinminutesInput() {
    return this._repeatintervalinminutes;
  }

  // repeatuntiltime - computed: true, optional: true, required: false
  private _repeatuntiltime?: number; 
  public get repeatuntiltime() {
    return this.getNumberAttribute('repeatuntiltime');
  }
  public set repeatuntiltime(value: number) {
    this._repeatuntiltime = value;
  }
  public resetRepeatuntiltime() {
    this._repeatuntiltime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatuntiltimeInput() {
    return this._repeatuntiltime;
  }

  // schedulefrequencytype - computed: false, optional: false, required: true
  private _schedulefrequencytype?: string; 
  public get schedulefrequencytype() {
    return this.getStringAttribute('schedulefrequencytype');
  }
  public set schedulefrequencytype(value: string) {
    this._schedulefrequencytype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulefrequencytypeInput() {
    return this._schedulefrequencytype;
  }

  // startdate - computed: true, optional: true, required: false
  private _startdate?: number; 
  public get startdate() {
    return this.getNumberAttribute('startdate');
  }
  public set startdate(value: number) {
    this._startdate = value;
  }
  public resetStartdate() {
    this._startdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startdateInput() {
    return this._startdate;
  }

  // starttime - computed: true, optional: true, required: false
  private _starttime?: number; 
  public get starttime() {
    return this.getNumberAttribute('starttime');
  }
  public set starttime(value: number) {
    this._starttime = value;
  }
  public resetStarttime() {
    this._starttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttimeInput() {
    return this._starttime;
  }

  // weeklydays - computed: true, optional: true, required: false
  private _weeklydays?: string[]; 
  public get weeklydays() {
    return cdktf.Fn.tolist(this.getListAttribute('weeklydays'));
  }
  public set weeklydays(value: string[]) {
    this._weeklydays = value;
  }
  public resetWeeklydays() {
    this._weeklydays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklydaysInput() {
    return this._weeklydays;
  }

  // weekofmonth - computed: true, optional: true, required: false
  private _weekofmonth?: string; 
  public get weekofmonth() {
    return this.getStringAttribute('weekofmonth');
  }
  public set weekofmonth(value: string) {
    this._weekofmonth = value;
  }
  public resetWeekofmonth() {
    this._weekofmonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekofmonthInput() {
    return this._weekofmonth;
  }

  // exceptions - computed: false, optional: true, required: false
  private _exceptions = new PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptionsList(this, "exceptions", true);
  public get exceptions() {
    return this._exceptions;
  }
  public putExceptions(value: PlanServerRpoBackupfrequencySchedulesSchedulepatternExceptions[] | cdktf.IResolvable) {
    this._exceptions.internalValue = value;
  }
  public resetExceptions() {
    this._exceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions.internalValue;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone = new PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: PlanServerRpoBackupfrequencySchedulesSchedulepatternTimezone[] | cdktf.IResolvable) {
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

export class PlanServerRpoBackupfrequencySchedulesSchedulepatternList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoBackupfrequencySchedulesSchedulepattern[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoBackupfrequencySchedulesSchedulepatternOutputReference {
    return new PlanServerRpoBackupfrequencySchedulesSchedulepatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoBackupfrequencySchedules {
  /**
  * Schedule Backup level [FULL, INCREMENTAL, DIFFERENTIAL, SYNTHETICFULL, TRANSACTIONLOG]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backuptype PlanServer#backuptype}
  */
  readonly backuptype: string;
  /**
  * Boolean to indicate if schedule is for database agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#fordatabasesonly PlanServer#fordatabasesonly}
  */
  readonly fordatabasesonly?: string;
  /**
  * Name of the schedule, for modify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#schedulename PlanServer#schedulename}
  */
  readonly schedulename: string;
  /**
  * Type of DR operation (only applicable for Failover groups) [PLANNED_FAILOVER, TEST_BOOT]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#vmoperationtype PlanServer#vmoperationtype}
  */
  readonly vmoperationtype?: string;
  /**
  * scheduleoption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#scheduleoption PlanServer#scheduleoption}
  */
  readonly scheduleoption?: PlanServerRpoBackupfrequencySchedulesScheduleoption[] | cdktf.IResolvable;
  /**
  * schedulepattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#schedulepattern PlanServer#schedulepattern}
  */
  readonly schedulepattern: PlanServerRpoBackupfrequencySchedulesSchedulepattern[] | cdktf.IResolvable;
}

export function planServerRpoBackupfrequencySchedulesToTerraform(struct?: PlanServerRpoBackupfrequencySchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backuptype: cdktf.stringToTerraform(struct!.backuptype),
    fordatabasesonly: cdktf.stringToTerraform(struct!.fordatabasesonly),
    schedulename: cdktf.stringToTerraform(struct!.schedulename),
    vmoperationtype: cdktf.stringToTerraform(struct!.vmoperationtype),
    scheduleoption: cdktf.listMapper(planServerRpoBackupfrequencySchedulesScheduleoptionToTerraform, true)(struct!.scheduleoption),
    schedulepattern: cdktf.listMapper(planServerRpoBackupfrequencySchedulesSchedulepatternToTerraform, true)(struct!.schedulepattern),
  }
}


export function planServerRpoBackupfrequencySchedulesToHclTerraform(struct?: PlanServerRpoBackupfrequencySchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backuptype: {
      value: cdktf.stringToHclTerraform(struct!.backuptype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fordatabasesonly: {
      value: cdktf.stringToHclTerraform(struct!.fordatabasesonly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedulename: {
      value: cdktf.stringToHclTerraform(struct!.schedulename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmoperationtype: {
      value: cdktf.stringToHclTerraform(struct!.vmoperationtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduleoption: {
      value: cdktf.listMapperHcl(planServerRpoBackupfrequencySchedulesScheduleoptionToHclTerraform, true)(struct!.scheduleoption),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerRpoBackupfrequencySchedulesScheduleoptionList",
    },
    schedulepattern: {
      value: cdktf.listMapperHcl(planServerRpoBackupfrequencySchedulesSchedulepatternToHclTerraform, true)(struct!.schedulepattern),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerRpoBackupfrequencySchedulesSchedulepatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoBackupfrequencySchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoBackupfrequencySchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backuptype !== undefined) {
      hasAnyValues = true;
      internalValueResult.backuptype = this._backuptype;
    }
    if (this._fordatabasesonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.fordatabasesonly = this._fordatabasesonly;
    }
    if (this._schedulename !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulename = this._schedulename;
    }
    if (this._vmoperationtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmoperationtype = this._vmoperationtype;
    }
    if (this._scheduleoption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleoption = this._scheduleoption?.internalValue;
    }
    if (this._schedulepattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulepattern = this._schedulepattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoBackupfrequencySchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backuptype = undefined;
      this._fordatabasesonly = undefined;
      this._schedulename = undefined;
      this._vmoperationtype = undefined;
      this._scheduleoption.internalValue = undefined;
      this._schedulepattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backuptype = value.backuptype;
      this._fordatabasesonly = value.fordatabasesonly;
      this._schedulename = value.schedulename;
      this._vmoperationtype = value.vmoperationtype;
      this._scheduleoption.internalValue = value.scheduleoption;
      this._schedulepattern.internalValue = value.schedulepattern;
    }
  }

  // backuptype - computed: false, optional: false, required: true
  private _backuptype?: string; 
  public get backuptype() {
    return this.getStringAttribute('backuptype');
  }
  public set backuptype(value: string) {
    this._backuptype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backuptypeInput() {
    return this._backuptype;
  }

  // fordatabasesonly - computed: true, optional: true, required: false
  private _fordatabasesonly?: string; 
  public get fordatabasesonly() {
    return this.getStringAttribute('fordatabasesonly');
  }
  public set fordatabasesonly(value: string) {
    this._fordatabasesonly = value;
  }
  public resetFordatabasesonly() {
    this._fordatabasesonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fordatabasesonlyInput() {
    return this._fordatabasesonly;
  }

  // schedulename - computed: false, optional: false, required: true
  private _schedulename?: string; 
  public get schedulename() {
    return this.getStringAttribute('schedulename');
  }
  public set schedulename(value: string) {
    this._schedulename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulenameInput() {
    return this._schedulename;
  }

  // vmoperationtype - computed: true, optional: true, required: false
  private _vmoperationtype?: string; 
  public get vmoperationtype() {
    return this.getStringAttribute('vmoperationtype');
  }
  public set vmoperationtype(value: string) {
    this._vmoperationtype = value;
  }
  public resetVmoperationtype() {
    this._vmoperationtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmoperationtypeInput() {
    return this._vmoperationtype;
  }

  // scheduleoption - computed: false, optional: true, required: false
  private _scheduleoption = new PlanServerRpoBackupfrequencySchedulesScheduleoptionList(this, "scheduleoption", false);
  public get scheduleoption() {
    return this._scheduleoption;
  }
  public putScheduleoption(value: PlanServerRpoBackupfrequencySchedulesScheduleoption[] | cdktf.IResolvable) {
    this._scheduleoption.internalValue = value;
  }
  public resetScheduleoption() {
    this._scheduleoption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleoptionInput() {
    return this._scheduleoption.internalValue;
  }

  // schedulepattern - computed: false, optional: false, required: true
  private _schedulepattern = new PlanServerRpoBackupfrequencySchedulesSchedulepatternList(this, "schedulepattern", false);
  public get schedulepattern() {
    return this._schedulepattern;
  }
  public putSchedulepattern(value: PlanServerRpoBackupfrequencySchedulesSchedulepattern[] | cdktf.IResolvable) {
    this._schedulepattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulepatternInput() {
    return this._schedulepattern.internalValue;
  }
}

export class PlanServerRpoBackupfrequencySchedulesList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoBackupfrequencySchedules[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoBackupfrequencySchedulesOutputReference {
    return new PlanServerRpoBackupfrequencySchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoBackupfrequency {
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#schedules PlanServer#schedules}
  */
  readonly schedules?: PlanServerRpoBackupfrequencySchedules[] | cdktf.IResolvable;
}

export function planServerRpoBackupfrequencyToTerraform(struct?: PlanServerRpoBackupfrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedules: cdktf.listMapper(planServerRpoBackupfrequencySchedulesToTerraform, true)(struct!.schedules),
  }
}


export function planServerRpoBackupfrequencyToHclTerraform(struct?: PlanServerRpoBackupfrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedules: {
      value: cdktf.listMapperHcl(planServerRpoBackupfrequencySchedulesToHclTerraform, true)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerRpoBackupfrequencySchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoBackupfrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoBackupfrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoBackupfrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedules.internalValue = value.schedules;
    }
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new PlanServerRpoBackupfrequencySchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: PlanServerRpoBackupfrequencySchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }
}

export class PlanServerRpoBackupfrequencyList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoBackupfrequency[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoBackupfrequencyOutputReference {
    return new PlanServerRpoBackupfrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoBackupwindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#dayofweek PlanServer#dayofweek}
  */
  readonly dayofweek?: string[];
  /**
  * Time in seconds since the beginning of the day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#endtime PlanServer#endtime}
  */
  readonly endtime?: number;
  /**
  * Time in seconds since the beginning of the day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#starttime PlanServer#starttime}
  */
  readonly starttime?: number;
}

export function planServerRpoBackupwindowToTerraform(struct?: PlanServerRpoBackupwindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofweek: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayofweek),
    endtime: cdktf.numberToTerraform(struct!.endtime),
    starttime: cdktf.numberToTerraform(struct!.starttime),
  }
}


export function planServerRpoBackupwindowToHclTerraform(struct?: PlanServerRpoBackupwindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dayofweek: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayofweek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    endtime: {
      value: cdktf.numberToHclTerraform(struct!.endtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starttime: {
      value: cdktf.numberToHclTerraform(struct!.starttime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoBackupwindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoBackupwindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayofweek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofweek = this._dayofweek;
    }
    if (this._endtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endtime = this._endtime;
    }
    if (this._starttime !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttime = this._starttime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoBackupwindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayofweek = undefined;
      this._endtime = undefined;
      this._starttime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayofweek = value.dayofweek;
      this._endtime = value.endtime;
      this._starttime = value.starttime;
    }
  }

  // dayofweek - computed: true, optional: true, required: false
  private _dayofweek?: string[]; 
  public get dayofweek() {
    return cdktf.Fn.tolist(this.getListAttribute('dayofweek'));
  }
  public set dayofweek(value: string[]) {
    this._dayofweek = value;
  }
  public resetDayofweek() {
    this._dayofweek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofweekInput() {
    return this._dayofweek;
  }

  // endtime - computed: true, optional: true, required: false
  private _endtime?: number; 
  public get endtime() {
    return this.getNumberAttribute('endtime');
  }
  public set endtime(value: number) {
    this._endtime = value;
  }
  public resetEndtime() {
    this._endtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endtimeInput() {
    return this._endtime;
  }

  // starttime - computed: true, optional: true, required: false
  private _starttime?: number; 
  public get starttime() {
    return this.getNumberAttribute('starttime');
  }
  public set starttime(value: number) {
    this._starttime = value;
  }
  public resetStarttime() {
    this._starttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttimeInput() {
    return this._starttime;
  }
}

export class PlanServerRpoBackupwindowList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoBackupwindow[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoBackupwindowOutputReference {
    return new PlanServerRpoBackupwindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoFullbackupwindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#dayofweek PlanServer#dayofweek}
  */
  readonly dayofweek?: string[];
  /**
  * Time in seconds since the beginning of the day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#endtime PlanServer#endtime}
  */
  readonly endtime?: number;
  /**
  * Time in seconds since the beginning of the day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#starttime PlanServer#starttime}
  */
  readonly starttime?: number;
}

export function planServerRpoFullbackupwindowToTerraform(struct?: PlanServerRpoFullbackupwindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dayofweek: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayofweek),
    endtime: cdktf.numberToTerraform(struct!.endtime),
    starttime: cdktf.numberToTerraform(struct!.starttime),
  }
}


export function planServerRpoFullbackupwindowToHclTerraform(struct?: PlanServerRpoFullbackupwindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dayofweek: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayofweek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    endtime: {
      value: cdktf.numberToHclTerraform(struct!.endtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starttime: {
      value: cdktf.numberToHclTerraform(struct!.starttime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoFullbackupwindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoFullbackupwindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayofweek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayofweek = this._dayofweek;
    }
    if (this._endtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endtime = this._endtime;
    }
    if (this._starttime !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttime = this._starttime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoFullbackupwindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayofweek = undefined;
      this._endtime = undefined;
      this._starttime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayofweek = value.dayofweek;
      this._endtime = value.endtime;
      this._starttime = value.starttime;
    }
  }

  // dayofweek - computed: true, optional: true, required: false
  private _dayofweek?: string[]; 
  public get dayofweek() {
    return cdktf.Fn.tolist(this.getListAttribute('dayofweek'));
  }
  public set dayofweek(value: string[]) {
    this._dayofweek = value;
  }
  public resetDayofweek() {
    this._dayofweek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayofweekInput() {
    return this._dayofweek;
  }

  // endtime - computed: true, optional: true, required: false
  private _endtime?: number; 
  public get endtime() {
    return this.getNumberAttribute('endtime');
  }
  public set endtime(value: number) {
    this._endtime = value;
  }
  public resetEndtime() {
    this._endtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endtimeInput() {
    return this._endtime;
  }

  // starttime - computed: true, optional: true, required: false
  private _starttime?: number; 
  public get starttime() {
    return this.getNumberAttribute('starttime');
  }
  public set starttime(value: number) {
    this._starttime = value;
  }
  public resetStarttime() {
    this._starttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttimeInput() {
    return this._starttime;
  }
}

export class PlanServerRpoFullbackupwindowList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoFullbackupwindow[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoFullbackupwindowOutputReference {
    return new PlanServerRpoFullbackupwindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpoSla {
  /**
  * Time provided in Unix format. Give 0 to reset any existing delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#enableafterdelay PlanServer#enableafterdelay}
  */
  readonly enableafterdelay?: number;
  /**
  * Flag to set to exclude plan from SLA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#excludefromsla PlanServer#excludefromsla}
  */
  readonly excludefromsla?: string;
  /**
  * Reason for exclusion from SLA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#exclusionreason PlanServer#exclusionreason}
  */
  readonly exclusionreason?: string;
  /**
  * SLA Period in Days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#slaperiod PlanServer#slaperiod}
  */
  readonly slaperiod?: number;
  /**
  * Flag to set to use System Default Service Level Agreement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#usesystemdefaultsla PlanServer#usesystemdefaultsla}
  */
  readonly usesystemdefaultsla?: string;
}

export function planServerRpoSlaToTerraform(struct?: PlanServerRpoSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enableafterdelay: cdktf.numberToTerraform(struct!.enableafterdelay),
    excludefromsla: cdktf.stringToTerraform(struct!.excludefromsla),
    exclusionreason: cdktf.stringToTerraform(struct!.exclusionreason),
    slaperiod: cdktf.numberToTerraform(struct!.slaperiod),
    usesystemdefaultsla: cdktf.stringToTerraform(struct!.usesystemdefaultsla),
  }
}


export function planServerRpoSlaToHclTerraform(struct?: PlanServerRpoSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enableafterdelay: {
      value: cdktf.numberToHclTerraform(struct!.enableafterdelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excludefromsla: {
      value: cdktf.stringToHclTerraform(struct!.excludefromsla),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusionreason: {
      value: cdktf.stringToHclTerraform(struct!.exclusionreason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slaperiod: {
      value: cdktf.numberToHclTerraform(struct!.slaperiod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usesystemdefaultsla: {
      value: cdktf.stringToHclTerraform(struct!.usesystemdefaultsla),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpoSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableafterdelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableafterdelay = this._enableafterdelay;
    }
    if (this._excludefromsla !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludefromsla = this._excludefromsla;
    }
    if (this._exclusionreason !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionreason = this._exclusionreason;
    }
    if (this._slaperiod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaperiod = this._slaperiod;
    }
    if (this._usesystemdefaultsla !== undefined) {
      hasAnyValues = true;
      internalValueResult.usesystemdefaultsla = this._usesystemdefaultsla;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpoSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableafterdelay = undefined;
      this._excludefromsla = undefined;
      this._exclusionreason = undefined;
      this._slaperiod = undefined;
      this._usesystemdefaultsla = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableafterdelay = value.enableafterdelay;
      this._excludefromsla = value.excludefromsla;
      this._exclusionreason = value.exclusionreason;
      this._slaperiod = value.slaperiod;
      this._usesystemdefaultsla = value.usesystemdefaultsla;
    }
  }

  // enableafterdelay - computed: true, optional: true, required: false
  private _enableafterdelay?: number; 
  public get enableafterdelay() {
    return this.getNumberAttribute('enableafterdelay');
  }
  public set enableafterdelay(value: number) {
    this._enableafterdelay = value;
  }
  public resetEnableafterdelay() {
    this._enableafterdelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableafterdelayInput() {
    return this._enableafterdelay;
  }

  // excludefromsla - computed: true, optional: true, required: false
  private _excludefromsla?: string; 
  public get excludefromsla() {
    return this.getStringAttribute('excludefromsla');
  }
  public set excludefromsla(value: string) {
    this._excludefromsla = value;
  }
  public resetExcludefromsla() {
    this._excludefromsla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludefromslaInput() {
    return this._excludefromsla;
  }

  // exclusionreason - computed: true, optional: true, required: false
  private _exclusionreason?: string; 
  public get exclusionreason() {
    return this.getStringAttribute('exclusionreason');
  }
  public set exclusionreason(value: string) {
    this._exclusionreason = value;
  }
  public resetExclusionreason() {
    this._exclusionreason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionreasonInput() {
    return this._exclusionreason;
  }

  // slaperiod - computed: true, optional: true, required: false
  private _slaperiod?: number; 
  public get slaperiod() {
    return this.getNumberAttribute('slaperiod');
  }
  public set slaperiod(value: number) {
    this._slaperiod = value;
  }
  public resetSlaperiod() {
    this._slaperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaperiodInput() {
    return this._slaperiod;
  }

  // usesystemdefaultsla - computed: true, optional: true, required: false
  private _usesystemdefaultsla?: string; 
  public get usesystemdefaultsla() {
    return this.getStringAttribute('usesystemdefaultsla');
  }
  public set usesystemdefaultsla(value: string) {
    this._usesystemdefaultsla = value;
  }
  public resetUsesystemdefaultsla() {
    this._usesystemdefaultsla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usesystemdefaultslaInput() {
    return this._usesystemdefaultsla;
  }
}

export class PlanServerRpoSlaList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpoSla[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoSlaOutputReference {
    return new PlanServerRpoSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerRpo {
  /**
  * backupfrequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupfrequency PlanServer#backupfrequency}
  */
  readonly backupfrequency?: PlanServerRpoBackupfrequency[] | cdktf.IResolvable;
  /**
  * backupwindow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupwindow PlanServer#backupwindow}
  */
  readonly backupwindow?: PlanServerRpoBackupwindow[] | cdktf.IResolvable;
  /**
  * fullbackupwindow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#fullbackupwindow PlanServer#fullbackupwindow}
  */
  readonly fullbackupwindow?: PlanServerRpoFullbackupwindow[] | cdktf.IResolvable;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#sla PlanServer#sla}
  */
  readonly sla?: PlanServerRpoSla[] | cdktf.IResolvable;
}

export function planServerRpoToTerraform(struct?: PlanServerRpo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupfrequency: cdktf.listMapper(planServerRpoBackupfrequencyToTerraform, true)(struct!.backupfrequency),
    backupwindow: cdktf.listMapper(planServerRpoBackupwindowToTerraform, true)(struct!.backupwindow),
    fullbackupwindow: cdktf.listMapper(planServerRpoFullbackupwindowToTerraform, true)(struct!.fullbackupwindow),
    sla: cdktf.listMapper(planServerRpoSlaToTerraform, true)(struct!.sla),
  }
}


export function planServerRpoToHclTerraform(struct?: PlanServerRpo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupfrequency: {
      value: cdktf.listMapperHcl(planServerRpoBackupfrequencyToHclTerraform, true)(struct!.backupfrequency),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerRpoBackupfrequencyList",
    },
    backupwindow: {
      value: cdktf.listMapperHcl(planServerRpoBackupwindowToHclTerraform, true)(struct!.backupwindow),
      isBlock: true,
      type: "set",
      storageClassType: "PlanServerRpoBackupwindowList",
    },
    fullbackupwindow: {
      value: cdktf.listMapperHcl(planServerRpoFullbackupwindowToHclTerraform, true)(struct!.fullbackupwindow),
      isBlock: true,
      type: "set",
      storageClassType: "PlanServerRpoFullbackupwindowList",
    },
    sla: {
      value: cdktf.listMapperHcl(planServerRpoSlaToHclTerraform, true)(struct!.sla),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerRpoSlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerRpoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerRpo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupfrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupfrequency = this._backupfrequency?.internalValue;
    }
    if (this._backupwindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupwindow = this._backupwindow?.internalValue;
    }
    if (this._fullbackupwindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullbackupwindow = this._fullbackupwindow?.internalValue;
    }
    if (this._sla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerRpo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupfrequency.internalValue = undefined;
      this._backupwindow.internalValue = undefined;
      this._fullbackupwindow.internalValue = undefined;
      this._sla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupfrequency.internalValue = value.backupfrequency;
      this._backupwindow.internalValue = value.backupwindow;
      this._fullbackupwindow.internalValue = value.fullbackupwindow;
      this._sla.internalValue = value.sla;
    }
  }

  // backupfrequency - computed: false, optional: true, required: false
  private _backupfrequency = new PlanServerRpoBackupfrequencyList(this, "backupfrequency", false);
  public get backupfrequency() {
    return this._backupfrequency;
  }
  public putBackupfrequency(value: PlanServerRpoBackupfrequency[] | cdktf.IResolvable) {
    this._backupfrequency.internalValue = value;
  }
  public resetBackupfrequency() {
    this._backupfrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupfrequencyInput() {
    return this._backupfrequency.internalValue;
  }

  // backupwindow - computed: false, optional: true, required: false
  private _backupwindow = new PlanServerRpoBackupwindowList(this, "backupwindow", true);
  public get backupwindow() {
    return this._backupwindow;
  }
  public putBackupwindow(value: PlanServerRpoBackupwindow[] | cdktf.IResolvable) {
    this._backupwindow.internalValue = value;
  }
  public resetBackupwindow() {
    this._backupwindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupwindowInput() {
    return this._backupwindow.internalValue;
  }

  // fullbackupwindow - computed: false, optional: true, required: false
  private _fullbackupwindow = new PlanServerRpoFullbackupwindowList(this, "fullbackupwindow", true);
  public get fullbackupwindow() {
    return this._fullbackupwindow;
  }
  public putFullbackupwindow(value: PlanServerRpoFullbackupwindow[] | cdktf.IResolvable) {
    this._fullbackupwindow.internalValue = value;
  }
  public resetFullbackupwindow() {
    this._fullbackupwindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullbackupwindowInput() {
    return this._fullbackupwindow.internalValue;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new PlanServerRpoSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: PlanServerRpoSla[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }
}

export class PlanServerRpoList extends cdktf.ComplexList {
  public internalValue? : PlanServerRpo[] | cdktf.IResolvable

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
  public get(index: number): PlanServerRpoOutputReference {
    return new PlanServerRpoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerSettingsFilesearch {
  /**
  * Flag for enabling indexing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#enabled PlanServer#enabled}
  */
  readonly enabled?: string;
  /**
  * Type of indexing status. [NOT_APPLICABLE, ENABLED, SETUP_IN_PROGRESS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#status PlanServer#status}
  */
  readonly status?: string;
  /**
  * Tells what is happening behind the scene, so that user can knows why indexing is not enabled or if its in progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#statusmessage PlanServer#statusmessage}
  */
  readonly statusmessage?: string;
}

export function planServerSettingsFilesearchToTerraform(struct?: PlanServerSettingsFilesearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    status: cdktf.stringToTerraform(struct!.status),
    statusmessage: cdktf.stringToTerraform(struct!.statusmessage),
  }
}


export function planServerSettingsFilesearchToHclTerraform(struct?: PlanServerSettingsFilesearch | cdktf.IResolvable): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statusmessage: {
      value: cdktf.stringToHclTerraform(struct!.statusmessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerSettingsFilesearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerSettingsFilesearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusmessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusmessage = this._statusmessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerSettingsFilesearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._status = undefined;
      this._statusmessage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._status = value.status;
      this._statusmessage = value.statusmessage;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // statusmessage - computed: true, optional: true, required: false
  private _statusmessage?: string; 
  public get statusmessage() {
    return this.getStringAttribute('statusmessage');
  }
  public set statusmessage(value: string) {
    this._statusmessage = value;
  }
  public resetStatusmessage() {
    this._statusmessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusmessageInput() {
    return this._statusmessage;
  }
}

export class PlanServerSettingsFilesearchList extends cdktf.ComplexList {
  public internalValue? : PlanServerSettingsFilesearch[] | cdktf.IResolvable

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
  public get(index: number): PlanServerSettingsFilesearchOutputReference {
    return new PlanServerSettingsFilesearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerSettings {
  /**
  * Setting to suggest plan has some advanced settings present. Setting is OEM specific and not applicable for all cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#enableadvancedview PlanServer#enableadvancedview}
  */
  readonly enableadvancedview?: string;
  /**
  * filesearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#filesearch PlanServer#filesearch}
  */
  readonly filesearch?: PlanServerSettingsFilesearch[] | cdktf.IResolvable;
}

export function planServerSettingsToTerraform(struct?: PlanServerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enableadvancedview: cdktf.stringToTerraform(struct!.enableadvancedview),
    filesearch: cdktf.listMapper(planServerSettingsFilesearchToTerraform, true)(struct!.filesearch),
  }
}


export function planServerSettingsToHclTerraform(struct?: PlanServerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enableadvancedview: {
      value: cdktf.stringToHclTerraform(struct!.enableadvancedview),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesearch: {
      value: cdktf.listMapperHcl(planServerSettingsFilesearchToHclTerraform, true)(struct!.filesearch),
      isBlock: true,
      type: "list",
      storageClassType: "PlanServerSettingsFilesearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableadvancedview !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableadvancedview = this._enableadvancedview;
    }
    if (this._filesearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesearch = this._filesearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableadvancedview = undefined;
      this._filesearch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableadvancedview = value.enableadvancedview;
      this._filesearch.internalValue = value.filesearch;
    }
  }

  // enableadvancedview - computed: true, optional: true, required: false
  private _enableadvancedview?: string; 
  public get enableadvancedview() {
    return this.getStringAttribute('enableadvancedview');
  }
  public set enableadvancedview(value: string) {
    this._enableadvancedview = value;
  }
  public resetEnableadvancedview() {
    this._enableadvancedview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableadvancedviewInput() {
    return this._enableadvancedview;
  }

  // filesearch - computed: false, optional: true, required: false
  private _filesearch = new PlanServerSettingsFilesearchList(this, "filesearch", false);
  public get filesearch() {
    return this._filesearch;
  }
  public putFilesearch(value: PlanServerSettingsFilesearch[] | cdktf.IResolvable) {
    this._filesearch.internalValue = value;
  }
  public resetFilesearch() {
    this._filesearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesearchInput() {
    return this._filesearch.internalValue;
  }
}

export class PlanServerSettingsList extends cdktf.ComplexList {
  public internalValue? : PlanServerSettings[] | cdktf.IResolvable

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
  public get(index: number): PlanServerSettingsOutputReference {
    return new PlanServerSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerSnapshotoptions {
  /**
  * Backup copy RPO in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#backupcopyrpomins PlanServer#backupcopyrpomins}
  */
  readonly backupcopyrpomins?: number;
  /**
  * Flag to enable backup copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#enablebackupcopy PlanServer#enablebackupcopy}
  */
  readonly enablebackupcopy?: string;
}

export function planServerSnapshotoptionsToTerraform(struct?: PlanServerSnapshotoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupcopyrpomins: cdktf.numberToTerraform(struct!.backupcopyrpomins),
    enablebackupcopy: cdktf.stringToTerraform(struct!.enablebackupcopy),
  }
}


export function planServerSnapshotoptionsToHclTerraform(struct?: PlanServerSnapshotoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupcopyrpomins: {
      value: cdktf.numberToHclTerraform(struct!.backupcopyrpomins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enablebackupcopy: {
      value: cdktf.stringToHclTerraform(struct!.enablebackupcopy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerSnapshotoptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerSnapshotoptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupcopyrpomins !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupcopyrpomins = this._backupcopyrpomins;
    }
    if (this._enablebackupcopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablebackupcopy = this._enablebackupcopy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerSnapshotoptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupcopyrpomins = undefined;
      this._enablebackupcopy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupcopyrpomins = value.backupcopyrpomins;
      this._enablebackupcopy = value.enablebackupcopy;
    }
  }

  // backupcopyrpomins - computed: true, optional: true, required: false
  private _backupcopyrpomins?: number; 
  public get backupcopyrpomins() {
    return this.getNumberAttribute('backupcopyrpomins');
  }
  public set backupcopyrpomins(value: number) {
    this._backupcopyrpomins = value;
  }
  public resetBackupcopyrpomins() {
    this._backupcopyrpomins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupcopyrpominsInput() {
    return this._backupcopyrpomins;
  }

  // enablebackupcopy - computed: true, optional: true, required: false
  private _enablebackupcopy?: string; 
  public get enablebackupcopy() {
    return this.getStringAttribute('enablebackupcopy');
  }
  public set enablebackupcopy(value: string) {
    this._enablebackupcopy = value;
  }
  public resetEnablebackupcopy() {
    this._enablebackupcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablebackupcopyInput() {
    return this._enablebackupcopy;
  }
}

export class PlanServerSnapshotoptionsList extends cdktf.ComplexList {
  public internalValue? : PlanServerSnapshotoptions[] | cdktf.IResolvable

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
  public get(index: number): PlanServerSnapshotoptionsOutputReference {
    return new PlanServerSnapshotoptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerWorkloadSolutions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function planServerWorkloadSolutionsToTerraform(struct?: PlanServerWorkloadSolutions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function planServerWorkloadSolutionsToHclTerraform(struct?: PlanServerWorkloadSolutions | cdktf.IResolvable): any {
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

export class PlanServerWorkloadSolutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerWorkloadSolutions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerWorkloadSolutions | cdktf.IResolvable | undefined) {
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

export class PlanServerWorkloadSolutionsList extends cdktf.ComplexList {
  public internalValue? : PlanServerWorkloadSolutions[] | cdktf.IResolvable

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
  public get(index: number): PlanServerWorkloadSolutionsOutputReference {
    return new PlanServerWorkloadSolutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerWorkloadWorkloadtypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#id PlanServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function planServerWorkloadWorkloadtypesToTerraform(struct?: PlanServerWorkloadWorkloadtypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function planServerWorkloadWorkloadtypesToHclTerraform(struct?: PlanServerWorkloadWorkloadtypes | cdktf.IResolvable): any {
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

export class PlanServerWorkloadWorkloadtypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerWorkloadWorkloadtypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlanServerWorkloadWorkloadtypes | cdktf.IResolvable | undefined) {
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

export class PlanServerWorkloadWorkloadtypesList extends cdktf.ComplexList {
  public internalValue? : PlanServerWorkloadWorkloadtypes[] | cdktf.IResolvable

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
  public get(index: number): PlanServerWorkloadWorkloadtypesOutputReference {
    return new PlanServerWorkloadWorkloadtypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanServerWorkload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#workloadgrouptypes PlanServer#workloadgrouptypes}
  */
  readonly workloadgrouptypes?: string[];
  /**
  * solutions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#solutions PlanServer#solutions}
  */
  readonly solutions?: PlanServerWorkloadSolutions[] | cdktf.IResolvable;
  /**
  * workloadtypes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#workloadtypes PlanServer#workloadtypes}
  */
  readonly workloadtypes?: PlanServerWorkloadWorkloadtypes[] | cdktf.IResolvable;
}

export function planServerWorkloadToTerraform(struct?: PlanServerWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workloadgrouptypes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workloadgrouptypes),
    solutions: cdktf.listMapper(planServerWorkloadSolutionsToTerraform, true)(struct!.solutions),
    workloadtypes: cdktf.listMapper(planServerWorkloadWorkloadtypesToTerraform, true)(struct!.workloadtypes),
  }
}


export function planServerWorkloadToHclTerraform(struct?: PlanServerWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workloadgrouptypes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workloadgrouptypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    solutions: {
      value: cdktf.listMapperHcl(planServerWorkloadSolutionsToHclTerraform, true)(struct!.solutions),
      isBlock: true,
      type: "set",
      storageClassType: "PlanServerWorkloadSolutionsList",
    },
    workloadtypes: {
      value: cdktf.listMapperHcl(planServerWorkloadWorkloadtypesToHclTerraform, true)(struct!.workloadtypes),
      isBlock: true,
      type: "set",
      storageClassType: "PlanServerWorkloadWorkloadtypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanServerWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanServerWorkload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadgrouptypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadgrouptypes = this._workloadgrouptypes;
    }
    if (this._solutions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solutions = this._solutions?.internalValue;
    }
    if (this._workloadtypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadtypes = this._workloadtypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanServerWorkload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workloadgrouptypes = undefined;
      this._solutions.internalValue = undefined;
      this._workloadtypes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workloadgrouptypes = value.workloadgrouptypes;
      this._solutions.internalValue = value.solutions;
      this._workloadtypes.internalValue = value.workloadtypes;
    }
  }

  // workloadgrouptypes - computed: true, optional: true, required: false
  private _workloadgrouptypes?: string[]; 
  public get workloadgrouptypes() {
    return cdktf.Fn.tolist(this.getListAttribute('workloadgrouptypes'));
  }
  public set workloadgrouptypes(value: string[]) {
    this._workloadgrouptypes = value;
  }
  public resetWorkloadgrouptypes() {
    this._workloadgrouptypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadgrouptypesInput() {
    return this._workloadgrouptypes;
  }

  // solutions - computed: false, optional: true, required: false
  private _solutions = new PlanServerWorkloadSolutionsList(this, "solutions", true);
  public get solutions() {
    return this._solutions;
  }
  public putSolutions(value: PlanServerWorkloadSolutions[] | cdktf.IResolvable) {
    this._solutions.internalValue = value;
  }
  public resetSolutions() {
    this._solutions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionsInput() {
    return this._solutions.internalValue;
  }

  // workloadtypes - computed: false, optional: true, required: false
  private _workloadtypes = new PlanServerWorkloadWorkloadtypesList(this, "workloadtypes", true);
  public get workloadtypes() {
    return this._workloadtypes;
  }
  public putWorkloadtypes(value: PlanServerWorkloadWorkloadtypes[] | cdktf.IResolvable) {
    this._workloadtypes.internalValue = value;
  }
  public resetWorkloadtypes() {
    this._workloadtypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadtypesInput() {
    return this._workloadtypes.internalValue;
  }
}

export class PlanServerWorkloadList extends cdktf.ComplexList {
  public internalValue? : PlanServerWorkload[] | cdktf.IResolvable

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
  public get(index: number): PlanServerWorkloadOutputReference {
    return new PlanServerWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server commvault_plan_server}
*/
export class PlanServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_plan_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlanServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlanServer to import
  * @param importFromId The id of the existing PlanServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlanServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_plan_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_server commvault_plan_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlanServerConfig
  */
  public constructor(scope: Construct, id: string, config: PlanServerConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_plan_server',
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
    this._allowplanoverride = config.allowplanoverride;
    this._backupdestinationids = config.backupdestinationids;
    this._filesystemaddon = config.filesystemaddon;
    this._id = config.id;
    this._planname = config.planname;
    this._backupcontent.internalValue = config.backupcontent;
    this._backupdestinations.internalValue = config.backupdestinations;
    this._databaseoptions.internalValue = config.databaseoptions;
    this._overrideinheritsettings.internalValue = config.overrideinheritsettings;
    this._overriderestrictions.internalValue = config.overriderestrictions;
    this._parentplan.internalValue = config.parentplan;
    this._regiontoconfigure.internalValue = config.regiontoconfigure;
    this._rpo.internalValue = config.rpo;
    this._settings.internalValue = config.settings;
    this._snapshotoptions.internalValue = config.snapshotoptions;
    this._workload.internalValue = config.workload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowplanoverride - computed: true, optional: true, required: false
  private _allowplanoverride?: string; 
  public get allowplanoverride() {
    return this.getStringAttribute('allowplanoverride');
  }
  public set allowplanoverride(value: string) {
    this._allowplanoverride = value;
  }
  public resetAllowplanoverride() {
    this._allowplanoverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowplanoverrideInput() {
    return this._allowplanoverride;
  }

  // backupdestinationids - computed: true, optional: true, required: false
  private _backupdestinationids?: number[]; 
  public get backupdestinationids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('backupdestinationids')));
  }
  public set backupdestinationids(value: number[]) {
    this._backupdestinationids = value;
  }
  public resetBackupdestinationids() {
    this._backupdestinationids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupdestinationidsInput() {
    return this._backupdestinationids;
  }

  // filesystemaddon - computed: true, optional: true, required: false
  private _filesystemaddon?: string; 
  public get filesystemaddon() {
    return this.getStringAttribute('filesystemaddon');
  }
  public set filesystemaddon(value: string) {
    this._filesystemaddon = value;
  }
  public resetFilesystemaddon() {
    this._filesystemaddon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemaddonInput() {
    return this._filesystemaddon;
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

  // planname - computed: false, optional: false, required: true
  private _planname?: string; 
  public get planname() {
    return this.getStringAttribute('planname');
  }
  public set planname(value: string) {
    this._planname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plannameInput() {
    return this._planname;
  }

  // backupcontent - computed: false, optional: true, required: false
  private _backupcontent = new PlanServerBackupcontentList(this, "backupcontent", false);
  public get backupcontent() {
    return this._backupcontent;
  }
  public putBackupcontent(value: PlanServerBackupcontent[] | cdktf.IResolvable) {
    this._backupcontent.internalValue = value;
  }
  public resetBackupcontent() {
    this._backupcontent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupcontentInput() {
    return this._backupcontent.internalValue;
  }

  // backupdestinations - computed: false, optional: true, required: false
  private _backupdestinations = new PlanServerBackupdestinationsList(this, "backupdestinations", true);
  public get backupdestinations() {
    return this._backupdestinations;
  }
  public putBackupdestinations(value: PlanServerBackupdestinations[] | cdktf.IResolvable) {
    this._backupdestinations.internalValue = value;
  }
  public resetBackupdestinations() {
    this._backupdestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupdestinationsInput() {
    return this._backupdestinations.internalValue;
  }

  // databaseoptions - computed: false, optional: true, required: false
  private _databaseoptions = new PlanServerDatabaseoptionsList(this, "databaseoptions", false);
  public get databaseoptions() {
    return this._databaseoptions;
  }
  public putDatabaseoptions(value: PlanServerDatabaseoptions[] | cdktf.IResolvable) {
    this._databaseoptions.internalValue = value;
  }
  public resetDatabaseoptions() {
    this._databaseoptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseoptionsInput() {
    return this._databaseoptions.internalValue;
  }

  // overrideinheritsettings - computed: false, optional: true, required: false
  private _overrideinheritsettings = new PlanServerOverrideinheritsettingsList(this, "overrideinheritsettings", false);
  public get overrideinheritsettings() {
    return this._overrideinheritsettings;
  }
  public putOverrideinheritsettings(value: PlanServerOverrideinheritsettings[] | cdktf.IResolvable) {
    this._overrideinheritsettings.internalValue = value;
  }
  public resetOverrideinheritsettings() {
    this._overrideinheritsettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideinheritsettingsInput() {
    return this._overrideinheritsettings.internalValue;
  }

  // overriderestrictions - computed: false, optional: true, required: false
  private _overriderestrictions = new PlanServerOverriderestrictionsList(this, "overriderestrictions", false);
  public get overriderestrictions() {
    return this._overriderestrictions;
  }
  public putOverriderestrictions(value: PlanServerOverriderestrictions[] | cdktf.IResolvable) {
    this._overriderestrictions.internalValue = value;
  }
  public resetOverriderestrictions() {
    this._overriderestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overriderestrictionsInput() {
    return this._overriderestrictions.internalValue;
  }

  // parentplan - computed: false, optional: true, required: false
  private _parentplan = new PlanServerParentplanList(this, "parentplan", false);
  public get parentplan() {
    return this._parentplan;
  }
  public putParentplan(value: PlanServerParentplan[] | cdktf.IResolvable) {
    this._parentplan.internalValue = value;
  }
  public resetParentplan() {
    this._parentplan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentplanInput() {
    return this._parentplan.internalValue;
  }

  // regiontoconfigure - computed: false, optional: true, required: false
  private _regiontoconfigure = new PlanServerRegiontoconfigureList(this, "regiontoconfigure", false);
  public get regiontoconfigure() {
    return this._regiontoconfigure;
  }
  public putRegiontoconfigure(value: PlanServerRegiontoconfigure[] | cdktf.IResolvable) {
    this._regiontoconfigure.internalValue = value;
  }
  public resetRegiontoconfigure() {
    this._regiontoconfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regiontoconfigureInput() {
    return this._regiontoconfigure.internalValue;
  }

  // rpo - computed: false, optional: true, required: false
  private _rpo = new PlanServerRpoList(this, "rpo", false);
  public get rpo() {
    return this._rpo;
  }
  public putRpo(value: PlanServerRpo[] | cdktf.IResolvable) {
    this._rpo.internalValue = value;
  }
  public resetRpo() {
    this._rpo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInput() {
    return this._rpo.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new PlanServerSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: PlanServerSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // snapshotoptions - computed: false, optional: true, required: false
  private _snapshotoptions = new PlanServerSnapshotoptionsList(this, "snapshotoptions", false);
  public get snapshotoptions() {
    return this._snapshotoptions;
  }
  public putSnapshotoptions(value: PlanServerSnapshotoptions[] | cdktf.IResolvable) {
    this._snapshotoptions.internalValue = value;
  }
  public resetSnapshotoptions() {
    this._snapshotoptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotoptionsInput() {
    return this._snapshotoptions.internalValue;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new PlanServerWorkloadList(this, "workload", false);
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: PlanServerWorkload[] | cdktf.IResolvable) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowplanoverride: cdktf.stringToTerraform(this._allowplanoverride),
      backupdestinationids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._backupdestinationids),
      filesystemaddon: cdktf.stringToTerraform(this._filesystemaddon),
      id: cdktf.stringToTerraform(this._id),
      planname: cdktf.stringToTerraform(this._planname),
      backupcontent: cdktf.listMapper(planServerBackupcontentToTerraform, true)(this._backupcontent.internalValue),
      backupdestinations: cdktf.listMapper(planServerBackupdestinationsToTerraform, true)(this._backupdestinations.internalValue),
      databaseoptions: cdktf.listMapper(planServerDatabaseoptionsToTerraform, true)(this._databaseoptions.internalValue),
      overrideinheritsettings: cdktf.listMapper(planServerOverrideinheritsettingsToTerraform, true)(this._overrideinheritsettings.internalValue),
      overriderestrictions: cdktf.listMapper(planServerOverriderestrictionsToTerraform, true)(this._overriderestrictions.internalValue),
      parentplan: cdktf.listMapper(planServerParentplanToTerraform, true)(this._parentplan.internalValue),
      regiontoconfigure: cdktf.listMapper(planServerRegiontoconfigureToTerraform, true)(this._regiontoconfigure.internalValue),
      rpo: cdktf.listMapper(planServerRpoToTerraform, true)(this._rpo.internalValue),
      settings: cdktf.listMapper(planServerSettingsToTerraform, true)(this._settings.internalValue),
      snapshotoptions: cdktf.listMapper(planServerSnapshotoptionsToTerraform, true)(this._snapshotoptions.internalValue),
      workload: cdktf.listMapper(planServerWorkloadToTerraform, true)(this._workload.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowplanoverride: {
        value: cdktf.stringToHclTerraform(this._allowplanoverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backupdestinationids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._backupdestinationids),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      filesystemaddon: {
        value: cdktf.stringToHclTerraform(this._filesystemaddon),
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
      planname: {
        value: cdktf.stringToHclTerraform(this._planname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backupcontent: {
        value: cdktf.listMapperHcl(planServerBackupcontentToHclTerraform, true)(this._backupcontent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerBackupcontentList",
      },
      backupdestinations: {
        value: cdktf.listMapperHcl(planServerBackupdestinationsToHclTerraform, true)(this._backupdestinations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlanServerBackupdestinationsList",
      },
      databaseoptions: {
        value: cdktf.listMapperHcl(planServerDatabaseoptionsToHclTerraform, true)(this._databaseoptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerDatabaseoptionsList",
      },
      overrideinheritsettings: {
        value: cdktf.listMapperHcl(planServerOverrideinheritsettingsToHclTerraform, true)(this._overrideinheritsettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerOverrideinheritsettingsList",
      },
      overriderestrictions: {
        value: cdktf.listMapperHcl(planServerOverriderestrictionsToHclTerraform, true)(this._overriderestrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerOverriderestrictionsList",
      },
      parentplan: {
        value: cdktf.listMapperHcl(planServerParentplanToHclTerraform, true)(this._parentplan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerParentplanList",
      },
      regiontoconfigure: {
        value: cdktf.listMapperHcl(planServerRegiontoconfigureToHclTerraform, true)(this._regiontoconfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerRegiontoconfigureList",
      },
      rpo: {
        value: cdktf.listMapperHcl(planServerRpoToHclTerraform, true)(this._rpo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerRpoList",
      },
      settings: {
        value: cdktf.listMapperHcl(planServerSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerSettingsList",
      },
      snapshotoptions: {
        value: cdktf.listMapperHcl(planServerSnapshotoptionsToHclTerraform, true)(this._snapshotoptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerSnapshotoptionsList",
      },
      workload: {
        value: cdktf.listMapperHcl(planServerWorkloadToHclTerraform, true)(this._workload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanServerWorkloadList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
